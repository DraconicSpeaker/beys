const Beyblade=require("./Beyblade.js");class SeigXcalibur extends Beyblade{constructor(){super("Seig Xcalibur","Attack","https://vignette.wikia.nocookie.net/beyblade/images/1/11/Beyblade_Sieg_Xcalibur.png/revision/latest/zoom-crop/width/720/height/720?cb=20180716235603"),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t){s.hp=s.hp-50,e.hp=e.hp-5,e.stamina=e.stamina-1;let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Seig Xcalibur used **Third Impact**. 50 damage dealt, but 5 taken as well as a 3 drain in stamina.`).setColor("#551a8b");t.channel.send(a)}}],this.passives=[{name:"Passive",requires:function(e,s,t){return!1},execute:function(e,s,t){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=SeigXcalibur;