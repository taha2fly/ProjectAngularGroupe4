class Rocket {
	rocket_name: string;
}

class Links {
	mission_patch: string | null;
}

export class Launch {
	flight_number: number;
	launch_year: string;
	rocket: Rocket;
	links: Links;
	details: string;
}
