/*
* 𝘼𝙧𝙯𝙯𝙃𝙤𝙨𝙩𝙞𝙣𝙜
* 𝙶𝚛𝚘𝚞𝚙: https://whatsapp.com/channel/0029VaemgmGAInPcqd4NsF1U

* 🚨Di Larang Menghapus Wm Ini🚨
* #𝗛𝗮𝗿𝗴𝗮𝗶𝗹𝗮𝗵 𝗣𝗲𝗺𝗯𝘂𝗮𝘁 
*/

const chalk = require('chalk')

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const mylog = (text, color) => {
return !color ? chalk.greenBright('[ BOTMD ] ') + chalk.magentaBright(text) : chalk.greenBright('[ BOTMD ] ') + chalk.keyword(color)(text)
}

module.exports = { color, mylog }