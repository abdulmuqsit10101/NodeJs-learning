// module to read write files and to create and remove directories ( folders ).
const fs = require('fs');

// // read a file
// fs.readFile('readMe.txt', 'utf8', function (err, data) {
//   if (err) throw err;
//   // write a file
//   fs.writeFile('./writeMe.txt', data, function (err) {
//     if (err) console.log(err);
//     else console.log('File saved');
//   });
// });

// removing a file.
fs.unlink('./writeMe.txt', function(){
  console.log('file deleted');
});
