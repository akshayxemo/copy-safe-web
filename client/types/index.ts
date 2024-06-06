export interface userCredential {
  email: string;
  password: string;
}

export interface userRegisterCredential {
  name: string;
  email: string;
  password?: string;
  authId?: string;
  image?: string;
}
