const Beyblade=require("./Beyblade.js");class FlameSagittario extends Beyblade{constructor(e,t){super("Flame Sagittario","Stamina","https://cdn.discordapp.com/attachments/697626728243265546/742291621818925188/image0.png",e,t),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){t.atk=t.atk=0,t.hp=t.hp-45;let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Flame Sagittario used **Wildfire Claw Dance**. 45 damage dealt.`).setColor("#551a8b");s.channel.send(a)}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=FlameSagittario;