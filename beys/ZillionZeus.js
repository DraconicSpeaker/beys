const Beyblade=require("./Beyblade.js");class ZillionZeus extends Beyblade{constructor(){super("Zillion Zeus","Stamina","https://i.ibb.co/NYmmFdy/zeus.png"),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){if(e.stamina>Math.round(e.maxstamina/100*50)){let i=t.hp,n=40,r=0;for(var a=0;a<e.lvl;a++)r+=.1;let o=n+r;t.hp=t.hp-o;let l=i-t.hp;e.stamina=e.stamina+3;let u=(new Discord.MessageEmbed).setTitle(`[${e.username}] Zillion Zeus used **Infinity Launch**.`).setDescription(`The iron balls within Zeus moved to the outer part of the layer, increasing outward weight distribution and increasing stamina by 3. The weight distribution allowed Zeus to counter enemy attacks and deal ${l} damage!`).setColor("#551a8b");s.channel.createMessage({embed:u})}else if(e.stamina<=Math.round(e.maxstamina/100*50)){e.stamina=e.stamina+1,t.atk=Math.round(t.atk/100*30);let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Zillion Zeus used **Iron Launch**.`).setDescription("The iron balls within Zeus' layer moved to the center, granting a centralized weight distribution and preventing stamina loss this turn! The shifted weight absorbed some attacks, reducing incoming damage by 70%.").setColor("#551a8b");s.channel.createMessage({embed:a})}}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=ZillionZeus;