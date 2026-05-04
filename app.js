//To bring in the entire (math) file
const math = require('./Utility/math'); // the '/... is to locate the file path and import the file
const { generate, general } = require('./Utility/NumberGenerator');
const generator = required('/'  ); //to import the file, while after the / is the file path

console.log(math.add(4, 6));

console.log(generate(general))


//In another file (e.g math.js, a function is created but when the function is called here, it doesn't work.
//this is because, it is yet to be exported here and imported there. 
// Just like the ones on the files/apps downloaded during the API creation, we see a lot of imports there, now you are creating your own )

// if the file is inside mutiple folder, say 3 folders and you want to import it into the app.js
// you do this ('../../../app.js');
//e.g const Tam = require('../../../app.js');