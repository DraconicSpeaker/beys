const Beyblade=require("./Beyblade.js");class StormPegasus extends Beyblade{constructor(){super("Storm Pegasus","Attack","https://cdn.glitch.com/7f7cfead-eec3-467c-866a-948e538f87c9%2Fbcb7d440-7874-4610-92da-cff72677d517.image.png?v=1578891076433"),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t,a){s.hp=s.hp-41;let r=(new Discord.MessageEmbed).setTitle(`[${e.username}] Storm Pegasus used **Starblast Attack**. 41 damage dealt.`).setColor("#551a8b");t.channel.send(r)}}],this.passives=[{name:"Passive",requires:function(e,s,t,a){return!1},execute:function(e,s,t,a){s.hp=s.hp-28;let r=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:r})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=StormPegasus;