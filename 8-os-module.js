//Built-in Modules/ OS Modules
//If we work with external modules we need to install them first
const os = require("os"); //we're looking for a built-in module

//info about current user
const user = os.userInfo();
console.log(user);

//system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
