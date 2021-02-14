const Beyblade=require("./Beyblade.js");class XenoXcalibur extends Beyblade{constructor(){super("Xeno Xcalibur","Attack","https://vignette.wikia.nocookie.net/beyblade/images/2/28/Beyblade_Xcalibur.png/revision/latest?cb=20181219003322"),this.specials=[{name:"Special",requires:function(e,a,t){return e.sp>3},execute:function(e,a,t){if(e.hp>Math.round(e.maxhp/100*60)){let i=a.hp,n=40,l=0;for(var s=0;s<e.lvl;s++)l+=.2;let r=n+l;a.hp=a.hp-r;let o=i-a.hp,c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Xeno Xcalibur used **One Impact**.`).setDescription(`Xcalibur used the saber on it's layer to slash away at the opponent with incredible force, dealing ${o} damage!`).setColor("#551a8b");t.channel.createMessage({embed:c})}else if(e.hp<=Math.round(e.maxhp/100*60)){let i=a.hp,n=60,l=0;for(s=0;s<e.lvl;s++)l+=.2;let r=n+l;a.hp=a.hp-r;let o=i-a.hp;e.stamina=e.stamina-1;let c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Xeno Xcalibur used **Double Impact**.`).setDescription(`Xcalibur's Magnum disc aligned with the saber on it's layer, allowing it to slash away at the opponent with incredible weight behind the attack, dealing ${o} damage! The imbalance this causes reduced stamina by 1.`).setColor("#551a8b");t.channel.createMessage({embed:c})}}}],this.passives=[{name:"Passive",requires:function(e,a,t){return!1},execute:function(e,a,t){a.hp=a.hp-28;let s=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:s})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=XenoXcalibur;