const fs = require('fs')
const chalk = require('chalk')

exports.menu = (AMOUNT, msg, prefix, runTime, botName, SETTING) => {
  return `❏ *I N F O - U S E R*
username: _@${msg.pushName}_
botname: _${SETTING.botname}_
ownername: _${SETTING.ownername}_

┏─☷☶ *❏ A L L - M E N U* ☶☷
┆❏𝚝𝚎𝚜
┆❏𝚋𝚞𝚐𝚙𝚊𝚢𝚎𝚖𝚎𝚗𝚝
┆❏𝚙𝚞𝚋𝚕𝚒𝚌
┆❏𝚜𝚎𝚗𝚍𝚋𝚞𝚐
┆❏𝚙𝚒𝚗𝚐
┆❏𝚒𝚗𝚟𝚒𝚝𝚎𝚒𝚗𝚏𝚘
┆❏𝚜𝚎𝚕𝚏
┆❏𝚜𝚑𝚒𝚗𝚘𝚋𝚞
┆❏𝚛𝚞𝚗𝚝𝚒𝚖𝚎
┆❏𝚜𝚎𝚗𝚍𝚋𝚞𝚐𝚛𝚘𝚠𝚜
┆❏𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┆❏𝚜𝚎𝚗𝚍𝚋𝚞𝚐𝚔𝚘𝚗𝚝𝚊𝚔
┆❏𝚜𝚎𝚝𝚝𝚑𝚞𝚖𝚋
┆❏𝚋𝚞𝚐𝚍𝚎𝚕𝚎𝚝𝚎
┆❏𝚘𝚑𝚒𝚍𝚎𝚝𝚊𝚐
┆❏𝚖𝚎𝚐𝚞𝚖𝚒𝚗
┆❏𝚌𝚞𝚕𝚒𝚔
┆❏𝚊𝚠𝚘𝚘
┆❏𝚐𝚎𝚝𝚌𝚊𝚜𝚎
┆❏𝚗𝚎𝚔𝚘
┆❏𝚊𝚍𝚍𝚜𝚝𝚒𝚌𝚔𝚎𝚛
┆❏𝚞𝚕𝚊𝚛𝚝𝚊𝚗𝚐𝚐𝚊
┆❏𝚔𝚒𝚌𝚔
┆❏𝚠𝚊𝚒𝚏𝚞
┆❏𝚙𝚛𝚘𝚖𝚘𝚝𝚎
┆❏𝚖𝚞𝚜𝚒𝚌
┆❏𝚍𝚎𝚖𝚘𝚝𝚎
┆❏𝚙𝚕𝚊𝚢
┆❏𝚑𝚒𝚍𝚎𝚝𝚊𝚐
┆❏𝚙𝚒𝚗𝚜𝚝𝚒𝚌𝚔
┆❏𝚘𝚑𝚒𝚍𝚎𝚝𝚊𝚐
┆❏𝚛𝚎𝚙𝚎𝚊𝚝
┆❏𝚐𝚛𝚘𝚞𝚙
┆❏𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┆❏𝚜𝚎𝚝𝚗𝚊𝚖𝚎𝚐𝚌
┆❏𝚝𝚊𝚔𝚎
┆❏𝚜𝚎𝚝𝚍𝚎𝚜𝚌
┆❏𝚝𝚒𝚔𝚝𝚘𝚔𝚍𝚕
┆❏𝚑𝚒𝚍𝚎𝚝𝚊𝚐
┆❏𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠
┆❏𝚝𝚊𝚐𝚊𝚕𝚕
┆❏𝚠𝚎𝚕𝚌𝚘𝚖𝚎 *_?on/off :)?_*
┆❏𝚢𝚘𝚞𝚝𝚞𝚋𝚎𝚖𝚙𝟺
┆❏𝚝𝚒𝚗𝚢𝚞𝚛𝚕
┆❏𝚢𝚘𝚞𝚝𝚞𝚋𝚎𝚖𝚙𝟹
┆❏𝚌𝚕𝚊𝚢
┗─☶ *THANKSFORUSING* ☷
        DONATE FOR CLAY :)
          6285966393571

${"```THANKS TO```"}					
❏clay					
❏clay					
`
  }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})