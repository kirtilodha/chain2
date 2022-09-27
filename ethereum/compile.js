const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

// __dirname is equal to the current directory name, which is ethereum
const buildPath = path.resolve(__dirname, 'build')
// removes the file and all of its content at buildPath
fs.removeSync(buildPath)

const campaignPath = path.resolve(__dirname, 'contracts', 'Chain.sol')
const source = fs.readFileSync(campaignPath, 'utf8')
// output contains all the compiled contract code
const output = solc.compile(source, 1).contracts;
// console.log(output);

// creates a new directory at buildPath
fs.ensureDirSync(buildPath)

for (const contract in output) {
  // contract is the property name of the output object
  // creates a file
  // contract.replace(':', '') removes ':' that comes before the contract name
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract],
  )
}

// const campaignPath2 = path.resolve(__dirname, 'contracts', 'Product.sol')
// const source2 = fs.readFileSync(campaignPath2, 'utf8')
// // output contains all the compiled contract code
// const output2 = solc.compile(source2, 1).contracts;
// // console.log(output2);

// // // creates a new directory at buildPath
// // fs.ensureDirSync(buildPath)

// for (const contract in output2) {
//   // contract is the property name of the output object
//   // creates a file
//   // contract.replace(':', '') removes ':' that comes before the contract name
//   fs.outputJSONSync(
//     path.resolve(buildPath, contract.replace(':', '') + '.json'),
//     output2[contract],
//   )
// }