let handler = async m => m.reply(`
Donasi nya masuk di grup bot aja gausah repot²😁🙏\nLink: https://chat.whatsapp.com/CmlrDN2xl0lCl4eBHLe6IJ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
