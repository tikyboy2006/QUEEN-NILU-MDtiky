/*
WHATSAPP BOT BY TIKY BOY 
WHATSAPP - 94768413434
Whatsapp Group - https://chat.whatsapp.com/JV3LFsotygaGG51Il7ePgO

*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;AmZwADQQ#FP5fglKehS4nk0YUJPuHS2W3t_K9LRL5gl3IIYz4jAE' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = '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'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94768413434'

global.OWNER_NAME = 'TIKY_BOY'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'Queen-NILU bot < powered by tiky >'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@TIKY 🤹‍♂️' //sticker

global.FOOTER = 'TIKY_Boy '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'TIKY_Boy © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/c55081585d93a8da8670f.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '����Hello There...IM tiky boy , ��Im online now...' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/JV3LFsotygaGG51Il7ePgO' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

