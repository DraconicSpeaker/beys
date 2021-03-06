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
    acted.stamina = acted.stamina + 3;
	victim.stamina = victim.stamina - 1;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Rising Ragnaruk used **Ragnaruk Zone**.`)
	.setDescription (`Ragnaruk reduced stamina loss by utilizing the Revolve driver's sharp tip in the center of it, reducing stamina loss as much as possible to enhance stamina by 3 while using it's free spinning plate to reduce knockback when knocked off balance, stalling out the opponent and dropping their stamina by 1.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  });

const RisingRagnaruk = new bcworkshop.Beyblade({name: "Rising Ragnaruk", type: "Stamina", imageLink: "https://vignette.wikia.nocookie.net/beyblade/images/3/3c/Beyblade_Ragnaruk.png/revision/latest?cb=20181219001611"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = RisingRagnaruk;