const Beyblade=require("./Beyblade.js");class DemonDestroyingBey extends Beyblade{constructor(){super("Demon Destroying Bey","Balance","https://cdn.glitch.com/7f7cfead-eec3-467c-866a-948e538f87c9%2Fkimetsunobeiburedo.png?v=1581766665854"),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t,a){switch(Math.floor(3*Math.random())){case 0:let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Demon Destroying Bey used **Special Move 1st Form: Edge Slice**. 68 damage dealt.`).setColor("#551a8b");s.hp=s.hp-68,t.channel.send(a);break;case 1:let n=(new Discord.MessageEmbed).setTitle(`[${e.username}] Demon Destroying Bey used **Special Move 2nd Form: Eye-blinding Beam**. Its opponent was blinded for 1 minute and missed its attack. 65% damage reduced.`).setColor("#551a8b");s.atk=Math.round(s.atk/100*35),t.channel.send(n);break;case 2:let o=(new Discord.MessageEmbed).setTitle(`[${e.username}] Demon Destroying Bey used **Special Move 3rd Form: Cage of Demon Destroying**.  The opponent was unable to attack due to being trapped in the cage. 10 damage dealt. Gained 2 stamina from the wind pressure generated by the cage's creation.`).setColor("#551a8b");s.atk=0,s.hp=s.hp-10,e.stamina=e.stamina+1,t.channel.send(o)}}}],this.passives=[{name:"Passive",requires:function(e,s,t,a){return!1},execute:function(e,s,t,a){s.hp=s.hp-28;let n=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:n})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=DemonDestroyingBey;