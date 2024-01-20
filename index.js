import express from "express"
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.urlencoded({extended : true}));

app.get("/" , (req, res) =>{
    res.render("index.ejs")
})

app.post("/facts" ,async (req, res) =>{
    let number = req.body.number;
    const response = await axios.get("http://numbersapi.com/"+number);
    const result = response.data;
    console.log(result);
    res.render("index.ejs" , {
        fact: result
    })
})

app.listen(port , () =>{
    console.log("server Running ... ");

})
