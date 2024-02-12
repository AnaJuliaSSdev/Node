class Processor {
  static Process(data) {
    let dataRows = data.split("\r\n");
    let rows = [];

    dataRows.forEach((row) => {
      let array = row.split(",");
      rows.push(array);
    });

    return rows;
  }
}

module.exports = Processor;
