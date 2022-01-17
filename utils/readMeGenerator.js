//This file helps create the ReadMe File

function readMeGenerator(data){
    return `# ${data.title}
   
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Tests](#tests)
  
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contribute
  ${data.contributing}
  
  ## Tests
  ${data.testing}
  
  ### Reach me here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
  }

//This exports this file so it can be used in the index.js
module.exports = readMeGenerator;