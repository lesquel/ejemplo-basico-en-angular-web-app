export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string; // URL
  episode: Episode[]; // Array of episode URLs
  url: string; // Character URL
  created: string; // ISO date string
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharactersResponse {
  results: Character[];
  info: Info;
}
