const Beyblade=require("./Beyblade.js");class GigantGaia extends Beyblade{constructor(){super("Gigant Gaia","Balance","https://i.ibb.co/x86gbcw/Gaia.png"),this.specials=[{name:"Special",requires:function(e,a,t){return e.sp>3},execute:function(e,a,t,s){if(a.atk=0){let s=a.hp,n=70,r=0;for(var i=0;i<e.lvl;i++)r+=.1;let o=n+r;a.hp=a.hp-o;let l=s-a.hp;e.stamina=e.stamina-1;let c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Gigant Gaia used **Swing Launch**.`).setDescription(`Gaia used the wavering spin caused by it's Quarter disc to deliver a heavy smash attack to it's opponent worth ${l} damage! The unbalanced nature dropped stamina by 1.`).setColor("#551a8b");t.channel.createMessage({embed:c})}else if(a.atk>0){let s=a.hp,n=40,r=0;for(i=0;i<e.lvl;i++)r+=.1;let o=n+r;a.hp=a.hp-o;let l=s-a.hp;e.atk=a.atk,a.atk=Math.round(a.atk/100*40);let c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Gigant Gaia used **Swing Counter**.`).setDescription(`Gaia negated 60% of the enemy attack, instead using the momentum to ride up the stadium and come back down to slam into the opponent for ${l} damage + the enemy's attack power!`).setColor("#551a8b");t.channel.createMessage({embed:c})}}}],this.passives=[{name:"Passive",requires:function(e,a,t,s){return!1},execute:function(e,a,t,s){a.hp=a.hp-28;let i=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:i})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=GigantGaia;