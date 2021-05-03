const fs = require('fs')

console.log('Start to read first file');
//Read first file Aync.
fs.readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  console.log('Done with aync read first file.  --->Start to read node second  file');

  //Read second file Aync.
  fs.readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result
    console.log('Done with aync read second file  --->Start to write file');

    fs.writeFile('./content/result-async.txt',
      `----Here is the result:---- ${first},  ${second}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

      });
    console.log('Done with aync write file ');
  });
});
console.log('STARTING NEXT TASK');