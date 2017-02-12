import { createConstants, createAsyncConstants } from 'utils/constants';

export default createConstants([
  ...createAsyncConstants('GET'),
  ...createAsyncConstants('CREATE'),
  'SCORE_CHANGE'
], 'GAMES_EDIT');
