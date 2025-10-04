import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-100 p-6 text-center text-gray-700">
    &copy; {new Date().getFullYear()} ALX Listing App. All rights reserved.
  </footer>
);

export default Footer;
