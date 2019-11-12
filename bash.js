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
  console.log(cmd)
  if (cmd[0] === "pwd") {
    //invoke the result which is a function from pwd.js module
    pwd();
  } else if(cmd[0] === 'ls'){
    ls();
  } else if(cmd[0] === 'cat'){
    //invoke cat which is a function from cat.js module and then pass cmd[1] which is bash.js
    cat(cmd[1]);
  } else if(cmd[0] === 'curl'){
    curl(cmd[1]);
  }

  process.stdout.write("\nprompt > ");
});



