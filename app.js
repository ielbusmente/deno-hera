import "jsr:@std/dotenv/load";

async function sendPostMessage(channel, msg) {
  const url = "https://slack.com/api/chat.postMessage";

  const data = {
    channel,
    text: !Array.isArray(msg) ? msg : null,
    blocks: Array.isArray(msg) ? msg : null,
    // as_user: true
  };
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${Deno.env.get("BOT_USER_OAUTH_TOKEN")}` 
    // "Authorization": `Bearer ${Deno.env.get("USER_OAUTH_TOKEN")}`
  };
  console.log(headers);
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("Error:", response.statusText);
    return;
  }

  const result = await response.json();
  console.log("Response data:", result);
}

const channel_id = Deno.env.get("CHANNEL");
const message = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": `Hello, <@${Deno.env.get("SLACK_ID")}>! Welcome to \`<reate_loo/>\`.\n\nHere, we value every effort you put in. It does *not* matter how skillful you are. As long as you are eager, _we_ are all here for *YOU*! :wink::hugging_face:`
    }
  }
];

sendPostMessage(channel_id, message);