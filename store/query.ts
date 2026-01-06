import { create } from "zustand";

interface Actions {
  setQuery: (data: { [key: string]: any }) => void,
}
interface State {
  query: { [key: string]: any }
}

export const useQueryStore = create<State & Actions>(set => ({
  query: {},
  setQuery(query) {
    set((state) => ({ ...state, query: { ...state.query, ...query } }))
  }

}))