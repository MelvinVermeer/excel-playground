const XLSX = require('@sheet/image');
const path = require('path');

const fileName = 'Book1.xlsx'; // Excel file with image in C3

const options = {
  raw: true,
  cellFormula: false,
  cellHTML: false,
  cellStyles: true,
  bookImages: true
};

const filePath = path.join(process.cwd(), fileName);
const workbook = XLSX.readFile(filePath, options);

console.log(workbook.Sheets.Sheet1['!images']);
console.log(workbook.Sheets.Sheet1['!rows']);
console.log(workbook.Sheets.Sheet1['!sheetFormat'].row.hpx);
