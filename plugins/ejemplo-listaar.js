let handler = async (m, { conn, usedPrefix, command, paypal }) => {
    let img = await (await fetch(`https://tse4.mm.bing.net/th?id=OIG3.cLOJAQj8neUVXa2OXGEU&pid=ImgGn`)).buffer();
    let menu = '\`𝐋𝐈𝐒𝐓𝐀𝐒🇦🇷𝐕𝐕𝟐\`\n\n\`🏴𝑪𝒐𝒎𝒂𝒏𝒅𝒐:\`\n> .vv2fem"hora"🇦🇷\n\`🔊𝑬𝒋𝒆𝒎𝒑𝒍𝒐:\`\n> .vv2fem01🇦🇷\n\`✅𝑨𝒄𝒍𝒂𝒓𝒂𝒄𝒊𝒐𝒏:\`\n> Donde dice "hora". Pones la hora que gustes, tenemos listas de todas las 24hs.';
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
    await m.react('🇦🇷');
}

handler.help = ['ejemplo🇦🇷'];
handler.tags = ['ejemplo🇦🇷'];
handler.command = /^ejemplo🇦🇷$/i;
export default handler;
