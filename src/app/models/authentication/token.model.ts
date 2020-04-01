export interface DecodedAccessToken {
  email: string;
  username: string;
  _id: string;
  iat: number;
  exp: number;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
