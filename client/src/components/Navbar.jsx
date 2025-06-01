import React from 'react';

const Navbar = () => {
  return (<>
    <div className="bg-violet-600 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">Taskify</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-800 cursor-pointer">Home</li>
          <li className="hover:text-gray-800 cursor-pointer">Todos</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
