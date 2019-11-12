
// We want to write the output
// and then display the prompt
const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

process.stdout.write("prompt > ");
// gets the  pwd.js module which is a function.
let pwd = require('./pwd.js');
//// gets the  ls.js module which is a function.
let ls = require('./ls.js');
let cat = require('./cat.js');
let curl = require('./curl.js');


//terminal where you type
//whenever user hits enter key, callback function gets invoked and it gives  everything on that line
process.stdin.on("data", data => {
  //parameter eg: 'cat bash.js' trim removes spaces in the front and end, and split converts it to array so we can get 'cat'
  const cmd = data.toString().trim().split(' ');
  if (cmd[0] === "pwd") {
    //invoke the result which is a function from pwd.js module
    pwd(done);
  } else if(cmd[0] === 'ls'){
    ls(done);
  } else if(cmd[0] === 'cat'){
    //invoke cat which is a function from cat.js module and then pass cmd[1] which is bash.js
    cat(cmd[1], done);
  } else if(cmd[0] === 'curl'){
    curl(cmd[1], done);
  }

});


