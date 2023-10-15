import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase/setup";
import { useNavigate } from "react-router-dom";

class AuthService {
  async googleSignIn() {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.log(error);
    }
  }

  async logoutHandle() {
    try {
      await signOut(auth, googleAuthProvider);
      auth?.currentUser === null && this.navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }
}

export const authService = new AuthService();
export default AuthService;
