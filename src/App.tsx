import React from 'react';
import teams from './CollegeBasketballTeams.json';
import './App.css';

interface Team {
  name: string;
  school: string;
  city: string;
  state: string;
}

const teamsData = teams as { teams: Team[] };

function TeamCard({ team }: { team: Team }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{team.school}</h5>
        <p className="card-text">Mascot: {team.name}</p>
        <p className="card-text">
          Location: {team.city}, {team.state}
        </p>
      </div>
    </div>
  );
}

function TeamList({ teams }: { teams: Team[] }) {
  return (
    <div className="team-container">
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
}

function Welcome() {
  return <h1>NCAA College Basketball Teams</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="Header">
        <Welcome />
      </header>
      <TeamList teams={teamsData.teams} />
    </div>
  );
}

export default App;
