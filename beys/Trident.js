const Beyblade=require("./Beyblade.js");class Trident extends Beyblade{constructor(e,t){super("Trident","Stamina","https://i.ibb.co/HxXLsPX/trident.png",e,t),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){e.atk=t.atk,e.stamina=e.stamina+3;let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Trident used **Claw Counter**.`).setDescription("The concentrated weight Trident's Heavy disc allowed it to extend the claws of the Claw driver, creating a gale force strong enough to enhance stamina by 3. The gale force parried and reflected the enemy's attack back to them!").setColor("#551a8b");s.channel.createMessage({embed:a})}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Trident;