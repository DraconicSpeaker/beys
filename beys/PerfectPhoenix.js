const Beyblade=require("./Beyblade.js");class PerfectPhoenix extends Beyblade{constructor(){super("Perfect Phoenix","Balance","https://media.discordapp.net/attachments/490783690323001345/726759768110268426/image-removebg-preview_2.png"),this.specials=[{name:"Special",requires:function(e,a,s){return e.sp>3},execute:function(e,a,s,t){if(1===Math.round(1*Math.random())){a.hp=a.hp-59,e.stamina=e.stamina-1;let t=(new Discord.MessageEmbed).setTitle(`[${e.username}] Perfect Phoenix used **Perfect Crush**. 59 damage dealt, 1 stamina reduced and armour removed.`).setColor("#551a8b");e.bey.armour=!1,s.channel.createMessage({embed:t})}else{a.hp=a.hp-50,a.atk=a.atk-10;let t=(new Discord.MessageEmbed).setTitle(`[${e.username}] Perfect Phoenix used **Perfect Armour Press**. 56 damage dealt and armour removed while also reducing opponent's damage by 10.`).setColor("#551a8b");e.bey.armour=!1,s.channel.createMessage({embed:t})}}}],this.passives=[{name:"Passive",requires:function(e,a,s,t){let r;return r=e.hp<e.maxhp/100*65},execute:function(e,a,s,t){if(e.bey.armour){a.atk=0,a.hp=a.hp-20;let t=(new Discord.MessageEmbed).setAuthor("Passive Ability").setTitle(`[${e.username}] Perfect Phoenix used **Perfect Shield**. Opponent's damage nullified while also dealing 20 damage.`).setColor("#551a8b");s.channel.createMessage({embed:t})}else{e.hp=e.hp+20,e.stamina=e.stamina+1;let a=(new Discord.MessageEmbed).setAuthor("Passive Ability").setTitle(`[${e.username}] Perfect Phoenix used **Perfect Weight**. 20 hitpoints healed and stamina increased by 1.`).setColor("#551a8b");s.channel.createMessage({embed:a})}},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=PerfectPhoenix;