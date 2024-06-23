module.exports = {
 config: {
 name: "respect",
 aliases: [],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["100091289477923"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "🙅| 𝐒𝐞𝐮𝐥 𝒎𝒐𝒏 𝒎𝒂𝒊𝒕𝒓𝒆 ᏋᎷᎮᏋᏒᏋᏬᏒ ᏝᎥᎶᏂᏖ ᎩᏗᎶᏗᎷᎥ 𝒑𝒆𝒖𝒙 𝒖𝒕𝒊𝒍𝒊𝒔𝒆́ 𝒄𝒆𝒕𝒕𝒆 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒆😐",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `𝑱𝒆 𝒔𝒖𝒊𝒔 𝒂 𝒗𝒐𝒕𝒓𝒆 𝒔𝒆𝒓𝒗𝒊𝒄𝒆 𝒎𝒐𝒏 𝒔𝒆𝒏𝒔𝒆𝒊....😇🍀✨✅ᏋᎷᎮᏋᏒᏋᏬᏒ ᏝᎥᎶᏂᏖ ᎩᏗᎶᏗᎷᎥ🙂🍀`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("𝐷𝑒𝑠𝑜𝑙𝑒 𝑏𝑜𝑠𝑠👮 𝑐𝑒𝑠 𝑝𝑢𝑡𝑒𝑠 𝑠𝑜𝑛𝑡 𝑏𝑖𝑧𝑎𝑟𝑟𝑒𝑠...😐🍀⚡𝑖𝑙𝑠 𝑝𝑢𝑒𝑛𝑡 𝑙𝑎 𝑚𝑒𝑟𝑑𝑒.....🚶🍀✨✅", event.threadID);
 }
 },
}
