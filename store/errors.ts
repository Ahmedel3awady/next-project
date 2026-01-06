import { create } from "zustand";

interface Actions {
  setErrors: (data: { [key: string]: any }) => void;
  clearErrors: () => void;
}
interface State {
  errors: { [key: string]: any } | null;
}

export const useErrorsStore = create<State & Actions>((set) => ({
  errors: null,
  setErrors(serverErrors) {
    let errors: { [key: string]: { message: 'string' } } = {}
    for (const key in serverErrors) {
      errors[key] = { message: serverErrors[key] && serverErrors[key][0] }
    }
    set((state) => ({ ...state, errors }));
  },
  clearErrors() {
    set((state) => {
      const newState = { ...state, errors: null };
      return newState;
    });
  }
}));
