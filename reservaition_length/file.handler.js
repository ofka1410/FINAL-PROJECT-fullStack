var fs = require('fs');
function saveLength(length){
    fs.writeFile('length.txt',length, function (err) {
        console.log(`this is file maker ${length}`, )
        if (err) throw err;
        console.log('err!');
        console.log('saved') 
      });
    }
    module.exports.saveLength=saveLength