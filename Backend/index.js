port =8000;
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const jwt=require("jsonwebtoken");
const multer=require("multer");
//using this path we will access backend directory in express app
const path=require("path")
const cors=require("cors");

app.use(express.json());
app.use(cors()); //using this app will connect to express using 3000 port

//Database Connection with mongodb
mongoose.connect('mongodb://localhost:27017/ecommerce')

//api creation

app.get("/",(req,res)=>{
    res.send("Welcome to E-commerce API")
})


//used multer to store images
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload=multer({storage:storage})

//creating end point to upload image

app.use('/images',express.static('upload/images'))

app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`,
        message:"Image uploaded successfully",
    })
})


const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
        },
        image:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        new_price:{
            type:Number,
            required:true,
        },
        old_price:{
            type:Number,
             required:true,
                
        },
        date:{
            type:Date,
            default:Date.now,
        },
        available:{
            type:Boolean,
            default:true,
        },    
})

app.post('/addproduct', async (req, res) => {
    let id;

    if (!req.body.id) {
        // Fetch all products
        let products = await Product.find({});
        
        if (products.length > 0) {
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id + 1; // Increment the last product ID by 1
        } else {
            id = 1; // Start with 1 if no products exist
        }
    } else {
        id = req.body.id; // Use the provided ID
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    console.log(product);

    try {
        await product.save(); // Automatically save in the database
        console.log("Product saved");

        res.json({
            success: true,
            name: req.body.name,
            message: "Product added successfully"
        });
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add product"
        });
    }
});



//creating API For deleting product
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("item removed");
    res.json({
        success:true,
        name:"req.body.name",
        message:"product removed successfully"
        
    })
})


//creating API for getting all products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

//user schema
const Users = new mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})



//creating endpoint for resgistering the user

app.post('/signup',async (req,res)=>{
//existing user
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400)
        .json({
            success:false,
            errors:"existing user found with same email address"
        })
    }
    //empty cart
    let cart={};
    for(let i=0;i<300;i++)
    {
            cart[i]=0;
    }
    //creating user
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
        
    })
    //saving in database
    await user.save();

    //jwt authentication
    const data =  {
        user:{
            id:user.id
        }
    }
    //creating token
    //generating token
    const token = jwt.sign(data,'secret_ecom');
    res.json({
        success:true,
        token,
    })

})

//end point for  user login
app.post('/login',async(req,res)=>{
    let user= await Users.findOne({email:req.body.email});
    if(user)
        {
            //comparing password
            const passCompare = req.body.password===user.password;
            if(passCompare){
                const data =  {
                    user:{
                        id:user.id

                    }
                }
                //jwt to create token
                const token = jwt.sign(data,"secret_ecom");
                res.json({
                    success:true,
                    token
                });
            }

            else{
                res.json({
                    success:false,
                    errors:"Wrong Password"
                })
            }
        }

        else{
            res.json({
                success:false,
                errors:"User Not Found,Wrong email id"
            })
        }
})



app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on port " +port);
    }
    else{
        console.log("Error in running server" + error);
    }
})



