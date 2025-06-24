import { Character, CharactersResponse } from '../models/character.model';

export const characterAdapter = (character: any): Character => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  location: character.location,
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
});

export const charactersResponseAdapter = (
  characters: any
): CharactersResponse => ({
  results: characters.results.map(characterAdapter),
  info: {
    count: characters.info.count,
    pages: characters.info.pages,
    next: characters.info.next,
    prev: characters.info.prev,
  },
});
