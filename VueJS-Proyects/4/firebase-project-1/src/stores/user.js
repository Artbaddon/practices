import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../firebaseConfig";
import router from "../routes";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
    loadingUser: false,
  }),
  actions: {
    currentUser() {
      return new Promise((resolve, reject) => {
        const unsubcribe = onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              this.userData = {
                email: user.email,
                uid: user.uid,
              };
            }
            resolve(user);
          },
          (e) => reject(e)
        );
        // Según la documentación, la función onAuthStateChanged() devuelve
        // La función de cancelación de suscripción para el observador
        unsubcribe();
      });
    },
    async registerUser(email, password) {
      try {
        this.loadingUser = true;
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = {
          email: user.email,
          uid: user.uid,
        };
        router.push("/");
        console.log(user);
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async loginUser(email, password) {
      try {
        this.loadingUser = true;
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = {
          email: user.email,
          uid: user.uid,
        };
        router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async logoutUser() {
      try {
        this.loadingUSer = true;
        await signOut(auth);
        this.userData = null;
        router.push("/login");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUSer = false;
      }
    },
  },
});
