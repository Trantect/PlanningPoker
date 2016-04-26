import App from './app'
import attachFastClick from 'fastclick';

/**
 * The minimum time between tap(touchstart and touchend) events
 *
 * @type {{tapDelay: number}}
 */
var option = {
  tapDelay: 50
};

// Solve 300ms click delay on ios web app
attachFastClick.attach(document.body, option);

/**
 *  The names of pokers on front center
 *
 * @type {object[]}
 */
var names = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?', 'icon-infinity', 'icon-coffee'];

/**
 * The names of big pokers which need big font size on front center
 *
 * @type {object[]}
 */
var bigSizeNumber = ['0', '1', '2', '3', '5', '8', '?', 'icon-infinity', 'icon-coffee'];

/**
 * Poker name correspond icon name
 *
 * @type {{name: string}}
 */
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

/**
 * Instantiates App
 *
 * @type {App}
 */
var app = new App(names, bigSizeNumber, sideIcons);

// Render component rootApp
app.appGenerator();