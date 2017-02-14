import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Form,
  FormGroup,
  Button,
  LoadingOverlay
} from 'components/shared';
import { CreateGamePlayers } from 'components/games';
import { CreateGameActions as Actions } from 'actions/games';
import { createGameSelector, selectedPlayersSelector } from 'selectors/games';

class GamesCreate extends Component {
  static fetchData({ dispatch }) {
    return dispatch(Actions.getPlayers());
  }

  componentDidMount() {
    GamesCreate.fetchData(this.props);
  }

  render() {
    const { dispatch, data, selected, isSaving, isLoading } = this.props;

    return (
      <div className="create-game-container">
        <h1>CREATE GAME</h1>
        <LoadingOverlay isLoading={isLoading}>
          <Form>
            <FormGroup label="ADD PLAYERS:">
              <CreateGamePlayers players={data} onChange={(id, checked, index) => dispatch(Actions.changePlayer(index, checked))} />
            </FormGroup>
            <div className="buttons">
              <Link to="/games" className="button button-default">CANCEL</Link>
              <Button type="primary" isLoading={isSaving} loadingText="CREATING" onClick={() => dispatch(Actions.createGame(selected))}>CREATE</Button>
            </div>
          </Form>
        </LoadingOverlay>
      </div>
    );
  }
}

GamesCreate.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.array,
  selected: PropTypes.array,
  isSaving: PropTypes.bool,
  isLoading: PropTypes.bool
};

GamesCreate.defaultProps = {
  isSaving: false,
  isLoading: false
};

const mapStateToProps = state => {
  return {
    ...createGameSelector(state),
    selected: selectedPlayersSelector(state)
  };
};

export default connect(mapStateToProps)(GamesCreate);
