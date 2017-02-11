import { createConstants, createAsyncConstants } from 'utils/constants';

export default createConstants([
  'NEW',
  'CHANGE',
  ...createAsyncConstants('GET'),
  ...createAsyncConstants('SAVE')
], 'PLAYERS_FORM');
