import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { EditGameActions as Actions } from 'actions/games';
import * as GamesSelector from 'selectors/games';
import {
  Table,
  TableHeader,
  TableColumn,
  TableRow,
  TextBox,
  Button,
  Icon
} from 'components/shared';

class GamesEdit extends Component {
  static fetchData({ dispatch, params }) {
    return dispatch(Actions.getGame(params.id));
  }

  componentDidMount() {
    GamesEdit.fetchData(this.props);
  }

  render() {
    const { dispatch, players, games, scores, total, average, params } = this.props;

    return (
      <div>
        <Table>
          <TableHeader>
            {
              players.map((player, index) =>
                <TableColumn key={index}>{ player.firstname }</TableColumn>
              )
            }
            <TableColumn type="buttons"></TableColumn>
          </TableHeader>
          <TableRow>
            {
              total.map((player, index) =>
                <TableColumn key={index}>{ player.score }</TableColumn>
              )
            }
          </TableRow>
          <TableRow>
            {
              average.map((player, index) =>
                <TableColumn key={index}>{ player.average }</TableColumn>
              )
            }
          </TableRow>
          <TableRow>
            {
              scores.map((score, index) =>
                <TableColumn key={index}>
                  <TextBox type="number" value={score.score} onUpdate={text => dispatch(Actions.changeScore(score.id, text, index))} />
                </TableColumn>
              )
            }
            <TableColumn type="buttons"><Button type="icon" onClick={() => dispatch(Actions.addGame(params.id, scores))}><Icon type="plus" /></Button></TableColumn>
          </TableRow>
          {
            games.map((game, index) =>
              <TableRow key={index}>
                {
                  game.scores.map((score, scoreIndex) =>
                    <TableColumn key={scoreIndex}>{ score.score }</TableColumn>
                  )
                }
                <TableColumn type="buttons">
                  <Button type="icon" onClick={() => dispatch(Actions.deleteGame(params.id, game.id, index))}><Icon type="trash" /></Button>
                </TableColumn>
              </TableRow>
            )
          }
        </Table>
      </div>
    );
  }
}

GamesEdit.propTypes = {
  players: PropTypes.array,
  games: PropTypes.array,
  scores: PropTypes.array,
  total: PropTypes.array,
  average: PropTypes.array,
  dispatch: PropTypes.func,
  params: PropTypes.object
};

const mapStateToProps = state => {
  const edit = GamesSelector.editGameSelector(state);

  const { players, scores, isSaving, isLoading } = edit;

  return {
    players,
    scores,
    isSaving,
    isLoading,
    games: GamesSelector.gamesSelector(state),
    total: GamesSelector.totalSelector(state),
    average: GamesSelector.averageSelector(state)
  };
};

export default connect(mapStateToProps)(GamesEdit);
