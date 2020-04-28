import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';


const AdoptMe = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('/api/animals').then(res => setPets(res.data));
  }, []);


  return <Cards pets={pets} />
};

export default AdoptMe;
