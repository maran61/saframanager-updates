import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-safra-dark py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center">
          <img
            src="/assets/logo_dark.png"
            alt="SafraManager Logo"
            className="h-32 w-auto mr-4"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
