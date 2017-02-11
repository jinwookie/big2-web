import { createConstants, createAsyncConstants } from 'utils/constants';

export default createConstants([
  ...createAsyncConstants('PLAYERS_GET'),
  ...createAsyncConstants('CREATE')
], 'GAMES_CREATE');
