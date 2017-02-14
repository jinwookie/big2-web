import { createConstants, createAsyncConstants } from 'utils/constants';

export default createConstants([
  ...createAsyncConstants('GET')
], 'DASHBOARD');
