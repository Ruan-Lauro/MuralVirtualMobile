export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  ChooseOne: { NewUser?: { 
    name: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }};
  Login: undefined;
  First: undefined;
  CodGroup: undefined;
  ChooseCategory: { groupChoose?: { 
    id: string;
    name: string;
    created_at: Date;
    imgGroup: string;
    groupCode: number;
    userId: string;
  }};
  InforGroupMember:  { groupChoose?: { 
    id: string;
    name: string;
    created_at: Date;
    imgGroup: string;
    groupCode: number;
    userId: string;
  }};
  Group: undefined;
  Mural: undefined;
  SeeMurals: undefined;
  ChooseGroup: undefined;
};