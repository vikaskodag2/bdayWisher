// const fs = require('fs');
import fs from 'fs';
const Papa = require('papaparse');

export default readCSV = async csvFilePath => {
  const csvFile = fs.readFileSync(csvFilePath);
  const csvData = csvFile.toString();
  return new Promise(resolve => {
    Papa.parse(csvData, {
      header: true,
      worker: true,
      complete: results => {
        console.log('Complete', results.data.length, 'records.');
        resolve(results.data);
      },
    });
  });
};
