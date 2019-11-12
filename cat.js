let fs = require('fs');


//displayContent takes a parameter which is a filename.The function prints out the content inside that path.
function displayContent(filename){
  //readfile takes in two parameters--- filename and callback
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
  });
}

module.exports = displayContent;
