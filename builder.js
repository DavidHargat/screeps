var logic = function(creep){
	var result  = 0,
	    sources = creep.room.find(FIND_SOURCES),
	    base    = Game.spawns.Spawn1;
	    
	var get_energy = function(){
        result = base.transferEnergy(creep);
        if(result == ERR_NOT_IN_RANGE){
            creep.moveTo(base);
        }
	};
	
	var build_sites = function(){
	    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		
		if(targets.length <= 0) return;
		
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
