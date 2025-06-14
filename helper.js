let map = undefined;

function showMap(lat,lon){
  let location=[lat,lon];
  if (map) {
    map.remove();
  }

  map = L.map("map").setView(location, 14);
  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
} 

