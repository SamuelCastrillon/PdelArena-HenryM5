import { IUserLogin } from "@/interfaces/RequestInterfaces";

const userKeyDefiny = "dataCurrentUser";
export function saveCurrentUser(newCurrentUser: IUserLogin): void {
  const dataToSreing = JSON.stringify(newCurrentUser);
  localStorage.setItem(userKeyDefiny, dataToSreing);
}

export function getCurrentUser(): IUserLogin | null {
  const getData = localStorage.getItem(userKeyDefiny);
  if (getData) return JSON.parse(getData);
  else {
    console.error("Undefine Key");
    return null;
  }
}

export function deletCurrentUser(): void {
  localStorage.removeItem(userKeyDefiny);
}
