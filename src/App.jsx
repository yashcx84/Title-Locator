import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data/data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="myContainer">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchResults.length > 0 && (
          <div className="dataContainer">
            {searchResults.map(item => (
              <div key={item.title} className="dataCard">
                <p>{item.title}</p>
                <p>{item.data.director}</p>
                <p>{item.data.year}</p>
                <p>{item.data.genre.join(', ')}</p>
                <p>{item.data.plot}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
