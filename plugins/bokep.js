let handler = async (m, { conn }) => {		
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih kak jngan lupa follow ig owner', m)
}
handler.help = ['bokep']
handler.tags = ['fun']

handler.command = /^(bokep)$/i
handler.premium = true
handler.register = true
handler.limit = false
module.exports = handler
