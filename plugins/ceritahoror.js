let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://docs-pinomd.herokuapp.com/api/ceritahantu')
  let cerpen = await url.json()
let hasil = `
*Powered By ${global.wm}*

${cerpen.data}
`.trim()

  m.reply(hasil)
}
handler.help = ['ceritahantu']
handler.tags = ['internet']
handler.command = /^ceritahantu$/i
handler.limit = true

module.exports = handler
