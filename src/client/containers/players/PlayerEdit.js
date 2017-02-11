import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { PlayerForm } from 'components/players';
import { PlayerFormActions as Actions } from 'actions/players';

class PlayerEdit extends Component {
  static fetchData({ dispatch, routes, params }) {
    if (routes[routes.length - 1].path === 'edit/:id')
      return dispatch(Actions.getPlayer(params.id));
    return Promise.resolve(dispatch(Actions.getNew()));
  }

  componentDidMount() {
    PlayerEdit.fetchData(this.props);
  }

  render() {
    const { dispatch, player, routes, params, isSaving } = this.props;

    const route = routes[routes.length - 1].path;
    return <PlayerForm
      route={route}
      player={player}
      isSaving={isSaving}
      onChange={updateProp => dispatch(Actions.change(updateProp))}
      onSave={() => dispatch(route === 'create' ? Actions.createPlayer(player) : Actions.updatePlayer(params.id, player))} />;
  }
}

PlayerEdit.propTypes = {
  dispatch: PropTypes.func,
  routes: PropTypes.array,
  params: PropTypes.object,
  player: PropTypes.object,
  isSaving: PropTypes.bool
};

function mapStateToProps(state) {
  const { players } = state;
  const { isLoading, isSaving, data: player } = players.form.toJS();

  return {
    isLoading,
    isSaving,
    player
  };
}

export default connect(mapStateToProps)(PlayerEdit);
