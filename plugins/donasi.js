let handler = async m => m.reply(`
Gausah donasi gw tau lu ga da duit, masuk grup aja link di bawah🗿\nLink: https://chat.whatsapp.com/CmlrDN2xl0lCl4eBHLe6IJ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
