"use client";
import React, { useContext, useEffect } from "react";
import MenuDropDaw from "./MenuDropDaw/MenuDropDaw";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { IMenuReusableData } from "./UserMenuReusableInterfaces";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/context/GlobalContext";
import { deletCurrentUser } from "@/helpers/localDataManagment";
import { useCookies } from "react-cookie";

const UserMenuReusable: React.FC<IMenuReusableData> = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const [menuStatus, setMenuStatus] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["userSignIn"]);

  const navigate = usePathname();
  const router = useRouter();

  async function handlerLogOut() {
    removeCookie("userSignIn");
    setCurrentUser(null);
    await deletCurrentUser();
    router.push("/login");
  }

  useEffect(() => {
    setMenuStatus(false);
  }, [navigate]);

  return (
    <div className=" flex justify-center gap-5 h-fit">
      <button type="button" className="rounded-[50%]" onClick={() => setMenuStatus(!menuStatus)}>
        <UserCircleIcon className={`w-[40px] h-auto ${menuStatus ? "text-lime" : "text-white"}`} />
      </button>
      <MenuDropDaw menuStatus={menuStatus} handlerLogOut={handlerLogOut} />
    </div>
  );
};

export default UserMenuReusable;
