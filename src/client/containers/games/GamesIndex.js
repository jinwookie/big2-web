import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { GamesIndexActions as Actions } from 'actions/games';
import * as GamesSelector from 'selectors/games';
import { GamesIndexTable } from 'components/games';
import { LoadingOverlay } from 'components/shared';

class GamesIndex extends Component {
  static fetchData({ dispatch }) {
    return dispatch(Actions.getGames());
  }

  componentDidMount() {
    GamesIndex.fetchData(this.props);
  }

  render() {
    const { dispatch, games, isLoading } = this.props;
    return (
      <div>
        <header>
          <h1>GAMES</h1>
          <div>
            <Link to="/games/create" className="button button-default">START GAME</Link>
          </div>
        </header>
        <LoadingOverlay isLoading={isLoading}>
          <GamesIndexTable games={games} onDelete={(id, index) => dispatch(Actions.deleteSession(id, index))} />
        </LoadingOverlay>
      </div>
    );
  }
}

GamesIndex.propTypes = {
  dispatch: PropTypes.func,
  games: PropTypes.array,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => {
  const index = GamesSelector.indexGamesSelector(state);
  const { isLoading, data: games } = index;
  return {
    isLoading,
    games
  };
};

export default connect(mapStateToProps)(GamesIndex);
