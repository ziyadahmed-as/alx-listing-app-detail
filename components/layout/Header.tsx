import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">ALX Listings</div>
      <nav className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search properties..."
          className="border rounded px-2 py-1"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Sign In</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
