let license;

// function to generate markdown for README
function generateMarkdown(data) {
  if (data.license === 'MIT') {
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (data.license === 'APACHE 2.0') {
    license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (data.license === 'GPL 3.0') {
    license = "[![License: GPL v3](https://img.shields.io/badge/License-GNU-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (data.license === 'BSD 3') {
    license = "[![License](https://img.shields.io/badge/License-BSD-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  return `# ${data.title}
  
  ${license}

  ## Table of Contents \n
  1. [Description](#description) \n
  2. [Installation](#installation-guidelines) \n
  3. [Usage](#usage) \n
  4. [License](#license) \n
  5. [Contribution](#contributing) \n
  6. [Tests](#tests) \n
  7. [Question](#questions) \n

  ## Description \n
  ${data.description} \n
 
  ## Installation guidelines \n
  ${data.installation} \n

  ## Usage \n
  ${data.usage}

  ## License \n
  ${data.license}

  ## Contributing \n
  ${data.contributing}

  ## Tests \n
  ${data.tests}

  ## Questions \n
  Visit my Github www.github.com/${data.github} \n
  Email me with additional questions at ${data.email}
  `;
}

module.exports = generateMarkdown;


