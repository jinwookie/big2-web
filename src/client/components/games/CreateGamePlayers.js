import { PropTypes } from 'react';
import {
  CheckBox
} from 'components/shared';
import './CreateGamePlayers.css';

const CreateGamePlayers = ({
  players,
  onChange
}) =>
  <ul className="create-game-players-container">
    {
      players.map((player, index) =>
        <li key={index}><CheckBox isChecked={player.isSelected} onChange={checked => onChange(player.id, checked, index)}>{player.firstname} {player.lastname}</CheckBox></li>
      )
    }
  </ul>;

CreateGamePlayers.propTypes = {
  players: PropTypes.array,
  onChange: PropTypes.func
};

export default CreateGamePlayers;
