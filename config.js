//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348026927243";
global.sudo = process.env.SUDO || "2348026927243";
global.owner = process.env.OWNER_NUMBER || "2348026927243";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNTUVd3YXNUdElzdVFZeHVpWW9xRWxvMTBKSlVhczF4cjlrSjREZnkyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1RDdWFOUVNybXVRRWV2UUFlcWpaMStFNm9hTWZaa2ptVHpaYzFnN2RVWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q3BYd1VmOE5pSjhoUnFmZTE5d1FpeDdZR1ZDd1o2NmcrNjZya1BscjNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhS3ZuN2t0OHJTcjRlR2FkUkxuVW9hUjVITnZ1OUszNWY2c1FmSFRWbVFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVKZXBRKzFBWXg1WlluTzdmOTFOMlQzRTI1aUoxbVlyc2dEUWdtcDZyRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBlbHhuNk92SmVOdHc5M1QrMVYzVDhKMmhYa3NZQU54UW9GcWVUdHZKbkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdZeTRNL0ZKdmRtSjhVMEtmcElqMWlVTGJReUNENDVvWnF0UmQ4aVpWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHBxK1cxN1h2RWZCeEtUcTdaK1RWYjZIWHpnTWFvTzcrOTR0NDArUW15dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMaG9LZ0lOVHBmbjA0a2Z2SGpCZzhKODdpYVV1di9XenhPdEovcFdoeS9tMUN1YVcrandmQjFPMDJPblFuR2YzY21nM1haM0U0TGZiY0VtemlGUmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJObUhmVmZybXVuMXpVV3lNTGh3T3QySUZHWHpSbGlucEtQTGw4OGtXSm44PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2UXJDVnlXeFRFU3cwb1F6Z0xOdTd3IiwicGhvbmVJZCI6IjRiYmRlNmIxLTQ1MmMtNDE2MS1iNDJlLTM3ZGFiYzBlZDE4OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3NVdGNkswQm93WmhLbXEzMjZRVXdYeUxvNTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh3d2JYVHRGQmllbkx6QURRd0JMK0UwV0dRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjYxQ0hWNUNRIiwibWUiOnsiaWQiOiIyMzQ4MDI2OTI3MjQzOjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImNydcOueiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3FJNXBVR0VOT2psTG9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN1ovQzBDRElmNFBuaUx3bDNuUUd0QU9sN3Z1RE44cmRxemtmZklBem9ubz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR095WmgvZzZ1NWZjYzVIRHBEelIrc3o0YTJKSDB2bUQraUIxODlIQjRUbStkazBCT2JVQnYyc0svZ2VGNFdMYURZazdza3N6TDM3enhOaXVYc01OQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkIyTnJqZllwRk1selNMSytwamhPZFZGYzNmcE5keEM4ZVNPM28xWXQrQ3pOZEt4UFhVa01kNVhoMzZBVmNLTWQ3TktPWGFaZkNlVlhJczh6eXVUcmlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODAyNjkyNzI0MzoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlMmZ3dEFneUgrRDU0aThKZDUwQnJRRHBlNzdnemZLM2FzNUgzeUFNNko2In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyNTc5ODA5fQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "_ÇRÜÎZ",
  ownername: process.env.OWNER_NAME || "ÇRÜÎZ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
