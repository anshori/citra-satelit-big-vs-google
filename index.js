var map = L.map('map',{maxZoom: 19, zoomControl: false}).setView([-7.8013737,110.3647685],18);

var title1 = new L.Control({position: 'topleft'});
title1.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};
title1.update = function () {
  this._div.innerHTML = '<h2>Satelit Google</h2>'
};
title1.addTo(map);

var title2 = new L.Control({position: 'topright'});
title2.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};
title2.update = function () {
  this._div.innerHTML = '<h2>Citra Satelit BIG 2015</h2>'
};
title2.addTo(map);

map.createPane('pane_crstbig');
var crstbig = L.tileLayer('https://portal.ina-sdi.or.id/arcgis/rest/services/CITRASATELIT/JawaBaliNusra_2015_ImgServ1/ImageServer/tile/{z}/{y}/{x}', {
    attribution: '<a href="https://portal.ina-sdi.or.id/arcgis/rest/services/CITRASATELIT/JawaBaliNusra_2015_ImgServ1/ImageServer" target="_blank">CRST BIG</a> | Google Satellite | <a href="http://unsorry.net">unsorry@2021</a>',
    maxZoom: 19,
    pane: 'pane_crstbig'
  }).addTo(map);

map.createPane('pane_googleSatellite');
var googlesatelliteLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    pane: 'pane_googleSatellite'
}).addTo(map);

L.control.sideBySide(googlesatelliteLayer, null).addTo(map);

map.createPane('pane_googleroadLayer');
var googleroadLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    pane: 'pane_googleroadLayer'
});

var Layers = {
  'Jalan & POI': googleroadLayer
};
var layerControl = L.control.layers(null, Layers, {collapsed:false});
layerControl.addTo(map);