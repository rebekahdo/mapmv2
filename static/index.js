var gMap;

var favoritePlaces = [
    {content:'<strong>Lafayette, Louisiana <strong>', coordinates:{lat:30.2241,lng:-92.0198}},
    {content:'<strong>Romeoville, Illinois <strong>', coordinates:{lat:41.6475,lng:-88.0895}},
    {content:'Orlando, Florida', coordinates:{lat:28.5384,lng:-81.3789}},
    {content:'Houston, Texas', coordinates:{lat:29.7604,lng:-95.3698}},
    {content:'Austin, Texas', coordinates:{lat:30.2672,lng:-97.7431}},
    {content:'Chicago, Illinois', coordinates:{lat:41.8781,lng:-87.6298}},
    {content:'Los Angeles, California', coordinates:{lat:34.0522,lng:-118.2437}},
    {content:'Las Vegas, Nevada', coordinates:{lat:36.1716,lng:-115.1391}},
    {content:'New York City, New York', coordinates:{lat:40.7128,lng:-74.0060}},
    {content:'Washington, D.C.', coordinates:{lat:38.9072,lng:-77.0369}}
]; 
var currentPlaceIndex = 9;
var currentPlace = favoritePlaces[currentPlaceIndex];
var score = 0;
var i = 0;

function initMap() {
    //create new map
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat:41.878, lng:10}, zoom: 3});

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });
    
    google.maps.event.addEventListener('dblclick', function (e) {
        var marker = new google.maps.Marker({position:{lat:30.2241,lng:-92.0198}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:41.6475,lng:-88.0895}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:28.5384,lng:-81.3789}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:29.7604,lng:-95.3698}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:30.2672,lng:-97.7431}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:41.8781,lng:-87.6298}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:34.0522,lng:-118.2437}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:36.1716,lng:-115.1391}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:40.7128,lng:-74.0060}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:38.9072,lng:-77.0369}, map:gMap});
        score = 10;
      });
}

function updateGame(){
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains(currentPlace.coordinates)) {
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
    }  
}


function addMarker(markerContent){
    var marker = new google.maps.Marker(
        {position:markerContent.coordinates, map:gMap}
    );
}

function SetScore(score) {
    document.getElementById("score-id").value = score;  
  }

  function SetHint(currentHint) {
    document.getElementById("Hint").value = currentHint;  
  }
  function Guess(){
    var guess = document.getElementById('guess-id').value;
    var hint = document.getElementById('Hint').value;
    if(guess == "Lafayette" && hint == 1){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:30.2241,lng:-92.0198}, map:gMap});
    window.alert("You found a location! Now on to the next one!")
    }
    if(guess == "Romeoville" && hint == 2){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:41.6475,lng:-88.0895}, map:gMap});
    window.alert("You found a location! Now on to the next one!")
    }
    if(guess == "Orlando" && hint == 3){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:28.5384,lng:-81.3789}, map:gMap});
    window.alert("You found a location! Now on to the next one!")
    }
    if(guess == "Houston" && hint == 4){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:29.7604,lng:-95.3698}, map:gMap});
    window.alert("You found a location! Now on to the next one!")
    }
    if(guess == "Austin" && hint == 5){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:30.2672,lng:-97.7431}, map:gMap});
    window.alert("You found a location! Now on to the next one!")
    }
    if(guess == "Chicago" && hint == 6){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:41.8781,lng:-87.6298}, map:gMap});
    window.alert("You found a location! Now on to the next one!")
    }
    if(guess == "Los Angeles" && hint == 7){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:34.0522,lng:-118.2437}, map:gMap});
    window.alert("You found a location! Now on to the next one!")
    }
    if(guess == "Las Vegas" && hint == 8){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:36.1716,lng:-115.1391}, map:gMap});
    window.alert("You found a location! Now on to the next one!")
    }
    if(guess == "New York City" && hint == 9){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:40.7128,lng:-74.0060}, map:gMap});
    window.alert("You found a location! Now on to the next one!")
    }
    if(guess == "Washington, DC" && hint == 10){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:38.9072,lng:-77.0369}, map:gMap});
    window.alert("You found a location! Now on to the next one!")
    }


    if(score == 10){
        window.alert("You Win!");
    }

    SetScore(score);

    
}
function initApplication(){
    console.log('Map Mania Lite - Starting!');
}

function directions() {
    alert("Welcome! Use the drop down menu to select a hint then type in your guess! Hint: Type in just the city, except for the last hint. To Win Now: double click Score.")
  }

function winner() {
    window.alert("Press OK if you are sure you want to auto win.")
    var marker = new google.maps.Marker({position:{lat:30.2241,lng:-92.0198}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:41.6475,lng:-88.0895}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:28.5384,lng:-81.3789}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:29.7604,lng:-95.3698}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:30.2672,lng:-97.7431}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:41.8781,lng:-87.6298}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:34.0522,lng:-118.2437}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:36.1716,lng:-115.1391}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:40.7128,lng:-74.0060}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:38.9072,lng:-77.0369}, map:gMap});
    score = 10;
}