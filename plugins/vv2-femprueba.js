let handler = async (m, { conn, usedPrefix, command, paypal }) => {
    try {
        let img = await (await fetch(`https://tse4.mm.bing.net/th?id=OIG3.cLOJAQj8neUVXa2OXGEU&pid=ImgGn`)).buffer();
        let chat = await m.getChat();
        let menu = `╭━━━━━━━━━━━━━━
⣿ ‎ \`✵•.¸,✵°✵.｡\`𝙑𝙚𝙧𝙨𝙪𝙨\`｡.✵°✵,¸.•✵´
⣿ \`✵•.¸,✵°✵.｡\`𝙊𝙛𝙞𝙘𝙞𝙖𝙡\`｡.✵°✵,¸.•✵´
⣿‎ ‎ • --------------- • --------------- •
⣿ㅤㅤㅤㅤ🎊 𝑴𝒐𝒅𝒐: Vv2 ♀
⣿‎ㅤ⏰𝑯𝒐𝒓𝒂𝒓𝒊𝒐𝒔: 00🇵🇪‎ |‎ ‎‎00🇨🇱 | ‎‎00🇦🇷
⣿ㅤㅤㅤㅤ💗𝑬𝒏𝒄𝒂𝒓𝒈𝒂𝒅𝒂:
⣿‎ ‎ • --------------- • --------------- •
⣿ㅤㅤㅤㅤ\`👩🏼𝑱𝒖𝒈𝒂𝒅𝒐𝒓𝒂𝒔:\`
⣿‎ ‎ ‎• 🎀
⣿‎ ‎ ‎• 🎀
⣿‎ ‎ ‎• 🎀
⣿‎ ‎ ‎• 🎀
⣿‎ ‎ • --------------- • --------------- •
⣿ㅤㅤㅤㅤ\`👩🏼𝑺𝒖𝒑𝒍𝒆𝒏𝒕𝒆𝒔:\`
⣿‎ ‎ ‎• 🎀
⣿‎ ‎ ‎• 🎀
⣿‎ ‎ • --------------- • --------------- •
⣿ㅤㅤㅤㅤ👩🏼𝑫𝒐𝒏𝒂𝒅𝒐𝒓𝒂:
⣿‎ ‎ ‎• 🎀
╰━━━━━━━━━━━━━━
${chat.name}`;

        await conn.sendMessage(m.chat, {
            text: menu,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 9, 
                externalAdReply: {
                    title: 'ＭＩＺＵＫＩ | ＢＯＴ\n𝐕𝐀𝐘𝐀𝐍 𝐀𝐋 𝐆𝐘𝐌 𝐁𝐑𝐎𝐒: ʙᴇɴᴊᴀᴍɪɴ',
                    thumbnail: img,
                    sourceUrl: 'https://chat.whatsapp.com/IQthSTc0F9Y7LSRXkyx8j5',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
        await m.react('✅');
    } catch (error) {
        console.error(error);
        await m.react('❌');
    }
}

handler.help = ['listaprueba'];
handler.tags = ['listaprueba'];
handler.command = /^listaprueba$/i;
export default handler;
