let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `🔰 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖𝙡 𝙡𝙖𝙨 𝙘𝙪𝙚𝙣𝙩𝙖𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘
🔰 **
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙞𝙩𝙝𝙪𝙗
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚𝙡 𝙗𝙤𝙩
1) *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
2) *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙖𝙦𝙪𝙞́ 𝙨𝙚 𝙙𝙖𝙧 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙘𝙞𝙤𝙣 𝙮 𝙣𝙤𝙫𝙚𝙙𝙖𝙙𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩
 *${nna}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤 𝙖𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠
**
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤 𝙩𝙚𝙡𝙚𝙜𝙧𝙖𝙢
**
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *𝙏𝙞𝙠𝙩𝙤𝙠*
 *${ig}*
 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙔𝙤𝙪𝙏𝙪𝙗𝙚
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙞 𝙩𝙞𝙚𝙣𝙚𝙣 𝙙𝙪𝙙𝙖𝙨, 𝙨𝙪𝙜𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨, 𝙤 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖𝙨 𝗲𝘀𝗰𝗿𝗶𝗯𝗶 𝗽𝗼𝗿 𝗲𝗹 𝗴𝗿𝘂𝗽𝗼`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
handler.command = /^cuentasoficiales$/i
handler.exp = 35
handler.register = true
export default handler
