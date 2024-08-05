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
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
   // if (!lister.includes(feature)) return conn.reply(m.chat, `*🚩 Ingresa el formato en que deseas descargar más el titulo de un video o musica de YouTube.*\n\nEjemplo : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`,  m, fake,)
	  if (command == "play" || command == 'play2') {
            if (!text) return conn.reply(m.chat, `> 🎵𝙸𝚗𝚐𝚛𝚎𝚜𝚊 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚌𝚘𝚗 𝚎𝚕 𝚝í𝚝𝚞𝚕𝚘 𝚍𝚎𝚕 𝚟𝚒𝚍𝚎𝚘 𝚘 𝚖ú𝚜𝚒𝚌𝚊 𝚚𝚞𝚎 𝚍𝚎𝚜𝚎𝚊𝚜 𝚚𝚞𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚞𝚎 𝚙𝚊𝚛𝚊 𝚝𝚒.`,  m)
    await m.react('🕓')
    var res = await yts(text)
    var vid = res.videos[0]
    var q = '128kbps'
const texto1 = `*\`╭━〔 𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓  〕━╮\`*\n┃➔ *🗣𝑼𝒔𝒖𝒂𝒓𝒊𝒐:* ${usuario}\n┃➔ *✅𝑪𝒐𝒎𝒂𝒏𝒅𝒐:* .play\n┃➔ *🏴𝑻𝒊𝒕𝒖𝒍𝒐:* ${vid.title}\n┃➔ *👤𝑨𝒖𝒕𝒐𝒓:* ${vid.author.name}\n┃➔ *⏰𝑫𝒖𝒓𝒂𝒄𝒊𝒐𝒏:* ${vid.timestamp}\n┃➔ *👀𝑽𝒊𝒔𝒊𝒕𝒂𝒔:* ${vid.views}\n┃➔ *🗓𝑷𝒖𝒃𝒍𝒊𝒄𝒂𝒅𝒐:* ${vid.ago}\n┃➔ *❗𝑼𝒓𝒍:* ${'https://youtu.be/' + vid.videoId}\n╰━━━━━━━━━━━━╯`.trim()
		
await conn.sendButton(m.chat, texto1, wm, res.videos[0].thumbnail, [
	['🎧Descargar Audios', `${usedPrefix}mp3 ${text}`],
	['🎥Descargar Video', `${usedPrefix}mp4 ${text}`]
  ], null, [['Canal', `${md}`]], m)
	  }
  
            if (command == "mp3") {
	 if (!text) return conn.reply(m.chat, `*🚩 Ingresa el titulo de un video o musica de YouTube.*`, m, fake,)
		
       try {
    const res = await yts(text)
    const vid = res.videos[0]
    const q = '128kbps'
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*\n\n` + error, m, fake,).then(_ => m.react('✖️'))
        console.error(error)
    }}
    }
        
        if (command == "mp4") {
            if (!text) return conn.reply(m.chat, `*🚩 Ingresa el titulo de un video o musica de YouTube.*`, m, fake,)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	const texto1 = `Y O U T U B E 乂 M U S I C\n
	✩ *Título ∙* ${vid.title}\n
        ✩ *Duración ∙* ${vid.timestamp}\n
        ✩ *Visitas ∙* ${vid.views}\n
        ✩ *Autor ∙* ${vid.author.name}\n
        ✩ *Publicado ∙* ${vid.ago}\n
        ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
	/*
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
       */
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m)
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m)
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'))
        console.error(error)
    }}}
    
    if (command == "mp3doc") {
            if (!inputs) return conn.reply(m.chat, `*🚩 Ingresa el titulo de un video o musica de YouTube.*`,  m, fake,)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
	const texto1 = `Y O U T U B E 乂 D O C\n
       ✩ *Título ∙* ${vid.title}\n
       ✩ *Duración ∙* ${vid.timestamp}\n
       ✩ *Visitas ∙* ${vid.views}\n
       ✩ *Autor ∙* ${vid.author.name}\n
       ✩ *Publicado ∙* ${vid.ago}\n
       ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
	   /* 
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
	    */
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`,  m, fake,).then(_ => m.react('✖️'))
        console.error(error)
    }}}
    
    if (command == "mp4doc") {
            if (!inputs) return conn.reply(m.chat, `*🚩 Ingresa el titulo de un video o musica de YouTube.*`, m)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	const texto1 = `Y O U T U B E 乂 M U S I C\n
	✩ *Título ∙* ${vid.title}\n
        ✩ *Duración ∙* ${vid.timestamp}\n
        ✩ *Visitas ∙* ${vid.views}\n
        ✩ *Autor ∙* ${vid.author.name}\n
        ✩ *Publicado ∙* ${vid.ago}\n
        ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
	    /*
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
  */
       
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━●────── ${vid.timestamp}`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━●────── ${vid.timestamp}`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*\n\n` + error, m).then(_ => m.react('✖️'))
        console.error(error)
}}}
}
handler.help = ["play"].map(v => v + " <formato> <búsqueda>")
handler.tags = ["downloader"]
handler.command = ['play', 'play2', 'mp3', 'mp4', 'mp3doc', 'mp4doc']
handler.register = true 
handler.star = 2
export default handler
