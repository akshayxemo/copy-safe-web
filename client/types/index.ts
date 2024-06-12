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

export interface Chat {
  message: string;
  response: ResponseFrame[] | null;
}

export interface ResponseFrame {
  title: string;
  abstract: string;
  aclId?: string;
  corpusId?: string;
  citation?: string;
  year?: string;
  url?: string;
  matchScore: number;
}
