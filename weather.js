let city = document.getElementById("city");
let temp = document.getElementById("temp");
let type = document.getElementById("type");
let img = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "6d83156e4e40ca97d0c6924b832fe00c";

const data = async function (search) {

    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)

    let jsonData = await getData.json();
    console.log(jsonData);

        if(jsonData.cod == 400){
            img.src="assets/astronaut.png";
            alert("Please Enter the Location");
            city.innerHTML = "";
        temp.innerHTML ="";
        type.innerHTML = "";
        }

    if(jsonData.cod == 404){
        
        alert("Please Enter the correct Location");
        img.src="assets/error.png";
        city.innerHTML = "";
    temp.innerHTML ="";
    type.innerHTML = "";
    }

    city.innerHTML = search;

    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";

    type.innerHTML = jsonData.weather[0].main;

    if (type.innerHTML == "Clouds") {
        img.src = "assets/clouds.png";
       video.src ="assets/clouds.mp4";
    }
    else if(type.innerHTML == "Clear"){
        img.src = "assets/clear.png";
         video.src = "assets/sunny.mp4";
    }
    else if(type.innerHTML == "Rain"){
        img.src = "assets/rain.png";
        video.src = "assets/rain.mp4";
    }
    else if(type.innerHTML == "Snow"){
        img.src = "assets/snow.png";
        video.src = "assets/snow.mp4";
    }
    else if(type.innerHTML == "Strom"){
        img.src = "assets/storm.png";
        video.src = "assets/storm.mp4";
    }
    else if(type.innerHTML == "Haze" || type.innerHTML == "Smoke"  ){
        img.src = "assets/haze.png";
        video.src = "assets/smoke.mp4"
            }
input.value = "";
        };

       
          
function myFun() {

    search = input.value;
    data(search);
};


document.getElementById("inp").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Prevent default action (form submission)
      myFun();
    }
  });