import { PropTypes } from 'react';
import { Link } from 'react-router';
import {
  Form,
  FormGroup,
  TextBox,
  Button
} from 'components/shared';

const PlayerForm = ({
  route,
  player,
  isSaving,
  onChange,
  onSave
}) => {
  const saveText = route === 'create' ? 'CREATE' : 'UPDATE';
  const savingText = route === 'create' ? 'CREATING' : 'UPDATING';

  return (
    <Form>
      <FormGroup label="FIRST NAME" htmlFor="firstname">
        <TextBox name="firstname" value={player.firstname} placeholder="First Name" onUpdate={firstname => onChange({ firstname })} />
      </FormGroup>
      <FormGroup label="LAST NAME" htmlFor="lastname">
        <TextBox name="lastname" value={player.lastname} placeholder="Last Name" onUpdate={lastname => onChange({ lastname })} />
      </FormGroup>
      <div className="buttons">
        <Link to="/players" className="button button-default">CANCEL</Link>
        <Button type="primary" loadingText={savingText} isLoading={isSaving} onClick={() => onSave(player)}>{ saveText }</Button>
      </div>
    </Form>
  );
};

PlayerForm.propTypes = {
  route: PropTypes.string,
  player: PropTypes.object,
  isSaving: PropTypes.bool,
  onChange: PropTypes.func,
  onSave: PropTypes.func
};

export default PlayerForm;
