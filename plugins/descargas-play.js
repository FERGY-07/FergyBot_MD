import fg from 'api-dylux'

import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

import yts from 'yt-search'

import fetch from 'node-fetch' 


let handler = async (m, { conn, args, usedPrefix, text, command }) => {

let lister = [

"mp3",

"mp4", 

"mp3doc",

"mp4doc"

]

let [feature, inputs, inputs_, inputs_, inputs] = text.split(" ")

// if (!lister.includes(feature)) return conn.reply(m.chat, *ðŸš© Ingresa el formato en que deseas descargar mÃ¡s el titulo de un video o musica de YouTube.*\n\nEjemplo : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*, m, fake,)

if (command == "play" || command == 'play2') {

if (!text) return conn.reply(m.chat, `*\â•­â”�â�°â�° ð��’ð��˜ð��’ð��“ð��„ð��Œ ð��— â�±â�±â”�â•®\*\n> ð�‘½ð�’–ð�’†ð�’�ð�’—ð�’† ð�’‚ ð�’–ð�’”ð�’‚ð�’“ ð�’†ð�’� ð�’„ð�’�ð�’Žð�’‚ð�’�ð�’…ð�’� ð�’‘ð�’†ð�’“ð�’� ð�’‚ð�’„ð�’�ð�’Žð�’‘ð�’‚Ã±ð�’‚ð�’…ð�’� ð�’…ð�’†ð�’� ð�’•ð�’Šð�’•ð�’–ð�’�ð�’� + ð�’†ð�’� ð�’‚ð�’–ð�’•ð�’�ð�’“.\n> ð�‘¬ð�’‹ð�’†ð�’Žð�’‘ð�’�ð�’�: .ð�’‘ð�’�ð�’‚ð�’š ð�‘«ð�’†ð�’—ð�’–ð�’†ð�’�ð�’—ð�’†ð�’Žð�’† ð�’‚ ð�’Žð�’Š ð�’„ð�’‰ð�’Šð�’„ð�’‚ - ð�‘¯ð�’�ð�’Žð�’ƒð�’“ð�’†ð�’”ð�‘®`, m)

await m.react('ðŸ•“')

var res = await yts(text)

var vid = res.videos[0]

var q = '128kbps'

const texto1 = `*\â•­â”�ã€” ð��’ð��˜ð��’ð��“ð��„ð��Œ ð��— ã€•â”�â•®\*\nâ”ƒâž” ðŸ�´ð�‘»ð�’Šð�’•ð�’–ð�’�ð�’�: ${vid.title}\nâ”ƒâž” ðŸ‘¤ð�‘¨ð�’–ð�’•ð�’�ð�’“: ${vid.author.name}\nâ”ƒâž” â�°ð�‘«ð�’–ð�’“ð�’‚ð�’„ð�’Šð�’�ð�’�: ${vid.timestamp}\nâ”ƒâž” ðŸ‘€ð�‘½ð�’Šð�’”ð�’Šð�’•ð�’‚ð�’”: ${vid.views}\nâ”ƒâž” ðŸ—“ð�‘·ð�’–ð�’ƒð�’�ð�’Šð�’„ð�’‚ð�’…ð�’�: ${vid.ago}\nâ”ƒâž” â�—ð�‘¼ð�’“ð�’�: ${'https://youtu.be/' + vid.videoId}\nâ•°â”�â”�â”�â”�â”�â”�â”�â”�â”�â”�â”�â”�â•¯`.trim()

await conn.sendButton(m.chat, texto1, wm, res.videos[0].thumbnail, [

['ðŸŽ§ð��ƒð��„ð��’ð��‚ð��€ð��‘ð��†ð��€ð��‘ ð��€ð��”ð��ƒð��ˆð��Ž', ${usedPrefix}mp3 ${text}],

['ðŸŽ¥ð��ƒð��„ð��’ð��‚ð��€ð��‘ð��†ð��€ð��‘ ð��•ð��ˆð��ƒð��„ð��Ž', ${usedPrefix}mp4 ${text}]

], null, [['ð��‚ð��€ð���ð��€ð��‹ ð��’ð��˜ð��’ð��“ð��„ð��Œ ð��—', ${md}]], m)

}

if (command == "mp3") {

if (!text) return conn.reply(m.chat, `*\â•­â”�â�°â�° ð��’ð��˜ð��’ð��“ð��„ð��Œ ð��— â�±â�±â”�â•®\*\n> ð�‘½ð�’–ð�’†ð�’�ð�’—ð�’† ð�’‚ ð�’–ð�’”ð�’‚ð�’“ ð�’†ð�’� ð�’„ð�’�ð�’Žð�’‚ð�’�ð�’…ð�’� ð�’‘ð�’†ð�’“ð�’� ð�’‚ð�’„ð�’�ð�’Žð�’‘ð�’‚Ã±ð�’‚ð�’…ð�’� ð�’…ð�’†ð�’� ð�’•ð�’Šð�’•ð�’–ð�’�ð�’� + ð�’†ð�’� ð�’‚ð�’–ð�’•ð�’�ð�’“.\n> ð�‘¬ð�’‹ð�’†ð�’Žð�’‘ð�’�ð�’�: .ð�’‘ð�’�ð�’‚ð�’š ð�‘«ð�’†ð�’—ð�’–ð�’†ð�’�ð�’—ð�’†ð�’Žð�’† ð�’‚ ð�’Žð�’Š ð�’„ð�’‰ð�’Šð�’„ð�’‚ - ð�‘¯ð�’�ð�’Žð�’ƒð�’“ð�’†ð�’”ð�‘®`, m)

try {

const res = await yts(text)

const vid = res.videos[0]

if (!vid) {

m.reply(No hubo resultados en tu busqueda.)

return

}

const q = '128kbps'

let yt = await fg.yta(vid.url, q)

let { title, dl_url, size } = yt

let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga., m).then(_ => m.react('âœ–ï¸�'))

await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {

'forwardingScore': 200,

'isForwarded': true,

externalAdReply:{

showAdAttribution: false,

title: ${vid.title},

body: ${vid.author.name},

mediaType: 2, 

sourceUrl: ${vid.url || null},

thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })

await m.react('âœ…')

} catch {

try {

let yt = await fg.ytmp3(vid.url, q)

let { title, dl_url, size } = yt

let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga., m).then(_ => m.react('âœ–ï¸�'))

await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {

'forwardingScore': 200,

'isForwarded': true,

externalAdReply:{

showAdAttribution: false,

title: ${vid.title},

body: ${vid.author.name},

mediaType: 2, 

sourceUrl: ${vid.url},

thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })

await m.react('âœ…')

} catch (error) {

await conn.reply(m.chat,*â˜“ OcurriÃ³ un error inesperado*\n\n + error, m, fake,).then(_ => m.react('âœ–ï¸�'))

console.error(error)

}}

}

if (command == "mp4") {

if (!text) return conn.reply(m.chat, `*\â•­â”�â�°â�° ð��’ð��˜ð��’ð��“ð��„ð��Œ ð��— â�±â�±â”�â•®\*\n> ð�‘½ð�’–ð�’†ð�’�ð�’—ð�’† ð�’‚ ð�’–ð�’”ð�’‚ð�’“ ð�’†ð�’� ð�’„ð�’�ð�’Žð�’‚ð�’�ð�’…ð�’� ð�’‘ð�’†ð�’“ð�’� ð�’‚ð�’„ð�’�ð�’Žð�’‘ð�’‚Ã±ð�’‚ð�’…ð�’� ð�’…ð�’†ð�’� ð�’•ð�’Šð�’•ð�’–ð�’�ð�’� + ð�’†ð�’� ð�’‚ð�’–ð�’•ð�’�ð�’“.\n> ð�‘¬ð�’‹ð�’†ð�’Žð�’‘ð�’�ð�’�: .ð�’‘ð�’�ð�’‚ð�’š ð�‘«ð�’†ð�’—ð�’–ð�’†ð�’�ð�’—ð�’†ð�’Žð�’† ð�’‚ ð�’Žð�’Š ð�’„ð�’‰ð�’Šð�’„ð�’‚ - ð�‘¯ð�’�ð�’Žð�’ƒð�’“ð�’†ð�’”ð�‘®`, m)

await m.react('ðŸ•“')

let res = await yts(text)

let vid = res.videos[0]

let q = '360p'

const texto1 = `*\â•­â”�â�°â�° ð��’ð��˜ð��’ð��“ð��„ð��Œ ð��— â�±â�±â”�â•®\*\n> ð�‘½ð�’–ð�’†ð�’�ð�’—ð�’† ð�’‚ ð�’–ð�’”ð�’‚ð�’“ ð�’†ð�’� ð�’„ð�’�ð�’Žð�’‚ð�’�ð�’…ð�’� ð�’‘ð�’†ð�’“ð�’� ð�’‚ð�’„ð�’�ð�’Žð�’‘ð�’‚Ã±ð�’‚ð�’…ð�’� ð�’…ð�’†ð�’� ð�’•ð�’Šð�’•ð�’–ð�’�ð�’� + ð�’†ð�’� ð�’‚ð�’–ð�’•ð�’�ð�’“.\n> ð�‘¬ð�’‹ð�’†ð�’Žð�’‘ð�’�ð�’�: .ð�’‘ð�’�ð�’‚ð�’š ð�‘«ð�’†ð�’—ð�’–ð�’†ð�’�ð�’—ð�’†ð�’Žð�’† ð�’‚ ð�’Žð�’Š ð�’„ð�’‰ð�’Šð�’„ð�’‚ - ð�‘¯ð�’�ð�’Žð�’ƒð�’“ð�’†ð�’”ð�‘®`

/*

await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [

['Creador', ${usedPrefix}creador],

['Menu', ${usedPrefix}menu]

], null, [['Canal', ${md}]], m)

*/

try {

let yt = await fg.ytv(vid.url, q)

let { title, dl_url, size } = yt

let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga., m, fake,).then(_ => m.react('âœ–ï¸�'))

await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n*ã…¤ ã…¤â‡†ã…¤ã…¤â—�ã…¤ã…¤â�šâ�šã…¤ã…¤â–·ã…¤ã…¤â†»ã…¤ã…¤*\n*\00:21 â”�â”�â”�â—�â”€â”€â”€â”€â”€ ${vid.timestamp}\*`, m)

await m.react('âœ…')

} catch {

try {

let yt = await fg.ytmp4(vid.url, q)

let { title, dl_url, size } = yt

let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga., m, fake,).then(_ => m.react('âœ–ï¸�'))

await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n*ã…¤ ã…¤â‡†ã…¤ã…¤â—�ã…¤ã…¤â�šâ�šã…¤ã…¤â–·ã…¤ã…¤â†»ã…¤ã…¤*\n*\00:21 â”�â”�â”�â—�â”€â”€â”€â”€â”€ ${vid.timestamp}\*`, m)

await m.react('âœ…')

} catch (error) {

await conn.reply(m.chat,*â˜“ OcurriÃ³ un error inesperado*, m).then(_ => m.react('âœ–ï¸�'))

console.error(error)

}}}

if (command == "mp3doc") {

if (!inputs) return conn.reply(m.chat, `*\â•­â”�â�°â�° ð��’ð��˜ð��’ð��“ð��„ð��Œ ð��— â�±â�±â”�â•®\*\n> ð�‘½ð�’–ð�’†ð�’�ð�’—ð�’† ð�’‚ ð�’–ð�’”ð�’‚ð�’“ ð�’†ð�’� ð�’„ð�’�ð�’Žð�’‚ð�’�ð�’…ð�’� ð�’‘ð�’†ð�’“ð�’� ð�’‚ð�’„ð�’�ð�’Žð�’‘ð�’‚Ã±ð�’‚ð�’…ð�’� ð�’…ð�’†ð�’� ð�’•ð�’Šð�’•ð�’–ð�’�ð�’� + ð�’†ð�’� ð�’‚ð�’–ð�’•ð�’�ð�’“.\n> ð�‘¬ð�’‹ð�’†ð�’Žð�’‘ð�’�ð�’�: .ð�’‘ð�’�ð�’‚ð�’š ð�‘«ð�’†ð�’—ð�’–ð�’†ð�’�ð�’—ð�’†ð�’Žð�’† ð�’‚ ð�’Žð�’Š ð�’„ð�’‰ð�’Šð�’„ð�’‚ - ð�‘¯ð�’�ð�’Žð�’ƒð�’“ð�’†ð�’”ð�‘®`, m)

await m.react('ðŸ•“')

let res = await yts(text)

let vid = res.videos[0]

let q = '128kbps'

const texto1 = `*\â•­â”�ã€” ð��’ð��˜ð��’ð��“ð��„ð��Œ ð��— ã€•â”�â•®\*\nâ”ƒâž” ðŸ�´ð�‘»ð�’Šð�’•ð�’–ð�’�ð�’�: ${vid.title}\nâ”ƒâž” ðŸ‘¤ð�‘¨ð�’–ð�’•ð�’�ð�’“: ${vid.author.name}\nâ”ƒâž” â�°ð�‘«ð�’–ð�’“ð�’‚ð�’„ð�’Šð�’�ð�’�: ${vid.timestamp}\nâ”ƒâž” ðŸ‘€ð�‘½ð�’Šð�’”ð�’Šð�’•ð�’‚ð�’”: ${vid.views}\nâ”ƒâž” ðŸ—“ð�‘·ð�’–ð�’ƒð�’�ð�’Šð�’„ð�’‚ð�’…ð�’�: ${vid.ago}\nâ”ƒâž” â�—ð�‘¼ð�’“ð�’�: ${'https://youtu.be/' + vid.videoId}\nâ•°â”�â”�â”�â”�â”�â”�â”�â”�â”�â”�â”�â”�â•¯`

/* 

await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [

['Creador', ${usedPrefix}creador],

['Menu', ${usedPrefix}menu]

], null, [['Canal', ${md}]], m)

*/

try {

let yt = await fg.yta(vid.url, q)

let { title, dl_url, size } = yt

let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga., m, fake,).then(_ => m.react('âœ–ï¸�'))

await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {

'forwardingScore': 200,

'isForwarded': true,

externalAdReply:{

showAdAttribution: false,

title: ${vid.title},

body: ${vid.author.name},

mediaType: 2, 

sourceUrl: ${vid.url},

thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })

await m.react('âœ…')

} catch {

try {

let yt = await fg.ytmp3(vid.url, q)

let { title, dl_url, size } = yt

let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga., m, fake,).then(_ => m.react('âœ–ï¸�'))

await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {

'forwardingScore': 200,

'isForwarded': true,

externalAdReply:{

showAdAttribution: false,

title: ${vid.title},

body: ${vid.author.name},

mediaType: 2, 

sourceUrl: ${vid.url},

thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })

await m.react('âœ…')

} catch (error) {

await conn.reply(m.chat,*â˜“ OcurriÃ³ un error inesperado*, m, fake,).then(_ => m.react('âœ–ï¸�'))

console.error(error)

}}}

if (command == "mp4doc") {

if (!inputs) return conn.reply(m.chat, `*\â•­â”�â�°â�° ð��’ð��˜ð��’ð��“ð��„ð��Œ ð��— â�±â�±â”�â•®\*\n> ð�‘½ð�’–ð�’†ð�’�ð�’—ð�’† ð�’‚ ð�’–ð�’”ð�’‚ð�’“ ð�’†ð�’� ð�’„ð�’�ð�’Žð�’‚ð�’�ð�’…ð�’� ð�’‘ð�’†ð�’“ð�’� ð�’‚ð�’„ð�’�ð�’Žð�’‘ð�’‚Ã±ð�’‚ð�’…ð�’� ð�’…ð�’†ð�’� ð�’•ð�’Šð�’•ð�’–ð�’�ð�’� + ð�’†ð�’� ð�’‚ð�’–ð�’•ð�’�ð�’“.\n> ð�‘¬ð�’‹ð�’†ð�’Žð�’‘ð�’�ð�’�: .ð�’‘ð�’�ð�’‚ð�’š ð�‘«ð�’†ð�’—ð�’–ð�’†ð�’�ð�’—ð�’†ð�’Žð�’† ð�’‚ ð�’Žð�’Š ð�’„ð�’‰ð�’Šð�’„ð�’‚ - ð�‘¯ð�’�ð�’Žð�’ƒð�’“ð�’†ð�’”ð�‘®`, m)

await m.react('ðŸ•“')

let res = await yts(text)

let vid = res.videos[0]

let q = '360p'

const texto1 = `*\â•­â”�ã€” ð��Œð��ˆð��™ð��”ð��Šð��ˆ | ð���ð��Žð��“ ã€•â”�â•®\*\nâ”ƒâž” ðŸ�´ð�‘»ð�’Šð�’•ð�’–ð�’�ð�’�: ${vid.title}\nâ”ƒâž” ðŸ‘¤ð�‘¨ð�’–ð�’•ð�’�ð�’“: ${vid.author.name}\nâ”ƒâž” â�°ð�‘«ð�’–ð�’“ð�’‚ð�’„ð�’Šð�’�ð�’�: ${vid.timestamp}\nâ”ƒâž” ðŸ‘€ð�‘½ð�’Šð�’”ð�’Šð�’•ð�’‚ð�’”: ${vid.views}\nâ”ƒâž” ðŸ—“ð�‘·ð�’–ð�’ƒð�’�ð�’Šð�’„ð�’‚ð�’…ð�’�: ${vid.ago}\nâ”ƒâž” â�—ð�‘¼ð�’“ð�’�: ${'https://youtu.be/' + vid.videoId}\nâ•°â”�â”�â”�â”�â”�â”�â”�â”�â”�â”�â”�â”�â•¯`

/*

await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [

['Creador', ${usedPrefix}creador],

['Menu', ${usedPrefix}menu]

], null, [['Canal', ${md}]], m)

*/

try {

let yt = await fg.ytv(vid.url, q)

let { title, dl_url, size } = yt

let limit = 300

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga., m, fake,).then(_ => m.react('âœ–ï¸�'))

await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n*ã…¤ ã…¤â‡†ã…¤ã…¤â—�ã…¤ã…¤â�šâ�šã…¤ã…¤â–·ã…¤ã…¤â†»ã…¤ã…¤*\n*\00:21 â”�â”�â”�â”�â—�â”€â”€â”€â”€â”€â”€ ${vid.timestamp}\*`, mimetype: 'video/mp4', fileName: ${vid.title} + .mp4, quoted: m, contextInfo: {

'forwardingScore': 200,

'isForwarded': true,

externalAdReply:{

showAdAttribution: false,

title: ${vid.title},

body: ${vid.author.name},

mediaType: 2, 

sourceUrl: ${vid.url},

thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })

await m.react('âœ…')

} catch {

try {

let yt = await fg.ytmp4(vid.url, q)

let { title, dl_url, size } = yt

let limit = 300

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga., m, fake,).then(_ => m.react('âœ–ï¸�'))

await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n*ã…¤ ã…¤â‡†ã…¤ã…¤â—�ã…¤ã…¤â�šâ�šã…¤ã…¤â–·ã…¤ã…¤â†»ã…¤ã…¤*\n*\00:21 â”�â”�â”�â”�â—�â”€â”€â”€â”€â”€â”€ ${vid.timestamp}\*`, mimetype: 'video/mp4', fileName: ${vid.title} + .mp4, quoted: m, contextInfo: {

'forwardingScore': 200,

'isForwarded': true,

externalAdReply:{

showAdAttribution: false,

title: ${vid.title},

body: ${vid.author.name},

mediaType: 2, 

sourceUrl: ${vid.url},

thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })

await m.react('âœ…')

} catch (error) {

await conn.reply(m.chat,*â˜“ OcurriÃ³ un error inesperado*\n\n + error, m).then(_ => m.react('âœ–ï¸�'))

console.error(error)

}}}

}

handler.help = ["play"].map(v => v + " <formato> <bÃºsqueda>")

handler.tags = ["downloader"]

handler.command = ['play', 'play2', 'mp3', 'mp4', 'mp3doc', 'mp4doc']

handler.register = true 

handler.star = 2

export default handler
