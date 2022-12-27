export interface IUserMetaData {
  code?: string;
  message?: string;
  payload?: IUserData[];
}

export interface IUserData {
  username?: string;
  password?: string;
  imageProfile?: string;
  address?: string;
  no_phone?: number;
}
