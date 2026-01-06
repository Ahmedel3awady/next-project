import { $http } from "@/http";
import { create } from "zustand";

interface Actions {
  login: (data: { email: string; password: string }) => Promise<unknown>,
  logout: () => void,
}
interface State {
  token: string | null
}

export const useAuth = create<State & Actions>(set => ({
  token:  null,
  async login(data) {
    const res = await $http.post<{ data: { token: string } }>({ url: 'login', data })
    const { token } = res.data
    set(state => ({ ...state, token }))
    localStorage.setItem('token', token)
    return Promise.resolve()
  },
  async logout() {
    // await $http.post({ url: 'logout', data: {} })
    set(state => ({ ...state, token: null }))
    localStorage.removeItem('token')
  },
}))