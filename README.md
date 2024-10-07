## Add a `.env` file with the following:
---
```
BOT_USER_OAUTH_TOKEN="xoxb-xxxxxxxxxxx-xxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxx"
USER_OAUTH_TOKEN="xoxp-xxxxxxxxxxxxxx-xxxxxxxxxxxx-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxx"
CHANNEL="C0XXXXXXXXXX"
SLACK_ID="UXXXXXXX"
```
# Where the hell do I get the values?
- `BOT_USER_OAUTH_TOKEN` can be obtained by generating a token in `https://api.slack.com/apps/YOUR_APP_ID/oauth` on _OAuth & Permissions / __User__ Token Scopes_
- `USER_OAUTH_TOKEN` can also be obtained by generating a token in `https://api.slack.com/apps/YOUR_APP_ID/oauth` on _OAuth & Permissions / __Bot__ Token Scopes_
- `CHANNEL` is just the channel id & could be obtained from the url `https://app.slack.com/client/YOUR_WORKSPACE_ID_I_THINK/HERE_IS_THE_CHANNEL_ID` or you can copy it from the channel details when you click the channel name located on the top area with the __#__
- `SLACK_ID` is the member id of the user you want to mention! You can get it by opening their __Profile__ and clicking the _Kebab Menu_
