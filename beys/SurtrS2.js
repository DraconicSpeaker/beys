const Beyblade=require("./Beyblade.js");class SurtrS2 extends Beyblade{constructor(){super("Surtr S2","Attack","https://i.ibb.co/0y4bPdS/surtr.png"),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){let a=t.hp,r=0;for(var i=0;i<e.lvl;i++)r+=.15;let n=50+r;t.hp=t.hp-n;let o=a-t.hp;t.stamina=t.stamina-2,e.stamina=e.stamina-1;let u=(new Discord.MessageEmbed).setTitle(`[${e.username}] Surtr S2 used **Burning Saber**.`).setDescription(`Surtr bounced into the air with it's offset Quake tip costing 1 stamina, before crashing down from above using the flame protrusion on it's layer, dealing ${o} damage and reducing enemy stamina by 2!`).setColor("#551a8b");s.channel.createMessage({embed:u})}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=SurtrS2;