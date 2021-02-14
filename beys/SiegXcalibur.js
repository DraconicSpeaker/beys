const Beyblade=require("./Beyblade.js");class SiegXcalibur extends Beyblade{constructor(){super("Sieg Xcalibur","Attack","https://vignette.wikia.nocookie.net/beyblade/images/1/11/Beyblade_Sieg_Xcalibur.png/revision/latest?cb=20180716235603"),this.specials=[{name:"Special",requires:function(e,t,a){return e.sp>3},execute:function(e,t,a){if(e.hp>60){let s=t.hp,n=50,r=0;for(var i=0;i<e.lvl;i++)r+=.2;let l=n+r;t.hp=t.hp-l;let o=s-t.hp,h=(new Discord.MessageEmbed).setTitle(`[${e.username}] Xcalibur used **Double Impact**.`).setDescription(`Xcalibur utilized the metal within the sword on it's layer to deliver a fierce and heavy strike to the opponent for ${o} damage.`).setColor("#551a8b");a.channel.createMessage({embed:h})}else if(e.hp<=60){let s=t.hp,n=70,r=0;for(i=0;i<e.lvl;i++)r+=.2;let l=n+r;t.hp=t.hp-l;let o=s-t.hp;e.stamina=e.stamina-1;let h=(new Discord.MessageEmbed).setTitle(`[${e.username}] Xcalibur used **Triple Impact**.`).setDescription(`Xcalibur took advantage of the shifted weight from it's 1 disc being aligned with the sword on it's layer, using the extra heavy weight to deliver a heavyweight blow to the opponent for ${o} damage. The loss in stability from the shifted weight dropped stamina by 1.`).setColor("#551a8b");a.channel.createMessage({embed:h})}}}],this.passives=[{name:"Passive",requires:function(e,t,a){let i;return i=e.hp<=Math.round(e.maxhp/100*50)},execute:function(e,t,a){t.hp=t.hp-30,e.stamina=e.stamina+1;let i=(new Discord.MessageEmbed).setTitle(`[${e.username}] Sieg Xcalibur activated **Full Metal Surge**.`).setDescription("Xcalibur utilized the shifted weight from reaching the halfway point to bursting, the 1 disc aligned with the layer created a single concentrated point of contact on the sword to deal a heavyweight 30 damage attack to the opponent. The flat, metal Iron driver compensates for some of the imbalance caused by this, increasing stamina by 1.").setColor("#551a8b");a.channel.createMessage({embed:i})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=SiegXcalibur;