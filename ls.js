//fs is used here so we need to require it.
let fs = require('fs');
//displays list of files
function displayLs(){
  //fs is a built-in module in node
  fs.readdir('./', 'utf8', (err, files) => {
    if(err) {
      throw err
    } else {
      process.stdout.write(files.join('\n'))
      process.stdout.write("prompt > ")
    }
  })
}
//this module exports this function displayLs
module.exports = displayLs;

