import {IUserMetaData} from '../../../appTypes/sample.type';
import {APIClient} from '../../../utils/api';
import {useQuery} from 'react-query';
import {USER_DATA} from '../../../constants/reactQuery';

interface IOptions {
  enabled: boolean;
}
//SAMPLE HIT API USE WITHOUT HEADER
export const fetchUserData = async (): Promise<Array<IUserMetaData>> => {
  try {
    const response: any = await APIClient.get('user/userdata');
    return response?.payload;
  } catch (err: any) {
    console.error(
      'services/User/Queries/fetchUserData',
      'fetchUserData',
      err.data || err.response?.data || err.response || err,
    );

    throw err;
  }
};

const useFetchSample = (options: IOptions = {enabled: true}) => {
  return useQuery<Array<IUserMetaData>, Error>(
    USER_DATA,
    async () => {
      const response = await fetchUserData();
      if (!response) {
        throw new Error('fetchUserData failed');
      }

      return response;
    },
    {...options},
  );
};

export default useFetchSample;
