import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import React from "react";

const NavBarComponent: React.FC = () => {
  return (
    <nav className="flex gap-8 mt-8 h-[64px] w-[90%] bg-transparent justify-center bg-opacity-80 items-center rounded-2xl">
      <NavigateButton
        href="/"
        className="px-5 py-2 text-gray-300 rounded h-fit w-fit bg-lime-950 hover:bg-lime-900">
        INICIO
      </NavigateButton>
      <NavigateButton
        href="#"
        className="px-5 py-2 text-gray-300 rounded h-fit w-fit bg-lime-950 hover:bg-lime-900">
        TORNEOS
      </NavigateButton>
      <NavigateButton
        href="#"
        className="px-5 py-2 text-gray-300 rounded h-fit w-fit bg-lime-950 hover:bg-lime-900">
        NOTICIAS
      </NavigateButton>
      <NavigateButton
        href="/register"
        className="px-5 py-2 text-gray-300 rounded h-fit w-fit bg-lime-950 hover:bg-lime-900">
        CREAR CUENTA
      </NavigateButton>
      <NavigateButton
        href="/login"
        className="px-5 py-2 text-gray-300 rounded h-fit w-fit bg-lime-950 hover:bg-lime-900">
        INGRESAR
      </NavigateButton>
    </nav>
  );
};

export default NavBarComponent;
