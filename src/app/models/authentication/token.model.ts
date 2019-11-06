export interface DecodedToken {
  exp: number;
  iat: number;
}

export interface DecodedAccessToken extends DecodedToken {
  email: string;
  username: string;
  _id: string;
}

export interface EncodedTokens {
  accessToken: string;
  refreshToken: string;
}
