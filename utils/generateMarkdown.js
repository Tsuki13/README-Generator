// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Table of Contents
  1.Description
  2.Installation
  3.Usage
  4.License
  5.Contribution
  6.Tests
  7.Question

  ##Description
  ${data.description}
 
  ##Installation guidelines
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  ${data.license}

  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}

  ##Questions
  Visit my Github www.github.com/${data.github}/n
  Email me with additional questions at ${data.email}
  `;
}
// "Title of Project", "Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"


module.exports = generateMarkdown;


