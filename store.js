"use strict";

import { EventEmitter } from 'events';
import actionConstants from './action_constants';
import symbol from 'es6-symbol';
import dispatcher from './dispatcher';

let info = {
  tabs: undefined
};

const Store = Object.assign({}, EventEmitter.prototype, {
  CHANGE_EVENT: symbol(),

  addChangeListener(callback) {
    this.on(this.CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(this.CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(this.CHANGE_EVENT);
  },

  getTabs() {
    return info.tabs;
  },

  getState() {
    return info;
  }
});

function handleChange(action) {
  const { type, payload } = action;

  switch(type) {
  case actionConstants.receivedTabs:
    info.tabs = payload;
    break;

  default:
    return;
  }

  Store.emitChange();
}

dispatcher.register(handleChange);

export default Store;
