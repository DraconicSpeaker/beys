const bcworkshop = require("bcworkshop");

function rlreq(acted, victim, logger){
    return true;
}

function rluse(acted, victim, logger){
    if(acted.lvl >= 25){
        if(!acted.bey.logged){
            logger.add(`${acted.username} launched using **Flash Shoot**!`);
            acted.bey.logged = true;
        }
        acted.atk = Math.round((acted.atk/100)*110);
    }else if(acted.lvl >= 50){
        if(!acted.bey.logged){
            logger.add(`${acted.username} launched using **True Flash Shoot**!`);
            acted.bey.logged = true;
        }
        acted.atk = Math.round((acted.atk/100)*115);
    }else if(acted.lvl >= 75){
        if(!acted.bey.logged){
            logger.add(`${acted.username} launched usin **True Flash Rush Shoot**!`);
            acted.bey.logged = true;
        }
        acted.atk = Math.round((acted.atk/100)*120);
    }else if(acted.lvl == 100){
        if(!acted.bey.logged){
            logger.add(`${acted.username} launched using **Jet Shoot**!`);
            acted.bey.logged = true;
        }
        acted.atk = Math.round((acted.atk/100)*130);
    }else{
        if(!acted.bey.logged){
            logger.add(`${acted.username} launched using **Rush Shoot**!`);
            acted.bey.logged = true;
        }
        acted.atk = Math.round((acted.atk/100)*105);
    }
}

const Shoot = new bcworkshop.Passive("Shoot", rlreq, rluse);

function breq(acted, victim, logger){
    return !acted.bey.boostUsed && acted.lvl > 15;
}

function buse(acted, victim, logger){
    acted.bey.boostUsed = true;
    if(acted.lvl <= 50){
        acted.stability += 5;
        acted.stamina += 3;
    }else{
        acted.stability += 15;
        acted.stamina += 5;
    }
}

const Boost = new bcworkshop.Passive("Boost", breq, buse);

const VictoryValkyrie = new bcworkshop.Beyblade({name: "Victory Valkyrie", type: "Attack", imageLink: "https://static.wikia.nocookie.net/beyblade/images/2/2b/Beyblade_Valkyrie.png/revision/latest/scale-to-width-down/308?cb=20181218234925", aliases: ["Victory Valtryek"]})
.setDefaultSD("RIGHT")
.addProperty("logged", false)
.addProperty("boostUsed", false)
.attachPassive(Shoot)
.attachPassive(Boost);

module.exports = VictoryValkyrie;