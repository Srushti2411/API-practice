import express from 'express'

//query parameter-1  ------
/** const app = express();
const PORT = 5000;
app.get('/suyu',(req,res)=>{
     console.log(req.query);

    res.json({
        message : "Order Received"
    })
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} `);
})  **/

//query parameter-2  --------
/** const app = express();
const PORT = 5000;
app.get('/food/order',(req,res)=>{
    const {menu,price,quantity}=req.query;
    const totalprice = parseInt(price)*parseInt(quantity);
    res.json({
        meassage: `you have order ${menu} and bill is ${totalprice}`
    })
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} `);
}) **/

//path parameter-1  ---------
/**const app = express();
const PORT = 5000;
app.get('/food/type',(req,res)=>{
    console.log(req.params)
    res.json({
        message:"you have ordered food"
    });
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} `);
}) **/

//path parameter-2 -----------
/**const app = express();
const PORT = 5000;
app.get('/food/:type',(req,res)=>{
    const {type} = req.params;

    if(type =="veg"){
        return res.json({
            message:"You have ordered veg food"
        })
    }
    else
        return res.json({
            message:"You have ordered Non-veg food"
        })

})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} `);
})**/

//headers  --------
/* const app = express();
const PORT = 5000;
app.get('/food/order',(req,res)=>{
    const {menu,price,quantity}=req.query;
    const {user,country}=req.headers;
    const totalprice = parseInt(price)*parseInt(quantity);
    res.json({
        meassage: `you have order ${menu} and bill is ${totalprice}`,
        details: `you are ${user} from ${country}`
    })
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} `);
}) */

// bodyy

const app = express();
app.use(express.json());
const PORT = 5000;

app.post('/user',(req,res)=>{
    const{name,age}=req.body;
    console.log(req.body);

    res.json({
        message:'user created'
    })
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} `);
})