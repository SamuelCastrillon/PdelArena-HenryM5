import Cookies from "js-cookie";
import { IUserGooglePut, IUserLogin } from "@/interfaces/RequestInterfaces";

const googleUserKey = "googleUser";
const regularUserKey = "regularUser";

export function useUserCookies() {
  // Guardar el usuario de Google en la cookie
  const saveGoogleUser = (newGoogleUser: IUserGooglePut) => {
    const dataToString = JSON.stringify(newGoogleUser);
    Cookies.set(googleUserKey, dataToString, { expires: 7 }); // expira en 7 días
  };

  // Guardar un usuario regular en la cookie
  const saveRegularUser = (newRegularUser: IUserLogin) => {
    const dataToString = JSON.stringify(newRegularUser);
    Cookies.set(regularUserKey, dataToString, { expires: 7 }); // expira en 7 días
  };

  // Obtener el usuario de Google desde la cookie
  const getGoogleUser = (): IUserGooglePut | null => {
    const googleUser = Cookies.get(googleUserKey);
    if (googleUser) {
      try {
        return JSON.parse(googleUser);
      } catch (error) {
        console.error("Error parsing Google User from cookies:", error);
        return null;
      }
    } else {
      return null;
    }
  };

  // Borrar el usuario de Google de la cookie
  const deleteGoogleUser = () => {
    Cookies.remove(googleUserKey);
  };

  // Borrar el usuario regular de la cookie
  const deleteRegularUser = () => {
    Cookies.remove(regularUserKey);
  };

  return {
    saveGoogleUser,
    saveRegularUser,
    getGoogleUser,
    deleteRegularUser,
    deleteGoogleUser,
  };
}