import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { episode_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${episode_id}`)
      .then((response) => {
        if (!response.ok) {
            throw new Error(`This is an HTTP Error: The Status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [episode_id]);

  return (
    <>
      {loading && <div>Data is loading, please wait...</div>}
      {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
      {data && (
        <>
          <h1>{data.title}</h1>
          <h1>{data.episode_id}</h1>
          <p>Directed by: {data.director}</p>
          <p>Produced by: {data.producer}</p>
          <p>Description: {data.opening_crawl}</p>

          <h2>Characters:</h2>
          <ul>
            {data.characters.map((characterUrl) => (
              <li key={characterUrl}>{characterUrl}</li>
            ))}
          </ul>

          <h2>Planets:</h2>
          <ul>
            {data.planets.map((planetUrl) => (
              <li key={planetUrl}>{planetUrl}</li>
            ))}
          </ul>

          <h2>Species:</h2>
          <ul>
            {data.species.map((speciesUrl) => (
              <li key={speciesUrl}>{speciesUrl}</li>
            ))}
          </ul>

          <h2>Starships:</h2>
          <ul>
            {data.starships.map((starshipUrl) => (
              <li key={starshipUrl}>{starshipUrl}</li>
            ))}
          </ul>

          <h2>Vehicles:</h2>
          <ul>
            {data.vehicles.map((vehicleUrl) => (
              <li key={vehicleUrl}>{vehicleUrl}</li>
            ))}
          </ul>
        </>
      )}

    </>
  );
}

export default MovieDetails;