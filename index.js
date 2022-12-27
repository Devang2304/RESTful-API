const express =require('express');
const app = express();
const PORT=8080;

//using a middleware
app.use(express.json());
//starting the server
app.listen(
    PORT,
    ()=>console.log(`listening to port http://localhost:${PORT}`)
);

//creating an end point 
app.get('/tshirt',(req,res)=>{
    res.status(200).send({
        tshirt:'👕',
        size:'large'
    });
});

//using the dynamic url that will fetch different stuffs
// using ':id' (route params) which captures dyanmic values in the URL
app.post('/tshirt/:id',(req,res)=>{
    const {id}=req.params;
    const {logo} =req.body;

    if(!logo){
        res.status(418).send(
            {message:'We need a fucking logo!'}
        )
    }
    res.send({
        tshirt:`👕 with your ${logo} and ID of ${id}`,

    })
})