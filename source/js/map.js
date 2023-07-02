document.querySelector("#map").querySelector("picture").remove();

const coordinate = [59.96845, 30.3174];
const markerText = `
<p>г. Санкт-Петербург, набережная реки Карповки, дом 5</p>
<p>Номер телефона: <a href="tel:+79999999999">+7 (999) 999-99-99</a></p>
`;

const map = L.map('map').setView(coordinate, 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: '../img/icons/stack.svg#icon-map-pin',
  iconSize: [38, 50],
  iconAnchor: [4, 25],
  popupAnchor: [15, 25]
});

L.marker(coordinate, { icon }).addTo(map).bindPopup(markerText);
