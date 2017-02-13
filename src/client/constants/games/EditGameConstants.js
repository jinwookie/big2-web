import { createConstants, createAsyncConstants } from 'utils/constants';

export default createConstants([
  ...createAsyncConstants('GET'),
  ...createAsyncConstants('CREATE'),
  ...createAsyncConstants('DELETE'),
  'SCORE_CHANGE'
], 'GAMES_EDIT');
