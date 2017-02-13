import { PropTypes } from 'react';
import {
  TableRow,
  TableColumn
} from 'components/shared';

const EditGameAverageRow = ({ average }) =>
  <TableRow>
    {
      average.map((player, index) =>
        <TableColumn key={index}>{ player.average }</TableColumn>
      )
    }
  </TableRow>;

EditGameAverageRow.propTypes = {
  average: PropTypes.array
};

export default EditGameAverageRow;
