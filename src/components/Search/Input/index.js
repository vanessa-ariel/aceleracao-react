import React, { useState, useEffect } from 'react';
import './style.scss';

import { getCatalog } from '../../../services/catalog';

const Input = ({ device }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then((resp) => setCatalog(resp.data));
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    let results = [];

    if (searchTerm !== '') {
      results = catalog.filter((product) =>
        product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchTerm.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
      );
    }

    setSearchResults(results);
  }, [searchTerm, catalog]);

  return (
    <div className={`${device}SearchContainer`}>
      <label id='inputSearch' className={`${device}SearchContainer__inputSearch`}>
        <input type='text' placeholder='Pesquisar' value={searchTerm} onChange={handleChange} />
        <button>
          <i className='fas fa-search'></i>
        </button>
      </label>
      {searchResults.length > 0 && (
        <ul className='productsList'>
          {searchResults.map((item) => (
            <li key={item.code_color}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
