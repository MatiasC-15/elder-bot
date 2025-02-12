let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 HN BOT 🥷🏼;;\nFN:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 HN BOT 🥷🏼\nORG:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 HN BOT 🥷🏼\nTITLE:\nitem1.TEL;waid=50487421142:50487421142\nitem1.X-ABLabel:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 HN BOT 🥷🏼\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 HN BOT 🥷🏼\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
