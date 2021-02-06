const bcworkshop = new require("bcworkshop");

const passive = new bcworkshop.Passive("Passive", function check(acted, victim, message, player){
    return false;
  }, function passed(acted, victim, message, player){
    victim.hp = victim.hp - 28;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Uh oh, [${acted.username}] ${acted.bey.bbname || acted.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`)
    .setDescription("Please report this at the support server.")
    .setColor("#551a8b");
    message.channel.createMessage({embed: embed});
  }, 180);

const special = new bcworkshop.Special("Special", function req(acted, victim, logger){return acted.sp > 3}, function special(acted, victim, message, player){
    
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.stamina = victim.stamina - 1;
	victim.atk = Math.round((victim.atk/100)*55);
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Tyros T2 used **Hound Barrier**.`)
	.setDescription (`Tyros used it's rounded layer and outward weight distribution to repel 45% of incoming damage, and stalling out the opponent to drop their stamina by 1!`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  });

const TyrosT2 = new bcworkshop.Beyblade({name: "Tyros T2", type: "Balance", imageLink: "https://i.ibb.co/Zc97drj/Tyros.png"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = TyrosT2;