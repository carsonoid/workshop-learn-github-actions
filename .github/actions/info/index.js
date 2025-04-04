const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  const fields = core.getInput('fields');

  if (!fields) {
    console.log("Payload");
    console.log(payload);
  } else {
    console.log("Payload fields:");
    for (const field of fields.split(',')) {
      const value = github.context.payload[field.trim()];
      console.log(`Field: ${field.trim()} = `, value);
    }
  }

  // read ./config.toml as toml and put the base url in the summary
  const fs = require('fs');
  const toml = require('toml');
  const config = fs.readFileSync('./config.toml', 'utf-8');
  const parsed = toml.parse(config);
  core.summary.addHeading("Building "+parsed.baseURL, 2);

  const time = (new Date()).toTimeString();

  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
