let handler = async (m, { conn, usedPrefix, command, paypal }) => {
    let img = await (await fetch(`https://tse4.mm.bing.net/th?id=OIG3.cLOJAQj8neUVXa2OXGEU&pid=ImgGn`)).buffer();
    let menu = '╭━━━━━━━━━━━━━━━━\n⣿ ‎ `✵•.¸,✵°✵.｡𝓥𝓔𝓡𝓢𝓤𝓢｡.✵°✵,¸.•✵´\n⣿ `✵•.¸,✵°✵.｡𝓞𝓕𝓘𝓒𝓘𝓐𝓛｡.✵°✵,¸.•✵´\n⣿‎ ‎ • --------------- • --------------- •\n⣿‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎🎊 𝑴𝒐𝒅𝒐: Vv2 ♀\n⣿‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎⏰𝑯𝒐𝒓𝒂𝒓𝒊𝒐𝒔: 22🇦🇷‎ |‎ ‎‎00🇵🇪\n⣿‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎💗𝑬𝒏𝒄𝒂𝒓𝒈𝒂𝒅𝒂:\n⣿‎ ‎ • --------------- • --------------- •\n⣿‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎👩🏼𝑱𝒖𝒈𝒂𝒅𝒐𝒓𝒂𝒔:\n⣿‎ ‎ ‎• 🍒\n⣿‎ ‎ ‎• 🍒\n⣿‎ ‎ ‎• 🍒\n⣿‎ ‎ ‎• 🍒 \n⣿‎ ‎ • --------------- • --------------- •\n⣿‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎👩🏼𝑺𝒖𝒑𝒍𝒆𝒏𝒕𝒆𝒔:\n⣿‎ ‎ ‎• 🍒\n⣿‎ ‎ ‎• 🍒\n⣿‎ ‎ • --------------- • --------------- •\n⣿‎ ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ 👩🏼𝑫𝒐𝒏𝒂𝒅𝒐𝒓𝒂:\n⣿‎ ‎ ‎• 🍒\n╰━━━━━━━━━━━━━━━━\n@subject';
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

handler.help = ['lista'];
handler.tags = ['lista'];
handler.command = /^lista$/i;
export default handler;
