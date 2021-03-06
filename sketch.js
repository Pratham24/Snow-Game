var backgroundImg
var bg
var engine, world
function preload(){
  getBackgroundImg();
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
  var responseJson= await response.json()

    // write code slice the datetime
    var datetime= responseJson.datetime
    var hour=datetime.slice(11,13)
  
  if(hour>=07 && hour<=19){
      bg = "snow1.jpg";
  }
  else{
      bg = "snow3.jpg";
  }

  backgroundImg = loadImage(bg);
}
