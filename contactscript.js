// $(document).ready(function() {
//     M.updateTextFields();
//   });

//   $('#textarea1').val('New Text');
//   M.textareaAutoResize($('#textarea1'));


$("#button").on("click", function(){
    var first = $("#first_name").val();
    var last = $("#last_name").val();
    var email = $("#email").val();
    var response = $("#textarea").val();
    localStorage.setItem("First Name", JSON.stringify(first));
    localStorage.setItem("Last Name", JSON.stringify(last));
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Response", JSON.stringify(response));
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
    // AJAX