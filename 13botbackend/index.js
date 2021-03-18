const express = require("express");
const bodyparser = require("body-parser");
const Pronostico = require("./db");
const app = express();
const mongoose = require("mongoose");
const uri = "mongodb+srv://mazculo:kKZL8ZuG@cluster0.zxvez.mongodb.net/bikesharing";
const cors = require("cors");

mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log(" Mongoose is connected")
  );
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));




app.listen(3000,(req, res)=>{
    console.log("listening on port 3000");

})


app.get("/", (req, res)=>{
    Pronostico.find({}, (err, pro)=>{
        res.send({
            text: pro[0].text
        })
    })
})

app.post("/", (req, res)=>{
    Pronostico.find({}, (err, pro) =>{
        console.log(pro)
        pro = pro[0];
        pro.overwrite({text: req.body.text});
        pro.save((err)=>{
            if(err) console.log(err);
            else{
                res.sendStatus(200);
            }
        })
    })

})