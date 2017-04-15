console.log('Hello world');
const fs = require('fs');
//dung thu vien express
const express = require('express');

var app = express();

//set public folder public
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('./public/index.html');
});

app.get('/image/add', (req, res) => {
  //Khai bao obj
  var imageInfo = {
    name : req.query.name,
    imageLink : req.query.imageLink,
    description : req.query.description
  }
  //lay du lieu tu file JSON
  var data = fs.readFileSync("imageData.json",'utf-8');
  var JSONdata = JSON.parse(data);
  //Luu vao file
  JSONdata.push(imageInfo);
  fs.writeFileSync('imageData.json', JSON.stringify(JSONdata));
  //bao thanh cong
  res.send('Success');
});

app.get('/image/get', (req, res) => {
  //doc du lieu tu file JSON
  var data = fs.readFileSync('imageData.json', 'utf-8');
  var JSONdata = JSON.parse(data);
  //
  var html = "<html><head><meta charset='utf-8'><title></title></head><body>";
  JSONdata.forEach(function(data, index){
    var name = "Name: " + data.name + "</br>";
    var img = "<img scr = '" + data.imageLink + "'>" + "</br>";
    var des = "Description: " + data.description + "</br>";
    var content = name + img + des;
    console.log(img);
    html += content;
  });
  html += "</body></html>";
  res.send(html);
});



//mo 1 port chay local
app.listen(6969, function(req, res) {
  console.log('app listen on 6969');
});

// var funcName = () => {
//
// };
