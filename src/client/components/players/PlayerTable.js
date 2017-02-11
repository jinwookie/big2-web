import { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table, TableHeader, TableRow, TableColumn, Icon, Button } from 'components/shared';

const PlayerTable = ({
  items,
  onDelete
}) =>
  <Table>
    <TableHeader>
      <TableColumn type="icon"></TableColumn>
      <TableColumn canGrow>Name</TableColumn>
      <TableColumn type="buttons"></TableColumn>
    </TableHeader>
    {
      items.map((item, index) => (
        <TableRow key={item.id}>
          <TableColumn type="icon"><Link to={`/players/edit/${item.id}`}><Icon type="user" /></Link></TableColumn>
          <TableColumn canGrow>{item.firstname} {item.lastname}</TableColumn>
          <TableColumn type="buttons"><Button type="icon" onClick={() => onDelete(item.id, index)}><Icon type="trash" /></Button></TableColumn>
        </TableRow>
        )
      )
    }
  </Table>;

PlayerTable.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func
};

export default PlayerTable;
