const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94727849423";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_49_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExLFxuICAgICAgICA2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTksXG4gICAgICAgIDU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICA2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICA4MSxcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiellVNFNudWNKdFBMZ0tHZnlONjFlMzVOWWxCdFJWZDVMc0MyVm8rQzZhUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyNzg0OTQyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTIxM0ZBMTRCNTU3QTVEQTlCNzBCQTc5QTk5ODczRkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NDI0MTgyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVFNHdnR3p4U3FLbmpmMmZkSElQdmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTY5MGQxNGYtMGE2My00OTViLWJjYTktZGRlZDdmZDIzODk2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgODksXG4gICAgICA2MSxcbiAgICAgIDIyMCxcbiAgICAgIDEwOCxcbiAgICAgIDE4LFxuICAgICAgMTU4LFxuICAgICAgMjQzLFxuICAgICAgMjAzLFxuICAgICAgOTYsXG4gICAgICAyNCxcbiAgICAgIDIyMyxcbiAgICAgIDEzMyxcbiAgICAgIDEwOCxcbiAgICAgIDE1OSxcbiAgICAgIDEzOSxcbiAgICAgIDg2LFxuICAgICAgMTU5LFxuICAgICAgMTgsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMjAzLFxuICAgICAgMjI1LFxuICAgICAgNzUsXG4gICAgICAyMSxcbiAgICAgIDc2LFxuICAgICAgNjcsXG4gICAgICAyMTksXG4gICAgICAxOTAsXG4gICAgICA1MixcbiAgICAgIDExNyxcbiAgICAgIDE3NixcbiAgICAgIDE2NixcbiAgICAgIDE0LFxuICAgICAgMjIyLFxuICAgICAgMTQsXG4gICAgICAxOSxcbiAgICAgIDI1NSxcbiAgICAgIDIzNCxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRU0VUM1dOWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Mjc4NDk0MjM6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNTQ0MTY0MDQzNTc2MDoxOEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn6WwS0BcXFxcL+KCrOKCrCR8LXxB8J+lsFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09DVnpKUUNFS3VwOGJNR0dCb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL0FRWEM1dGVIWjZTc0dueUV0eHMyUTRZUElxdytRTDJaUjZneE1EUXYyQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoZEtNWXBoUE5zc0N2NjMyNWFTTkpjbDc5VHhjS0JjTEZUaFZsNUxuUmgvSVR4dXlmZWFMSTQrV3pyNXlHUVh6SG9ORHR6RmI0N3JXdlo1V2NhNS9CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyQ1hHaXZUKy9VUE9QOGZPendvaFVwU2lhclpJeFhCNTJRbVExSzd5RzRJUmpYSHhGdHNGeDk3TDFkRm9HRkRuU3pmWlUyV1ZJWDUwd2xHUEFucmJodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyNzg0OTQyMzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk0MjQxNzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHc1NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdzUy5qc29uIjogIntcImtleURhdGFcIjpcInVyVGxvVTMvMGJRdzlmUllxUk1hSGlkcWppZWMxRHErVmgyUWNSdTVzckU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTgwMDYxOTIwLFwiY3VycmVudEluZGV4XCI6MjAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw0LDIwLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
