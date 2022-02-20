export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface ResponseData {
  info: Info;
  results: Character[];
}
export interface QueryParams {
  [key: string]: string | number | undefined;
  page?: string | number;
  name: string;
  species: string;
  status: 'all' | 'Alive' | 'Dead' | 'Unknown';
  gender: 'all' | 'female' | 'male' | 'genderless' | 'unknown';
  type: string;
}