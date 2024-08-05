import translate from '@vitalets/google-translate-api'
import fetch from "node-fetch"
let handler = async (m, { text, command, args, usedPrefix }) => {
  if (!text) throw `> 🏴𝚄𝚜𝚊 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚗𝚞𝚎𝚟𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚎𝚛𝚘 𝚊𝚌𝚘𝚖𝚙𝚊ñ𝚊𝚍𝚘 𝚍𝚎 𝚞𝚗 𝚝𝚎𝚡𝚝𝚘 𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝚙𝚞𝚎𝚍𝚊𝚜 𝚑𝚊𝚋𝚕𝚊𝚛 𝚌𝚘𝚗 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝`
  try {
  await conn.sendPresenceUpdate('composing', m.chat)
  let api = await fetch("https://api.simsimi.net/v2/?text=" + text + "&lc=es")
  let resSimi = await api.json()
  m.reply(resSimi.success)      
  } catch {
  try {
  if (text.includes('Hola')) text = text.replace('Hola', 'Hello')
  if (text.includes('hola')) text = text.replace('hola', 'Hello')
  if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO')    
  let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + text)
  let resu = await reis.json()  
  let nama = m.pushName || '1'
  let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
  let res = await api.json()
  let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + res.cnt)
  let resu2 = await reis2.json()
  m.reply(resu2[0][0][0])      
  } catch {  
  let reisss = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=" + text)
  let resuuu = await reisss.json()      
  let res222 = await fetch(`https://violetics.pw/api/utility/simsimi?apikey=beta&text=${resuuu[0][0][0]}`)  
  let json222 = await res222.json()
  let resulttt = json222.result
  let lolll = await translate(`${resulttt}`, { to: 'es', autoCorrect: true })
  m.reply(lolll.text)      
  }}
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi', 'preg', 'pregunta'] 
export default handler
