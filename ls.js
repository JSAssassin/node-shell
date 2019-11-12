//fs is used here so we need to require it.
let fs = require('fs');
//displays list of files
function displayLs(done){
  //fs is a built-in module in node
  fs.readdir('./', 'utf8', (err, files) => {
    if(err) {
      throw err
    } else {
      let output = files.join('\n');
      done(output);
    }
  })
}
//this module exports this function displayLs
module.exports = displayLs;

