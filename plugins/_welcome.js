import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/2jKKcrs/file.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `┌─★ *Sumi Sakurasawa* \n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Bienvenido a\n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal)
  }
  
  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `*\`╭━〔  BENJA 💩 PUTA  〕━╮\`*\n┃➔ 🗣𝙐𝙨𝙪𝙖𝙧𝙞𝙤: ${usuario}\n┃➔ ✅𝘿𝙚𝙩𝙚𝙘𝙩: Un nuevo miembro se ha unido al grupo.\n┃➔ ❗𝘼𝙫𝙞𝙨𝙤: ¡Bienvenido/a @${m.messageStubParameters[0].split`@`[0]}!\n╰━━━━━━━━━━━━━━━╯`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal)
  }
  
  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `*\`╭━〔  BENJA 💩 PUTA  〕━╮\`*\n┃➔ 🗣𝙐𝙨𝙪𝙖𝙧𝙞𝙤: ${usuario}\n┃➔ ✅𝘿𝙚𝙩𝙚𝙘𝙩: Un nuevo miembro se fue del grupo.\n┃➔ ❗𝘼𝙫𝙞𝙨𝙤: ¡Adios @${m.messageStubParameters[0].split`@`[0]}!\n╰━━━━━━━━━━━━━━━╯`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal)
}}
