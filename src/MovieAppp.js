import React, { useEffect, useState } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';


const MovieApp2 = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP Error: The Status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.results);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <div>Data is loading, please wait...</div>}
      {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
      <ul className="ul">
        {data &&
          data.map((item) => {
            return (
              <li key={item.episode_id} className="Items">
                <div className="container">
                  <div className="sub_container">
                    <h2 className="title">{item.title}</h2>
                    <p className="date">{item.release_date}</p>
                    <p className="crawl">
                      {item.opening_crawl.split('\n').slice(0, 10).join('\n')}
                      ...
                    </p>
                    <hr></hr>
                    {/* <NavLink to={`/movies/${item.episode_id}`}>More Info</NavLink> */}
                    <NavLink to="/details">More Info</NavLink>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MovieApp2;