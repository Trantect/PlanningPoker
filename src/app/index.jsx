import App from './app'

var names = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?', 'icon-infinity', 'icon-coffee'];
var bigSizeNumber = ['0', '1', '2', '3', '5', '8', '?', 'icon-infinity', 'icon-coffee'];
var sideIcons = {
  "0"              : "0",
  "1/2"            : "half",
  "1"              : "1",
  "2"              : "2",
  "3"              : "3",
  "5"              : "5",
  "8"              : "8",
  "13"             : "13",
  "20"             : "20",
  "40"             : "40",
  "100"            : "100",
  "?"              : "question",
  "icon-infinity"  : "infinity",
  "icon-coffee"    : "coffee"
};

var app = new App(names, bigSizeNumber, sideIcons);
app.appGenerator();