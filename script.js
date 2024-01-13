
document.getElementById("yourButtonId").addEventListener("click", fetchData);

        function fetchData() {
            var districtName = document.getElementById("districtInput").value;

            fetch("https://data.covid19india.org/v4/min/data.min.json")
                .then((data) => data.json())
                .then((data1) => {
                    var districtData = data1.TN.districts[districtName];

                    if (districtData) {
                        displayDistrictData(districtData);
                    } else {
                        console.error(`Data not available for ${districtName}`);
                        clearDistrictData();
                    }
                });
        }

        function displayDistrictData(districtData) {
            document.getElementById("confirmed").innerText = districtData.total.confirmed;
            document.getElementById("recovered").innerText = districtData.total.recovered;
            document.getElementById("tested").innerText = districtData.total.tested;
            document.getElementById("vaccinated1").innerText = districtData.total.vaccinated1;
            document.getElementById("vaccinated2").innerText = districtData.total.vaccinated2;
        }

        function clearDistrictData() {
            document.getElementById("confirmed").innerText = "";
            document.getElementById("recovered").innerText = "";
            document.getElementById("tested").innerText = "";
            document.getElementById("vaccinated1").innerText = "";
            document.getElementById("vaccinated2").innerText = "";
        }















// var district = document.getElementsByClassName("box");
// document.getElementById("yourButtonId").addEventListener("click", fetchData);

// function fetchData(){
//     fetch("https://data.covid19india.org/v4/min/data.min.json")

//     .then((data)=>data.json())
//     .then((data1)=>{
//             var data2=data1.TN.districts;
//             console.log(data2);
//             logDistrictTotal(data2);
//         });
     
// }

// function logDistrictTotal(data2) {
//     Object.keys(data2).forEach((district) => {
//         document.getElementById("confirmed").innerText = data2[district].total.confirmed;
//         document.getElementById("recovered").innerText = data2[district].total.recovered;
//         document.getElementById("tested").innerText = data2[district].total.tested;
//         document.getElementById("vaccinated1").innerText = data2[district].total.vaccinated1;
//         document.getElementById("vaccinated2").innerText = data2[district].total.vaccinated2;   
//     });
// }


//     }
// }
//     );

   
console.log(data2[district].total.confirmed);
        console.log(`Confirmed : ${data2[district].total.confirmed}`);
        console.log(`Recovered : ${data2[district].total.recovered}`);
        console.log(`Tested : ${data2[district].total.tested}`);
        console.log(`Vaccinated1 : ${data2[district].total.vaccinated1}`);
        console.log(`Vaccinated2 : ${data2[district].total.vaccinated2}`);
    





// let apikey = "9b3abd72af5e8ee4c215adb53b59b0e5";
//  getweatherdata = (city) => {
//     var url = "https://api.openweathermap.org/data/2.5/weather";
//     var full=`${url}?q=${city}&appid=${apikey}&units=imperial`;
//     var weatherPromise = fetch(full);
//     console.log(city);
//         return weatherPromise.then((response)=>{
//             return  response.json();
//         });
    
//     }


// function searchcity(){
//     const city = document.getElementById("city-input").value;
//     getweatherdata(city)
//     .then((Response)=>{
//         console.log(Response)
//         showdata(Response)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    

// }
// showdata=(weatherData)=>{
// document.getElementById("city-name").innerText = weatherData.name;
// document.getElementById("weather-type").innerText = weatherData.weather[0].main;
// document.getElementById("temp").innerText = weatherData.main.temp;
// document.getElementById("min-temp").innerText = weatherData.main.temp_min;
// document.getElementById("max-temp").innerText = weatherData.main.temp_max;
// }








