const bcworkshop = new require("bcworkshop");

const passive = new bcworkshop.Passive("Passive", function check(acted, victim, message){
    return false;
  }, function passed(acted, victim, message){
    victim.hp = victim.hp - 28;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Uh oh, [${acted.username}] ${acted.bey.bbname || acted.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`)
    .setDescription("Please report this at the support server.")
    .setColor("#551a8b");
    message.channel.createMessage({embed: embed});
  }, 180);

const special = new bcworkshop.Special("Special", function req(acted, victim, logger){return acted.sp > 3}, function special(acted, victim, message){
    
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.atk = victim.atk = 0;
    victim.hp = victim.hp - 45;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Flame Sagittario used **Wildfire Claw Dance**. 45 damage dealt.`)
    .setColor("#551a8b");
    
    message.channel.send(embed);
  });

const FlameSagittario = new bcworkshop.Beyblade({name: "Flame Sagittario", type: "Stamina", imageLink: "https://media.discordapp.net/attachments/697626728243265546/742291621818925188/image0.png?width=586&height=586"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = FlameSagittario;