import { Component } from 'react';
import { Link } from 'react-router';

class GamesIndex extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>GAMES</h1>
          <div>
            <Link to="/games/create" className="button button-default">START GAME</Link>
          </div>
        </header>
      </div>
    );
  }
}

export default GamesIndex;
