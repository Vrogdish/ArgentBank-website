export interface ProfilDatas {
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  updateAt: string;
  userName: string;
}

export interface ProfilState {
  profilState: ProfilDatas
  ;
}

export interface AuthState {
  authState: {
    isLogged: boolean;
    token: string;
  };
}
