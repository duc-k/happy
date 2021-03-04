const map = L.map("mapid").setView([-16.539075, -49.4068802], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "public/assets/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="./orphanage.html" class="choose-orphanage"><img src="public/assets/arrow-white.svg" /></a>'
);

L.marker([-16.539075, -49.4068802], { icon }).addTo(map).bindPopup(popup);
