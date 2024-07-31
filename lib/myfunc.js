/*
* 𝘼𝙧𝙯𝙯𝙃𝙤𝙨𝙩𝙞𝙣𝙜
* 𝙶𝚛𝚘𝚞𝚙: https://whatsapp.com/channel/0029VaemgmGAInPcqd4NsF1U

* 🚨Di Larang Menghapus Wm Ini🚨
* #𝗛𝗮𝗿𝗴𝗮𝗶𝗹𝗮𝗵 𝗣𝗲𝗺𝗯𝘂𝗮𝘁 
*/

const fs = require('fs')
const fetch = require("node-fetch");
const axios = require('axios')

exports.getGroupAdmins = function (participants) {
let admins = [];
for (let i of participants) {
i.admin !== null ? admins.push(i.id) : "";
}
return admins;
};

exports.getBuffer = async (url, options) => {
try {
options ? options : {}
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (err) {
return err
}}

exports.fetchJson = (url, options) => new Promise(async(resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})
})

exports.sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

exports.isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}