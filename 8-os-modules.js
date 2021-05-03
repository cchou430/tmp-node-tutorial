const os = require('os')

const user = os.userInfo()
console.log(user);

const uptime = os.uptime();
console.log(`System up uptime is ${uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS);