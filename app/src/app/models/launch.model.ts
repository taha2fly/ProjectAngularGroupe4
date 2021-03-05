class Rocket {
	rocket_name: string;
}

class Links {
	mission_patch: string | null;
}

export class Launch {
	flight_number: number;
	mission_name: string;
	mission_id: string[];
	launch_year: string;
	launch_date_utc: string;
	rocket: Rocket;
	links: Links;
	details: string | null;
}
