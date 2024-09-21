export type RequestAuthentication = {
  email: string;
  password: string;
};

export type ResponseAuthentication = {
  errCode: string;
  message: string;
  token: string;
  rf: string;
  uid: string;
};
