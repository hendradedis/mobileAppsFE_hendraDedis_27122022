import {atom} from 'recoil';
import {DATA_USER} from '../../constants/recoils.const';

export const dataUserAtom = atom<any>({
  key: DATA_USER,
  default: {},
});
