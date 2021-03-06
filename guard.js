var base = require("base");

var getThreat = function(targets){
    for(var i=0; i<targets.length; i++){
        var tar = targets[i];
        if(tar.owner != "Source Keeper")
            return tar;
    }
    return false;
};

var attackTarget = function(creep, target){
    if(creep.attack(target) == ERR_NOT_IN_RANGE) {
    	creep.moveTo(target);		
    }
};

var logic = function(creep){
    var targets = creep.room.find(FIND_HOSTILE_CREEPS);
    var enemy = getThreat(targets);
    var spawn = base.getBase();

    if(enemy != false){
        attackTarget(creep, enemy);  
    }else{
        creep.moveTo(spawn);
    }
};

module.exports.logic = logic;
 	
