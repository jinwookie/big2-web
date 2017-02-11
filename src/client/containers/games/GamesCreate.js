import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Form,
  FormGroup,
  Button
} from 'components/shared';
import { CreateGamePlayers } from 'components/games';
import { CreateGameActions as Actions } from 'actions/games';

class GamesCreate extends Component {
  static fetchData({ dispatch }) {
    return dispatch(Actions.getPlayers());
  }

  componentDidMount() {
    GamesCreate.fetchData(this.props);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="create-game-container">
        <h1>CREATE GAME</h1>
        <Form>
          <FormGroup label="ADD PLAYERS:">
            <CreateGamePlayers players={data} />
          </FormGroup>
          <div className="buttons">
            <Link to="/games" className="button button-default">CANCEL</Link>
            <Button type="primary">CREATE</Button>
          </div>
        </Form>
      </div>
    );
  }
}

GamesCreate.propTypes = {
  data: PropTypes.array
};

const mapStateToProps = state => {
  const { games } = state;
  return {
    ...games.create.toJS()
  };
};

export default connect(mapStateToProps)(GamesCreate);
