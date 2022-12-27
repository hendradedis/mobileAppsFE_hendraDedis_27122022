import {atom} from 'recoil';
import {DATA_SAMPLE} from '../../constants/recoils.const';

export const sampleAtom = atom<any>({
  key: DATA_SAMPLE,
  default: [],
});
