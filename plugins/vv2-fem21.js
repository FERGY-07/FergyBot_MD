let handler = async (m, { conn, usedPrefix, command, paypal }) => {
    let img = await (await fetch(`https://tse4.mm.bing.net/th?id=OIG3.cLOJAQj8neUVXa2OXGEU&pid=ImgGn`)).buffer();
    let menu = '╭━━━━━━━━━━━━━━\n⣿ ‎ `✵•.¸,✵°✵.｡\`𝙑𝙚𝙧𝙨𝙪𝙨\`｡.✵°✵,¸.•✵´\n⣿ `✵•.¸,✵°✵.｡\`𝙊𝙛𝙞𝙘𝙞𝙖𝙡\`｡.✵°✵,¸.•✵´\n⣿‎ ‎ • --------------- • --------------- •\n⣿ㅤㅤㅤㅤ🎊 𝑴𝒐𝒅𝒐: Vv2 ♀\n⣿‎ㅤ⏰𝑯𝒐𝒓𝒂𝒓𝒊𝒐𝒔: 21🇵🇪‎ | ‎‎22🇨🇱 |‎ ‎‎23🇦🇷\n⣿ㅤㅤㅤㅤ💗𝑬𝒏𝒄𝒂𝒓𝒈𝒂𝒅𝒂:\n⣿‎ ‎ • --------------- • --------------- •\n⣿ㅤㅤㅤㅤ\`👩🏼𝑱𝒖𝒈𝒂𝒅𝒐𝒓𝒂𝒔:\`\n⣿‎ ‎ ‎• 🎀\n⣿‎ ‎ ‎• 🎀\n⣿‎ ‎ ‎• 🎀\n⣿‎ ‎ ‎• 🎀\n⣿‎ ‎ • --------------- • --------------- •\n⣿ㅤㅤㅤㅤ\`👩🏼𝑺𝒖𝒑𝒍𝒆𝒏𝒕𝒆𝒔:\`\n⣿‎ ‎ ‎• 🎀\n⣿‎ ‎ ‎• 🎀\n⣿‎ ‎ • --------------- • --------------- •\n⣿ㅤㅤㅤㅤ👩🏼𝑫𝒐𝒏𝒂𝒅𝒐𝒓𝒂:\n⣿‎ ‎ ‎• 🎀\n╰━━━━━━━━━━━━━━';
    await conn.sendMessage(m.chat, {
        text: menu,
        contextInfo: { 
            mentionedJid: [m.sender],
            forwardingScore: 9, 
            externalAdReply: {
                title: 'ＭＩＺＵＫＩ | ＢＯＴ\nᴅᴇᴠᴇʟᴏᴘᴇʀ: ʙᴇɴᴊᴀᴍɪɴ',
                thumbnail: img,
                sourceUrl: 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
    await m.react('✅');
}

handler.help = ['vv2fem21🇵🇪'];
handler.tags = ['vv2fem21🇵🇪'];
handler.command = /^vv2fem21🇵🇪$/i;
export default handler;
