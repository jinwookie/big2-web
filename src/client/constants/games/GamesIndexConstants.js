import { createConstants, createAsyncConstants } from 'utils/constants';

export default createConstants([
  ...createAsyncConstants('SESSION_GET'),
  ...createAsyncConstants('DELETE')
], 'GAMES_INDEX');
