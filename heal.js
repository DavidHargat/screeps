var base = require("base");

var findHealTarget = function(creep){
	var spawn = base.getBase();
	
	var target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
		filter: function(obj){
			return 
				(obj != creep) &&
				(obj.hits < obj.hitsMax);
		}
	});

	return target;
};

var healTarget = function(creep, target){

	var result = creep.heal(target);
	
	if(result != OK){
		if(result == ERR_NOT_IN_RANGE){
			creep.moveTo(target);
		}else{
			creep.say("err?");
		}
	}
};

var logic = function(creep){
	
	var target = findHealTarget(creep);
	var spawn = base.getBase();

	if(target != null){
		healTarget(creep, target);
	}else{
		creep.moveTo(spawn);
	}

};

module.exports.logic = logic;

