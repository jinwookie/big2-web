import { PropTypes } from 'react';
import {
  TableHeader,
  TableColumn
} from 'components/shared';

const EditGamePlayersHeader = ({ players }) =>
  <TableHeader>
    {
      players.map((player, index) =>
        <TableColumn key={index}>{ player.firstname }</TableColumn>
      )
    }
    <TableColumn type="buttons"></TableColumn>
  </TableHeader>;

EditGamePlayersHeader.propTypes = {
  players: PropTypes.array
};

export default EditGamePlayersHeader;
