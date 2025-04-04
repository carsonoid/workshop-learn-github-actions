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
    for (const field of fields.split(',')) {
      const value = github.context.payload[field.trim()];
      console.log(`Field: ${field.trim()} = `, object);
    }
  }

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
