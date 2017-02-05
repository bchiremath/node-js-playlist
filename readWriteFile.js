var fs = require('fs');

// read file synchronously.
var readMe = fs.readFileSync('readme.txt','utf8');
console.log(readMe);

// write to file synchronously.
fs.writeFileSync('writeme.txt', readMe);

// read and write file asynchronously.
fs.readFile('readme.txt', 'utf8', function(err, data){
  fs.writeFile('writeme.txt', 'overwritten asynchronously');
});
