const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`;
  let teks = `> Acαѕo eхιѕтe αlɢo мαѕ vαlιoѕo qυe тυѕ ѕυeɴ̃oѕ? 🩵*\n\n *${oi}\n\n➥ _*@kathypazgarcia:*_\n`;
  for (const mem of participants) {
    teks += `*🩷 ➸* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└𝑳𝒖𝒇𝒇𝒚 𝑩𝒐𝒕 ⇝@luffybot03*`;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};
handler.help = ['todos *<txt>*'];
handler.tags = ['gc'];
handler.command = /^(tagall1|t1|invocar1|marcar1|todos1|invocación1)$/i;
handler.admin = true;
handler.group = true;
export default handler;