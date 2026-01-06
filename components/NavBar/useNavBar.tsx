import { useAuth } from "@/store/auth"


export default function useNavBar() {
  const authStore = useAuth()
  const logout = () => {
    authStore.logout()
  }
  return {
    logout
  }
}
