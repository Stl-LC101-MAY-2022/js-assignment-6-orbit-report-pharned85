export class Satellite {

	name: string;
	type: string;
	operational: boolean;
	orbitType: string;
	launchDate: string;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.operational = operational;
		this.orbitType = orbitType;
		this.launchDate = launchDate;
   }
	
	isSpaceDebris(): boolean {
		return true;
   }

}

// TODO 3a: fix isSpaceDebris check
