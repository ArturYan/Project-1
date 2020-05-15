


$("#button").on("click", function(){
    var first = $("#first_name").val();
    var last = $("#last_name").val();
    var email = $("#email").val();
    var response = $("#textarea").val();
    localStorage.setItem("First Name", JSON.stringify(first));
    localStorage.setItem("Last Name", JSON.stringify(last));
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Response", JSON.stringify(response));
    $('#first_name').val('').removeClass('valid');
    $('#last_name').val('').removeClass('valid');
    $('#email').val('').removeClass('valid');
    $('#textarea').val('').removeClass('valid');
      M.updateTextFields();
    });
 

    // when i click the save button - first name, last name, email and text are saved to local storage.
    // Then message contents are cleared out


    // Map section


    // START OF OPEN LAYER SCRIPT
    var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-118.4525226, 34.210177]),
          zoom: 16.7
        })
      });
    // END OF OPEN LAYER SCRIPT

    // Map API
   
   
   
   
   
    // weather application


// This is our API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=Van Nuys, USA &appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

    // Append to HTML
    $(".city").html("<h5>" + response.name + " Weather Details</h5>");
 
    // F temp conversion
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;

    // add F-temp content to html
    $(".tempF").text("Temperature (F): " + tempF.toFixed(2));
    console.log("Temperature (F): " + tempF);
    // Description var
    var description = (response.weather[0].description);
    console.log(description);
    // description append
    $(".description").text("Conditions: " + description)
   
  });

