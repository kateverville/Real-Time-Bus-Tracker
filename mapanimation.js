const img2 = 'marker.png';
const img3 = 'red.png';

const newLocal = 71.118625;
// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.095800, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
   
  ];
  
const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.032, 38.913]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.414, 37.776]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }
    ]
};

  mapboxgl.accessToken = 'pk.eyJ1IjoidHJpcy1mcmF6aWVyIiwiYSI6ImNreTYwbG9ydzBwcWcycG50cWYzcnM0dzEifQ.Wvw8YKn6e1S8puAm0nrcCw';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-71.104081, 42.366300],
    zoom: 14
  });
  
  //This creates a marker for MIT
  for (const feature of geojson.features) {
    // create a HTML element for the MIT marker
    const el = document.createElement('div');
    el.className = 'start-stop';
   
    //this creates a marker
    var mit = new mapboxgl.Marker(el)
    .setLngLat([-71.09475, 42.3601])
    .addTo(map);
  }

  //This creates a marker for Harvard
  for (const feature of geojson.features) {
    // create a HTML element for the Harvard marker
    const el = document.createElement('div');
    el.className = 'start-stop';
   
    //this creates a marker
    var harvard = new mapboxgl.Marker(el)
    .setLngLat([-71.1167, 42.3772])
    .addTo(map);
  }

  let marker = new mapboxgl.Marker()
  .setLngLat(busStops[0])
  .addTo(map);

  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    setTimeout(() =>{
      if (counter >= busStops.lengh) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }

  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }