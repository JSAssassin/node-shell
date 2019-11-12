let fs = require('fs');


//displayContent takes a parameter which is a filename.The function prints out the content inside that path.
function displayContent(filename, done){
  //readfile takes in two parameters--- filename and callback
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    let output = data;
    done(output);
  });
}

module.exports = displayContent;
