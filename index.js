const { Telegraf, Markup } = require('telegraf');
const axios = require('axios')

const bot = new Telegraf('Your Bot Token')

let pais = 'Tester'

bot.command('start', (ctx) => {
  return ctx.replyWithPhoto({ url: 'https://telegra.ph/file/c3f19e89e109e1534b02a.jpg' },
    {
      caption: 'Hai '+ctx.from.first_name+' Aku adalah bot untuk mendownload video/photo dari instagram, Klik tombol menu untuk mendapatkan menu.',
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.callback('Menu', 'help'),
        Markup.button.url('Subs Channel Bot', 't.me/nekozu'),
      ])
    }
  )
})

bot.action('help', ctx => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    ctx.reply('/igdl -> untuk mendownload foto/video dari instagram\n')
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

bot.command('igdl', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Sertakan Link!" 
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        // console.log(messager)
        // try{
        const link = await axios.get(`https://pencarikode.xyz/api/ig?url=`+messager+`&apikey=`+pais)
        const result = link.data.result.data
        // const hasill = result
        // console.log(result)
        result.forEach((res) => {
            
        // console.log(hasil)
        if(res.type == 'image'){
        ctx.replyWithPhoto({url: res.data})

        } else {
            console.log('video')
            ctx.replyWithVideo({url: res.data})
        }
        
        })
        // }catch(e){
        // ctx.reply(`Link not found / wrong link!`)
        // }
    }
})

console.log('Bot Running')
console.log('Happy Using! Dont Forget To Subs @nekozu!!')

//ctx.reply(`err`)
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
