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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_11_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICA4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyLFxuICAgICAgICA5NixcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTForT2x0OVNQdjFqbndZTDBiZ0QyUWxJUG50MkVjOGFQWVArYnNCeWg3ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyNzg0OTQyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUUzMERFMzQ0NkRDQzE0QzQ1QkI4NEI5ODZDMkVFNDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MzM1NTAxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3Mjc4NDk0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAyN0NCMzcwOTNFQzM3NThCMjkzNTBCN0E3NUQ1NDNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTMzNTUwMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUYmN3NW9CaVNuU01jYjhWci1qU2NRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4Y2FkZDY5LTU3ZTQtNDQ2OC05MmUzLTY1MzQzNTBjMmQzYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAxOTgsXG4gICAgICAyMzYsXG4gICAgICAyMjksXG4gICAgICAxNjMsXG4gICAgICA3MixcbiAgICAgIDE1MSxcbiAgICAgIDI2LFxuICAgICAgMTYwLFxuICAgICAgMjM3LFxuICAgICAgMTQsXG4gICAgICAzNCxcbiAgICAgIDIzNyxcbiAgICAgIDQzLFxuICAgICAgMjE5LFxuICAgICAgMjM1LFxuICAgICAgNTgsXG4gICAgICAxLFxuICAgICAgMTY1LFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgMjEzLFxuICAgICAgMjMzLFxuICAgICAgMjE1LFxuICAgICAgMTgwLFxuICAgICAgODYsXG4gICAgICAxOTksXG4gICAgICAxNzIsXG4gICAgICAxNDEsXG4gICAgICAxODYsXG4gICAgICAxNjcsXG4gICAgICA0OCxcbiAgICAgIDgwLFxuICAgICAgMTU0LFxuICAgICAgNDcsXG4gICAgICAyOCxcbiAgICAgIDIxNyxcbiAgICAgIDYwLFxuICAgICAgMjM1LFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFCREZXUERFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyNzg0OTQyMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDU0NDE2NDA0MzU3NjA6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn6WwS0BcXFxcL+KCrOKCrCR8LXxB8J+lsFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09DVnpKUUNFTWIwNjdNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL0FRWEM1dGVIWjZTc0dueUV0eHMyUTRZUElxdytRTDJaUjZneE1EUXYyQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPZUhjYjZVYVVMK05pbDVIMHEzMWNFb3poalM5RlJiem5ISFVBc1RMbCtqWlY3d0xkOTlqQWRxaWJ5Tm1hNGV4czBhcmpoRUpnQnVEZFNyWi9HQ2lBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGVzZHb2ZucTVVOVRvM0tLSkZFaWRuYmZNQ0hLN216NmpYRUJwNmdyZElWempVZWZ6NXRjQ0lPYXlibXo0aHhBZmUrbDVTdUpSeGhVZUk0RUN3b0pqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyNzg0OTQyMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTMzNTQ5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdzTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3NNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXRuV3ZPNkRtVnBsK3owZXd1UDVYWEtjL1ZJRzhwd0xuWnV6QWZ5aGhiRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODAwNjE5MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTMzMTM0Mzc1N1wifSIKfQ=="  // PUT your SESSION_ID 


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
