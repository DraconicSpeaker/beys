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
    
	
	 let before = victim.hp;
    let base = 50;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.3; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.stamina = victim.stamina - 1.5;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
	.setTitle(`[${acted.username}] Dranzer Spiral used **Fire Spin**.`)
	.setDescription(`Dranzer slammed into a wall and was sent flying into the air, increasing it's spin velocity midair as it came crashing down atop it's opponent for ${diff} damage. The destabilization from the attack dropped the opponent's stamina by 1.5.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  });

const DranzerSpiral = new bcworkshop.Beyblade({name: "Dranzer Spiral", type: "Balance", imageLink: "https://i.ibb.co/z4j8VJM/Dranzser.png"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = DranzerSpiral;