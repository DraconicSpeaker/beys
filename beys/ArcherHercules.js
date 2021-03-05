const Beyblade=require("./Beyblade.js");class ArcherHercules extends Beyblade{constructor(e,a){super("Archer Hercules","Stamina","https://static.wikia.nocookie.net/beyblade/images/b/bc/Beyblade_Hercules.png/revision/latest/scale-to-width-down/316?cb=20190918213500",e,a),this.specials=[{name:"Archer Strike",requires:function(e,a,r){return e.sp>=3&&e.stamina>=Math.round(e.maxstamina/100*60)},execute:function(e,a,r){a.hp-=50+.5*e.lvl,e.stamina+=2,r.add(`[${e.username}] Archer Hercules used **Archer Strike**!`)}},{name:"Herculean Barrier",requires:function(e,a,r){return e.sp>=3&&e.stamina<=Math.round(e.maxstamina/100*60)},execute:function(e,a,r){a.stability-=15+.2*e.lvl,a.atk=Math.round(a.atk/100*20),r.add(`[${e.username}] Archer Hercules used **Herculean Barrier**!`)}}],this.passives=[{name:"Eternal Stamina",requires:function(e,a,r){return e.stamina<=Math.round(e.maxstamina/100*20)},execute:function(e,a,r){e.stamina+=2+.01*e.lvl,r.add(`[${e.username}] Archer Hercules activated **Eternal Stamina**!`)},cd:60}],this.EndlessEndurance={active:void 0,requires:function(e,a,r){return e.stamina>=Math.round(e.maxstamina/100*60)},boost:function(e,a,r){e.stamina+=.2,e.atk-=.5,r.add(`[${e.username}] Archer Hercules is on mode **Endless Endurance**!`)}},this.EndlessBarrier={active:void 0,requires:function(e,a,r){return e.stamina<=Math.round(e.maxstamina/100*60)},boost:function(e,a,r){e.stamina-=.1,a.atk-=a.atk+Math.round(a.atk/100*80),r.add(`[${e.username}] Archer Hercules is on mode **Endless Barrier**!`)}},this.modes=["EndlessEndurance","EndlessBarrier"],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=ArcherHercules;