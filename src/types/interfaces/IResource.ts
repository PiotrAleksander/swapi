export interface IPeopleResource {
  name: String;
  birth_year: String;
  eye_color: String;
  gender: String;
  hair_color: String;
  height: String;
  mass: String;
  skin_color: String;
  homeworld: String;
  films: IFilmResource[];
  species: ISpeciesResource[];
  starships: IStarshipResource[];
  vehicles: IVehicleResource[];
  url: String;
  created: String;
  edited: String;
}

export interface IStarshipResource {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: IFilmResource[];
  pilots: IPeopleResource[];
  url: string;
  created: string;
  edited: string;
}

interface IFilmResource {}
interface ISpeciesResource {}
interface IVehicleResource {}
