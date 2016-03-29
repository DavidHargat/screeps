var base = require("base");

var logic = function(creep){
	
	var target = findTarget();
	var spawn = base.getBase();

	if(target != false){
		healTarget(target);
	}else{
		creep.moveTo(spawn);
	}

};

module.exports.logic = logic;

