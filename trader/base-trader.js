"use strict";

class BaseTrader {

  async buy() {
    throw Error("Not Implemented Error");
  }

  async sell() {
    throw Error("Not Implemented Error");
  }
}

module.exports = BaseTrader;