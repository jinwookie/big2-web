import { PropTypes } from 'react';
import {
  TableRow,
  TableColumn,
  TextBox,
  Button,
  Icon
} from 'components/shared';

const EditGameInputRow = ({ scores, onChange, onAdd }) =>
  <TableRow>
    {
      scores.map((score, index) =>
        <TableColumn key={index}>
          <TextBox type="number" value={score.score} onUpdate={text => onChange(score.id, text, index)} />
        </TableColumn>
      )
    }
    <TableColumn type="buttons"><Button type="icon" onClick={() => onAdd()}><Icon type="plus" /></Button></TableColumn>
  </TableRow>;

EditGameInputRow.propTypes = {
  scores: PropTypes.array,
  onChange: PropTypes.func,
  onAdd: PropTypes.func
};

export default EditGameInputRow;
