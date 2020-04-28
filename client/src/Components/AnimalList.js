import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingImage from '../Images/gone-fetching.png';
import axios from 'axios';
import Cards from './Cards';
import Loader from '../Images/bone-loading.png';

const AnimalList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/pets/${type}`).then(res => {
      setPets(res.data);
      setLoading(false);
    });
  }, [type]); // refetching everytime type changes in the url

  return (
    <div>
      {loading ? (
        <div className="loadingContainer">
          <h1 className="loading">
            fetching <img id="loader" src={Loader} alt="loading image" />
          </h1>
        </div>
      ) : (
        <Cards pets={pets} />
      )}
    </div>
  );
};

export default AnimalList;
