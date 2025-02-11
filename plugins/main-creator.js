let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝐄𝐋𝐃𝐄𝐑-𝐁𝐎𝐓 🤖;;\nFN:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝐄𝐋𝐃𝐄𝐑-𝐁𝐎𝐓 🤖\nORG:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝐄𝐋𝐃𝐄𝐑-𝐁𝐎𝐓 🤖\nTITLE:\nitem1.TEL;waid=50489115621:50489115621\nitem1.X-ABLabel:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝐄𝐋𝐃𝐄𝐑-𝐁𝐎𝐓 🤖\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝐄𝐋𝐃𝐄𝐑-𝐁𝐎𝐓 🤖\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
