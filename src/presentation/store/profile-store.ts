import { create } from 'zustand';

export interface ProfileState { 
  name: string;
  email: string;

  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>((set,get) => ({
  name: 'John Doe',
  email: 'john-doe@google.com',
  //* set() es una función que nos permite cambiar el estado del store
  changeProfile: (name: string, email: string) => {
    //* get() es una función que nos permite obtener el estado actual del store(objeto completo)
    console.log(get());
    set({name, email});
  },
}));
