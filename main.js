const fs=require('fs');
const prompt=require('prompt-sync')();
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
async function check(){
    try {
     const data= await fs.promises.readFile('input.txt') 
     console.log("data accssed");
     let output;
if ( output=await fs.promises.readFile('output.txt')) {
    console.log('output access')
//     const updateData=prompt('what do you want to update');
// console.log(`data updated ${updateData}`)

rl.question('Do you want to overwrite the file? (yes/no) ', (answer) => {
      if (answer.toLowerCase() === 'yes') {
     const content="hello"
      fs.promises.writeFile('newFile.txt',content)
      console.log('File overwritten.');
      const updateData="\n how are you";
 fs.promises.appendFile('output.txt',updateData)
console.log('updated')
const path='./input.txt'
fs.promises.unlink(path)
    } else {
      // Cancel the operation or perform any other desired action
      // ...
      console.log('File not overwritten.');
    }
  
    rl.close();
  });

    }
}
     catch (error) {
        console.error(error)
    }
}
check();