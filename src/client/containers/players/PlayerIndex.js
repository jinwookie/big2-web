import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PlayerTable } from 'components/players';
import { PlayerIndexActions as Actions } from 'actions/players';
import { LoadingOverlay } from 'components/shared';
import * as PlayersSelector from 'selectors/players';

class PlayerIndex extends Component {
  static fetchData({ dispatch }) {
    return dispatch(Actions.getPlayers());
  }

  componentDidMount() {
    PlayerIndex.fetchData(this.props);
  }

  render() {
    const { dispatch, index } = this.props;

    const { data: players, isLoading } = index;

    return (
      <LoadingOverlay isLoading={isLoading} showChildren={true}>
        <div>
          <header>
            <h1>PLAYERS</h1>
            <div>
              <Link className="button button-default" to="/players/create">CREATE</Link>
            </div>
          </header>
          <PlayerTable items={players} onDelete={(id, index) => dispatch(Actions.deletePlayer(id, index))} />
        </div>
      </LoadingOverlay>
    );
  }
}

function mapStateToProps(state) {
  return {
    index: PlayersSelector.playerIndexSelector(state)
  };
}

PlayerIndex.propTypes = {
  index: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(PlayerIndex);
