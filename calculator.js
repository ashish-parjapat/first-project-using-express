const express = require("express")
const bodyParser = require("body-parser")
    //const urlencoded = require("body-parser/lib/types/urlencoded")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})
app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    // console.log(req.body.num1);
    res.send("your answer is" + result)


});

app.listen(3000, function() {
    console.log("server started at port 3000")
})