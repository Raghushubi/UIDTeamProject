import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Indian Railways</a>
        </nav>
      </header>

      <div className="container mt-5">
        <h1>Book Your Train Tickets</h1>
        <form id="searchForm">
          <div className="form-group">
            <label htmlFor="fromStation">From:</label>
            <input list="fromStations" id="fromStation" name="fromStation" className="form-control" autoComplete="off" />
            <datalist id="fromStations"></datalist>
          </div>
          <div className="form-group">
            <label htmlFor="toStation">To:</label>
            <input list="toStations" id="toStation" name="toStation" className="form-control" autoComplete="off" />
            <datalist id="toStations"></datalist>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" className="form-control" id="date" />
          </div>
          <button type="submit" className="btn btn-primary">Search Trains</button>
        </form>
      </div>

      <footer className="mt-5">
        <div className="container">
          <p className="text-center">&copy; 2024 Indian Railways</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
