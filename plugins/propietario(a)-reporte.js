let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙧𝙚𝙥𝙤𝙧𝙩𝙚*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤:*\n*${usedPrefix + command} el comando ${usedPrefix}los stickers no funka.*`
if (text.length < 8) throw `${fg} ✨ *𝑴𝒊́𝒏𝒊𝒎𝒐 10 𝒄𝒂𝒓𝒂𝒄𝒕𝒆𝒓𝒆𝒔 𝒑𝒂𝒓𝒂 𝒉𝒂𝒄𝒆𝒓 𝒆𝒍 𝒓𝒆𝒑𝒐𝒓𝒕𝒆..*`
if (text.length > 1000) throw `${fg} 😼 *𝑴𝒂́𝒙𝒊𝒎𝒐 1000 𝑪𝒂𝒓𝒂𝒄𝒕𝒆𝒓𝒆𝒔 𝒑𝒂𝒓𝒂 𝒉𝒂𝒄𝒆𝒓 𝒆𝒍 𝒓𝒆𝒑𝒐𝒓𝒕𝒆.*`
await delay(5 * 5000)
let teks = `*_❒═════[ʀᴇᴘᴏʀᴛᴇ]═════╾❒_*\n*_┬_*\n*├ɴᴜᴍᴇʀᴏ: Wa.me/${m.sender.split`@`[0]}*\n*_┴_*\n*_┬_*\n*├ᴍᴇɴsᴀᴊᴇ: ${text}*\n*_┴_*`
//conn.reply('593968585383@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})
conn.reply('5492266466080@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
await delay(3 * 3000)
  m.reply(`> REPORTE\n\n> EL REPORTE FUE ENVIADO CON EXITO AL STAFF DE MIZUKI | BOT.`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
