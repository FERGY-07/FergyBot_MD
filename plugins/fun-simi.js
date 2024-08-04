
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {

 let lang = global.db.data.users[m.sender].language
  if (!text) throw `> 🏴𝚄𝚜𝚊 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚗𝚞𝚎𝚟𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚎𝚛𝚘 𝚊𝚌𝚘𝚖𝚙𝚊ñ𝚊𝚍𝚘 𝚍𝚎 𝚞𝚗 𝚝𝚎𝚡𝚝𝚘 𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝚙𝚞𝚎𝚍𝚊𝚜 𝚑𝚊𝚋𝚕𝚊𝚛 𝚌𝚘𝚗 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝`
  m.react('🏴') 
  try { 
  //let res = await fetch(`https://api.simsimi.vn/v2/?text=${text}&lc=${lang}`)
  let res = await fetch('https://api.simsimi.vn/v1/simtalk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `text=${encodeURIComponent(text)}&lc=${lang}&key=`
  })
  let json = await res.json()
  m.reply(json.message.replace('simsimi', `${botName}`).replace('Simsimi', `${botName}`).replace('sim simi', `${botName}`))
} catch {
  m.reply(`❎ Intenta de nuevo mas tarde La api de SimSimi se cayo`)
}

}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'simi'] 

export default handler
