const Beyblade=require("./Beyblade.js");class KillerDeathscyther extends Beyblade{constructor(){super("Killer Deathscyther","Attack","https://vignette.wikia.nocookie.net/beyblade/images/5/59/Beyblade_Killer_Deathscyther.png/revision/latest?cb=20180716234851"),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s,a){let i=t.hp,r=0;for(var n=0;n<e.lvl;n++)r+=.3;let l=70+r;t.hp=t.hp-l;let o=i-t.hp;e.stamina=e.stamina-1;let h=(new Discord.MessageEmbed).setTitle(`[${e.username}] Killer Deathscyther used **Double Strike**.`).setDescription(`Deathscyther slammed into the enemy, the sudden drop in velocity caused the free moving blade to slide forward and strike the opponent a second time swiftly for ${o} damage and minus 1 stamina!`).setColor("#551a8b");s.channel.createMessage({embed:h})}}],this.passives=[{name:"Passive",requires:function(e,t,s,a){return!1},execute:function(e,t,s,a){t.hp=t.hp-28;let i=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:i})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=KillerDeathscyther;