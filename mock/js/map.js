window.DeltagMock = window.DeltagMock || {};
var DM = window.DeltagMock;

/* ==========================================================================
   Map
   ========================================================================== */

DM.initMap = function() {
  var map = L.map("map", { scrollWheelZoom: false }).setView([56.13, 10.19], 13);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
  }).addTo(map);

  // Mock hearing response locations around Malling/Synnedrupvej area
  var responseLocations = [
    { lat: 56.132, lng: 10.185, count: 12, label: "Synnedrupvej" },
    { lat: 56.128, lng: 10.192, count: 8, label: "Malling Byvej" },
    { lat: 56.135, lng: 10.178, count: 15, label: "Bredgade" },
    { lat: 56.130, lng: 10.200, count: 6, label: "Malling Skole" },
    { lat: 56.125, lng: 10.188, count: 10, label: "Syd for byen" },
    { lat: 56.138, lng: 10.195, count: 4, label: "Nord for byen" },
    { lat: 56.133, lng: 10.172, count: 18, label: "Industrivej" },
    { lat: 56.127, lng: 10.210, count: 3, label: "Ajstrup Strandvej" },
    { lat: 56.140, lng: 10.183, count: 7, label: "Obstrupvej" },
    { lat: 56.122, lng: 10.195, count: 5, label: "Beder" },
    { lat: 56.136, lng: 10.205, count: 2, label: "Øst" },
  ];

  var maxCount = Math.max.apply(null, responseLocations.map(function(l) { return l.count; }));

  responseLocations.forEach(function(loc) {
    var ratio = loc.count / maxCount;
    var radius = 20 + ratio * 60;
    var opacity = 0.25 + ratio * 0.4;

    L.circleMarker([loc.lat, loc.lng], {
      radius: radius,
      fillColor: "#3661d8",
      color: "#3661d8",
      weight: 1,
      fillOpacity: opacity,
      opacity: 0.6,
    })
      .addTo(map)
      .bindPopup(
        "<strong>" + loc.label + "</strong><br>" + loc.count + " høringssvar"
      );
  });
};
