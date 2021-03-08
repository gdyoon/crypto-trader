"use strict";
const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");

class JWT {

  constructor(accessKey, secretKey) {
    this.accessKey = accessKey;
    this.secretKey = secretKey;
    this.token = "";
  }

  sign() {
    this.token = jwt.sign(this._payload(), this.secretKey);
  }

  getToken() {
    return this.token;
  }

  _payload() {
    return {
      access_key: this.accessKey,
      nonce: uuidv4(),
    }
  }
}

module.exports = JWT;