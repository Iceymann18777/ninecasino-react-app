module.exports = function writeHtml(html, name) {
  const fs = require('fs');
  const dir = `${process.cwd()}/output`;
  const htmlName = `${dir}/${name}.html`;
  try {
    fs.mkdirSync(dir);
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw new Error(`fs.mkdir failed: ${e.message}`);
    }
  }
  fs.writeFileSync(htmlName, html);
  console.log(`writeHtml.js: file written to: ${htmlName}`);
};
