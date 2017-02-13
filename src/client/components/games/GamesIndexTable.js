import { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import {
  Table,
  TableHeader,
  TableRow,
  TableColumn,
  Button,
  Icon
} from 'components/shared';

const GamesIndexTable = ({
  games,
  onDelete
}) =>
  <Table>
    <TableHeader>
      <TableColumn>Start</TableColumn>
      <TableColumn>End</TableColumn>
      <TableColumn type="buttons"></TableColumn>
    </TableHeader>
    {
      games.map((game, index) =>
        <TableRow key={index}>
          <TableColumn>{moment(game.start).format('M/D/YYYY h:mm a z')}</TableColumn>
          <TableColumn>{game.end ? moment(game.end).format('M/D/YYYY h:mm a z') : ''}</TableColumn>
          <TableColumn type="buttons">
            <Link to={`/games/edit/${game.id}`}><Icon type="edit" /></Link>
            <Button type="icon" onClick={() => onDelete(game.id, index)}><Icon type="trash" /></Button>
          </TableColumn>
        </TableRow>
      )
    }
  </Table>;

GamesIndexTable.propTypes = {
  games: PropTypes.array,
  onDelete: PropTypes.func
};

export default GamesIndexTable;
