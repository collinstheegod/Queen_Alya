//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5OUGYrRk9pSVhiUTVoSm5UOU1sYlNTR3Y5bHR6Umg5a0NSSUY0Nm1Xcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTlvdFpFZ0xpK2traGJiRS9qQTU3SlF4RXpJSGI3cDN1Q1NCQWJhL3BCcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RjF5T21UcDYyYnhJSU5udEFqcWlQSDFOY0V3Y0JmQ0lkcTBqZWFSelg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIY25NTmFjMmV4VnFleHZpaE9SeUpENkdpMXJobVdrU0k1KzNxdlNGNEgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFKOGxUaUV6SEI2bGxIak5zVURYK2J0UWFaUlkyUks2STgzS1dPR3BOa2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVTZk5vcFcwUFgvZ0tLTVlIVG1ZT1JFWFlMV0lDMHMzQjM5Mm1sVUJYU2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUhMR3QrUnB6SHNqVFlhOVdjb09XOFBFWFNuUWxOQk5ZV1YycDhPTUNYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3pwWmlLTUpoM3BoSGFIMEt6TGd4NWoxdFNyVzM3R0JtcFc2dTFEN04xTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRENTUzQW9qam1YdVBQdkttUTEwQXd0Y1lkVG1abitiN2s4eU8wYXRVaEtLQkxoN3pWNnhLWSt2OXpTTDdVbUlJWGlUSjExSld1MVJxVUlJU3JDNGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJGaTFsbFpkbHJqT1drSHMwa2orTVVNVjBLcFBFWENTWmlRQXJGZjRmSWFBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOcWhqMzNXRlI1V1ktNFFBUXlUeGVnIiwicGhvbmVJZCI6IjZmYmVlZmJhLTMwYTMtNDgxMi1iNWI0LTIyYWZlNzU1N2U4NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJISS8ybE5jZkFSRDJQaTRXYnVsek9DUkJHbUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTdjN1VHdWFLcUFIL1pxZWUrQ3lGSzlONUxrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkM1SlhaUlhUIiwibWUiOnsiaWQiOiIyMzQ4MTM2NjM0ODE5OjQxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKNngzdWtERVBLbXZMY0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIycXdmWE95NzBjRkZRMWRHYnJNTGduYzBzZWFLN1AxT0pjaXlUUTdzY2h3PSIsImFjY291bnRTaWduYXR1cmUiOiI3ODZMOWgva0JXem55UFU2bG1JbzYrNFhnQ0VNZDNBN3Q1VE1Xbi84QU8vblNPQ1k3eFYrdTNYaU1KVDFtQ1M4cnV6TXRhb1Z3UmR1dmhiaDNMdXdDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidWxSbDlRTkxrbGlwVCsyTERHYUVuNytneHpXVHNoaWhsMVEyd211TUhud1p3L1RRWFhERWhPWkdLSy9jbzhrVkdzYUl6M3RuTnhwVjR3VGdxQlFaakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTM2NjM0ODE5OjQxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRxc0gxenN1OUhCUlVOWFJtNnpDNEozTkxIbWl1ejlUaVhJc2swTzdISWMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY5NDQxMjh9
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENkRVRvRTBLNEVMZ1h2MFlpVEFDdC94cTNZbWw3MUhvY1ZLcnBVd3dYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmFGVlR4V2NNTkN6NE1ZYmlncTlMRFV2RG1yV0p6L3VtOTh1a21NWVd6UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRC8xcUhSTHVKQ09MaFBkMTVOZ1ZxR1c0VkZOSVZRVjJZdXZpV29ESDBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUDR3R0xIWDhyYXVSSkhsU1RieStyWEFtZ2dKYkZ5L3BEUUtsVnlubUNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQRnhQQkhwU05EZmJPL29mYlJYaFFlbXhwbTlQZlpJSWFXRkx0YVh5a0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjluNjlhWWx3QWN5a01RSTM3OVRuTEphNDQzWTQ3aTJFNXNobXlwOWJBMms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0cxejVUME1YVU5ydWRYN2ZNcHpxYXFtWGZ2WkVScmJyR056N1hBUXZHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUdDQWJ3Z1pLVXE4enh1SzFnYlE1a1dPb2RFTVZTcWRTM2oxMjNUamhsTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZRWXd1SDBKTjlYdXMyN01QMmpwOEZHZWRlZDBVTXVQa2NpaFBxS1FrZ0YrL3RCTjdSQ3c1bjA2N05QMGhxczNDcWt4TksyOXpkRjZLdjBLcHlYRGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJiL2hDcjdIUnJhQ3h1NXdueXpYaVZic2svbDd6em40bzJmTk9LNEV1Y21rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3azk4bF9jM1E1NjJueWNianNKMUp3IiwicGhvbmVJZCI6IjkzMDkxODk0LWYzNzUtNGFmOC1iMTQ1LWFhYjk5ODRkZTQ1YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2UG1MMFRDano5K1pya29acEZ4NlpqM3dMYjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1hJUTQ3VmMwenJXeGhtLytGOThxVzA2YkhVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxUWDlYOFJRIiwibWUiOnsiaWQiOiIyNzY0NDI3MDU4ODozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcVhwTElGRUozM29yY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5NS9ucjdGTlkrK0J3eEdUZDlza203RVZvQlBtN1JBamJJWE9vTk9pelFVPSIsImFjY291bnRTaWduYXR1cmUiOiIyOU00dzZQdjdCN0dTcnNxMWMzL0E2bkJhUXRYMTR4dDFGNm1BN1dYdmNsRDFiRWQ1M3o3ZEtCMnFLbFBVTGVuTFZ2UHNFRXl4ODdEeXViQmkyMGdDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoid05IMldCd2t6TXJnSDJJYjZveDhjQWhqY1NDTHNFNXRBMHRQaGxDck9oblYvZ295UHhwbWNSUkgzOHY3VnhGbm5wVzRycTN3eWw4NDlkK2o3Q0kwaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY0NDI3MDU4ODozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZlZjU2K3hUV1B2Z2NNUmszZmJKSnV4RmFBVDV1MFFJMnlGenFEVG9zMEYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY1Mjg0MjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRWZwIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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
