var express = require("express");

var cors = require("cors");

var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://127.0.0.1:27017";


var app = express();
app.use(cors());
app.use(express.urlencoded({
  extended:true
}))

app.use(express.json())

app.get("/getusers",(req,res)=>{
  mongoClient.connect(connectionString, (err,clientObj)=>{
    if(!err){
     var database= clientObj.db("reactdb")
      database.collection("tblusers").find({}).toArray((err,data) =>{
        if(!err){
          res.send(data)
        }
      })
    }
  })
});

app.post("/registerusers",(req, res)=>{
  var Details={
    UserId:req.body.UserId,
    Username:req.body.Username,
    Password:req.body.Password,
    Age:parseInt(req.body.Age),
    mobile:req.body.mobile,
    subscribe:(req.body.subscribe=="true")?true:false
  }
  mongoClient.connect(connectionString,(err,clientObj)=>{
       if(!err){
        var database = clientObj.db("reactdb")
        database.collection("tblusers").insertOne(Details,(err, result)=>{
          if(!err){
            console.log("Record inserted");
            res.redirect("/getusers");
          }
        })
       }
  })
});


app.post("/buynow", (req,res) =>{
  var Details={
    Fullname:req.body.Fullname,
      Mobilenumber:req.body.Mobilenumber,
      Housedetails:req.body.Housedetails,
      Area:req.body.Area,
      Landmark:req.body.Landmark,
      Pincode:parseInt(req.body.Pincode),
      Towncity:req.body.Towncity,
      State:req.body.State
  }
  mongoClient.connect(connectionString,(err,clientObj) =>{
    if(!err){
      var database=clientObj.db("reactdb")
      database.collection("orders").insertOne(Details, (err,result)=>{
        if(!err){
          console.log("Order submitted");
        
        }
      })
    }
  })
});

app.get("/getproducts",  (req,res) =>{
    mongoClient.connect(connectionString,(err,clientObj) =>{
           if(!err){
           var database= clientObj.db("reactdb");
           database.collection("tblproducts").find({}).toArray((err,documents) =>{
            if(!err){
              res.send(documents)
            }
           })
           }
    })
});

app.get("/getcategories",  (req,res) =>{
  mongoClient.connect(connectionString,(err,clientObj) =>{
         if(!err){
         var database= clientObj.db("reactdb");
         database.collection("tblcategories").find({}).toArray((err,documents) =>{
          if(!err){
            res.send(documents)
          }
         })
         }
  })
});

app.get("/getproduct/:id",  (req,res) =>{
  let Id = parseInt(req.params.id)
  mongoClient.connect(connectionString,(err,clientObj) =>{
         if(!err){
         var database= clientObj.db("reactdb");
         database.collection("tblproducts").find({id:Id}).toArray((err,documents) =>{
          if(!err){
            res.send(documents)
          }
         })
         }
  })
})


app.listen(4000);
console.log("server started : http://127.0.0.1:4000");