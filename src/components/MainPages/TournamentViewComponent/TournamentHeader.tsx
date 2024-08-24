// components/Header.tsx
import React from "react";

const Header: React.FC = () => (
  <div className="mt-20 justify-start items-center flex-col flex">
    <h1 className="radhiumz text-3xl mx-4 md:mx-0 md:text-4xl text-center uppercase text-white">
      Torneos de hoy, ayer y siempre
    </h1>
    <h2 className="sfRegular text-md md:text-xl text-white">
      Una mirada a nuestros más recientes torneos
    </h2>
  </div>
);

export default Header;