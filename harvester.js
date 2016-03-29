var base = require("base");

var logic = function(creep){
	var result  = 0,
	    sources = creep.room.find(FIND_SOURCES),
	    full    = (creep.carry.energy >= creep.carryCapacity);
	
	var spawn = base.getBase();
	
	var do_harvest = function(){
	    // attempt to harvest
    	result = creep.harvest(sources[0]);
    	// its not in range, move there
    	if(result == ERR_NOT_IN_RANGE){
    	    creep.moveTo(sources[0]);
    	}
	};
	
	var do_transfer = function(){
	    // Attempt to put in base
    	result = creep.transfer(spawn, RESOURCE_ENERGY);
    	// its not in range, move there
    	if(result == ERR_NOT_IN_RANGE){
            creep.moveTo(spawn);
    	}
	};
	
	if(full){
	    do_transfer();
	}else{
	    do_harvest();
	}
};

module.exports.logic = logic;
