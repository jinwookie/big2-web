import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { EditGameActions as Actions } from 'actions/games';
import * as GamesSelector from 'selectors/games';
import {
  Table,
  TableColumn,
  TableRow,
  Button,
  Icon,
  LoadingOverlay
} from 'components/shared';
import {
  EditGamePlayersHeader,
  EditGameTotalRow,
  EditGameAverageRow,
  EditGameInputRow
} from 'components/games';

class GamesEdit extends Component {
  static fetchData({ dispatch, params }) {
    return dispatch(Actions.getGame(params.id));
  }

  componentDidMount() {
    GamesEdit.fetchData(this.props);
  }

  render() {
    const { dispatch, players, games, scores, total, average, params, isEnding, isLoading } = this.props;

    return (
      <div>
        <header>
          <h1>GAME</h1>
          <div>
            <Button type="primary" isLoading={isEnding} loadingText="ENDING" onClick={() => dispatch(Actions.endGame(params.id))}>END GAME</Button>
          </div>
        </header>
        <LoadingOverlay isLoading={isLoading}>
          <Table>
            <EditGamePlayersHeader players={players} />
            <EditGameTotalRow total={total} />
            <EditGameAverageRow average={average} />
            <EditGameInputRow
              scores={scores}
              onChange={(id, score, index) => dispatch(Actions.changeScore(id, score, index))}
              onAdd={() => dispatch(Actions.addGame(params.id, scores))} />
            {
              games.map((game, index) =>
                <TableRow key={index}>
                  {
                    game.scores.map((score, scoreIndex) =>
                      <TableColumn key={scoreIndex}>{ score.score === 0 ? <strong>0</strong> : score.score }</TableColumn>
                    )
                  }
                  <TableColumn type="buttons">
                    <Button type="icon" onClick={() => dispatch(Actions.deleteGame(params.id, game.id, index))}><Icon type="trash" /></Button>
                  </TableColumn>
                </TableRow>
              )
            }
          </Table>
        </LoadingOverlay>
      </div>
    );
  }
}

GamesEdit.propTypes = {
  isEnding: PropTypes.bool,
  isLoading: PropTypes.bool,
  players: PropTypes.array,
  games: PropTypes.array,
  scores: PropTypes.array,
  total: PropTypes.array,
  average: PropTypes.array,
  dispatch: PropTypes.func,
  params: PropTypes.object
};

const mapStateToProps = (state) => {
  const edit = GamesSelector.editGameSelector(state);

  const { players, scores, isSaving, isLoading, isEnding } = edit;

  return {
    players,
    scores,
    isSaving,
    isLoading,
    isEnding,
    games: GamesSelector.gamesSelector(state),
    total: GamesSelector.totalSelector(state),
    average: GamesSelector.averageSelector(state),
  };
};

export default connect(mapStateToProps)(GamesEdit);
