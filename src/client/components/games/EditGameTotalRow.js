import { PropTypes } from 'react';
import {
  TableRow,
  TableColumn
} from 'components/shared';

const EditGameTotalRow = ({ total }) =>
  <TableRow>
    {
      total.map((player, index) =>
        <TableColumn key={index}>{ player.score }</TableColumn>
      )
    }
  </TableRow>;

EditGameTotalRow.propTypes = {
  total: PropTypes.array
};

export default EditGameTotalRow;
