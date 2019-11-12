//outputs file path-----> its a function because it has to be used multiple times
// done is a callback that we can give our output to
function displayCwd(done){
  // get the current working directory from the process
  let output = process.cwd();
  done(output);
}


//whenever someone requires this file, I want them to get this function/ob/string/number etc
module.exports = displayCwd;
