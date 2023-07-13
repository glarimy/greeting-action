const core = require('@actions/core');
const github = require('@actions/github');

try {
  const person = core.getInput('person-name');
  console.log(`Hello ${person}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  const payload = JSON.stringify(github.context.payload)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}