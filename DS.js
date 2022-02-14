const { Interpreter } = require('interpreter/Interpreter.js');
const fs = require('fs');
const { globalLog } = require('log/Log.js');

class Ds {
  constructor(input) {
    this.input = input;
    this.interpreter = new Interpreter(this.input);
  };
};

const fetchSource = () => {
  let file = process.argv[2];
  if (!file)
  {
    console.log('USAGE -- [ arn star ]');
  }
  else
  {
    try 
    {
      const data = fs.readFileSync(file, 'utf8');
      return data  
    } 
    catch(e) 
    {
      console.log('USAGE -- [ node DS.js <filename> ]');
      console.log('Error:', e.stack);
    };
  };

  return [];

};

 console.time('interpreting');
 new Ds(fetchSource());
 console.log(globalLog);
 console.timeEnd('interpreting');