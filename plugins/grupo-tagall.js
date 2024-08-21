const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `${pesan}\n> ✅𝙏𝙊𝙏𝘼𝙇 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎: _*${participants.length}*_`;
  let teks = `${oi}\n\n┏・�𝐄𝐍𝐉𝐀 𝐆𝐎𝐑�� 𝐓𝐄𝐓��\n`;
  for (const mem of participants) {
    teks += `┣・🇦🇬 @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗・𝐕𝐀𝐘𝐀𝐍 𝐀𝐋 𝐆𝐘𝐌 𝐁𝐑𝐎𝐒 x`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso)$/i;
handler.admin = true;
handler.group = true;
export default handler;
