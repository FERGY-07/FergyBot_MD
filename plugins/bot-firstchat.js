import moment from 'moment-timezone'

export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `𝐒𝐀𝐋𝐔𝐃𝐎𝐒 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 ${nombre}

𝘌𝘚𝘊𝘙𝘐𝘉𝘌 .𝘮𝘦𝘯𝘶 𝘗𝘈𝘙𝘈 𝘝𝘐𝘚𝘜𝘈𝘓𝘐𝘡𝘈𝘙 𝘔𝘐𝘚 𝘊𝘖𝘔𝘈𝘕𝘋𝘖𝘚.


*${nn}*`, m)


user.pc = new Date * 1
}
