const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) {
    console.error(`Error reading ${filePath}: ${err}`);
    process.exit(1);
  }

  console.log(data);
});