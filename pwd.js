//outputs file path-----> its a function because it has to be used multiple times
function displayCwd(){
  process.stdout.write(`${process.cwd()}`);
}


//whenever someone requires this file, I want them to get this function/ob/string/number etc
module.exports = displayCwd;
