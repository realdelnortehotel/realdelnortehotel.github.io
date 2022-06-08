let map;

function initMap() {
  const myLatLng = { lat: 11.0245932, lng: -74.9080379};
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 10,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;