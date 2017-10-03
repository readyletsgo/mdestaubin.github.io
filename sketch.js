var queryResult;
var LatLong = "42.361936, -71.097309"


function setup() {
  createCanvas(320, 568);
  background(255);
  strokeWeight(2);
  rect(0,0,width,height);
query();
}

// Run the API call
function query() {

  // URL for querying
  var url= 'https://api.darksky.net/forecast/c62627d15e64486ca08975f6b55df8be/' + LatLong;

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}

// Request is completed
function gotData(data) {
  // console.log(data);
  queryResult = data;

  // only look at current results:
  var currentWeather = queryResult.currently;
  var hourlyWeather  = queryResult.hourly;
  var dailyWeather   = queryResult.daily;



  
  // a few variables for text formatting
  var xPos = 20;  
  var yPos = 40;
  var yGap = 60; 
  var textSizeLarge = 20;
  var textSizeSmall = 16;

  var m = month();
  var d = day();
  var y = year();

  // List relevant items of information
  fill(0);
  textStyle(BOLD);

  // Date and Location
  textSize(textSizeSmall);
  text(m + "/" + d + "/" + y,20, yGap);
  yGap+=textSizeSmall;
  text("Cambridge, MA",20, yGap);
  yPos+=yGap;

  // Audio Play Button
   noFill();
   strokeWeight(2);
   triangle(xPos,(yGap+15),xPos+13,(yGap+23),xPos,(yGap+31));
   //yPos+=yPos;

  // Temperature Summary
  fill(0);
  textSize(textSizeLarge);
  text("Don't you know it's going to be " + hourlyWeather.summary + ' ' + hourlyWeather.data[0].time,20, (yPos+10), (width-40),100);
  yPos+=yGap;

  var hourlySummary = "It's " + hourlyWeather.data[0].summary.toLowerCase() + " at the moment and "
  var tempDescription = ""
  var temp = hourlyWeather.data[0].apparentTemperature

  if(temp < 70 || temp > 60){
  tempDescription = "fairly chilly."
  }

  else if(temp < 60 || temp > 50){

    tempDescription = "chilly."
  }

  else{
    tempDescription = "I dont know what the hell the temperature is"
  }

  text(hourlySummary + tempDescription, 20, (yPos+60), (width-40),100);

  //text(hourlyWeather.data[0].time);


  // Rain Summary
  
  /*
  textSize(textSizeSmall);
  text("Temperature",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.temperature + "º",20, yPos);
  yPos+=yGap;
  
  textSize(textSizeSmall);
  text("Precipitation",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.precipIntensity + "%",20, yPos);
  yPos+=yGap;
  
  textSize(textSizeSmall);
  text("Humidity",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.humidity + "%",20, yPos);
  yPos+=yGap;

  */

 



}