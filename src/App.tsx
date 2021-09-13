import React, { useState } from 'react';

import JSONDATA from './db/Data.json';

import './App.css';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <input type="text" name="search" id="search" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val
        } else if (val.author.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>
              {val.author}
            </p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
