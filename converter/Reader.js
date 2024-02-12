//util.promisify converts an function into a promise
const fs = require("fs");
const util = require("util"); //module util node

class Reader {
  constructor() {
    this.reader = util.promisify(fs.readFile);
  }

  async Read(filepath) {
    try {
      return await this.reader(filepath, "utf-8");
    } catch (err) {
      return undefined;
    }
  }
}

module.exports = Reader;
