import sinon from 'sinon';
import chai from 'chai';
import { expect } from 'chai';
import spies from 'chai-spies';
import chaiEnzyme from 'chai-enzyme'

chai.use(spies);
chai.use(chaiEnzyme());

require('babel-register')();

global.chai = chai;
global.expect = expect;
global.sinon = sinon;

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<!doctype html><html><body></body></html>');

global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.documentRef = document;