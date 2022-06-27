const Discord = require("discord.js");
const child = require("child_process");
const { MessageEmbed } = require("discord.js");
const { codeBlock } = require("@discordjs/builders");

exports.run = async (client, message, args) => {
  
  if(message.author.id !== '678402714765361182') {
    const embed = new MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR")
    .setDescription("This Command is only for Developers")
    return message.reply({ embeds: [embed] }).catch(e => message.channel.send(`ERROR \n${e}`));
  }
  
  try{
    const command = args.join(" ");
    if (!command) {
      const embed = new MessageEmbed()
      .setColor("RED")
      .setTitle("ERROR")
      .setDescription("Please Specify a Command to Execute")
      return message.reply({ embeds: [embed] }).catch(e => message.channel.send(`ERROR \n${e}`));
    }

    const exeChan = message.channel.id;
    const messChan = "989550974102294548";

    if ( exeChan === messChan ) {
      child.exec(command, (err, res) =>{
        if(err) {
          return message.channel.send(codeBlock("js", err)).catch(e => message.channel.send(`ERROR \n${err}`));
        }
        message.channel.send(codeBlock("js", res.slice(0, 2000))).catch(e => message.channel.send("ERROR"));
      });

    } else {
      return
    }

  } catch(e) {
    message.channel.send(`**Error Message**\n${e}`);
  }
  
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "t"
};
