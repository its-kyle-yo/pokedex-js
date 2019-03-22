const pokeApi = `https://pokeapi.co/api/v2`

export const getListOfPokemon = async (next = '') => {
  // Is the URL for the next set defined? 
  // If so lets use that! Otherwise lets use the normal one
  let url = !!next ? next : `${pokeApi}/pokemon?limit=24`;

  // Make the request
  const response = await fetch(url);
  // Parse our data
  const data = await response.json();

  // Give it back to the requester
  return data;
}

export const getResource = async (url) => {
  // Get something from a specific resource
  const response = await fetch(url);
  // Parse the data
  const data = await response.json();
  // Give it back to the requester
  return data;
}