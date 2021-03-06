var base = require("base");

var logic = function(creep){
	var result  = 0,
	    sources = creep.room.find(FIND_SOURCES),
	    spawn   = base.getBase();
	    
	var get_energy = function(){
        result = spawn.transferEnergy(creep);
        if(result == ERR_NOT_IN_RANGE){
            creep.moveTo(spawn);
        }
	};
	
	var build_sites = function(){
	    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		
		if(targets.length <= 0) 
			return;
		
		result = creep.build(targets[0]);
		
		if(result == ERR_NOT_IN_RANGE){
			creep.moveTo(targets[0]);					
		}
	};


	if(creep.carry.energy == 0) {
		get_energy()
	}else{
		build_sites();
	}
};

module.exports.logic = logic;
