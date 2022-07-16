import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './Search';
// export const Navbar = ({ setDarkTheme, darkTheme }) => (
export const Navbar = () => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link to="/">
        <p>
          <img className="max-w-full h-auto" style={{ maxWidth: '200px', maxHeight: '50px' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
        </p>
      </Link>
      {/* <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{darkTheme ? '💡 Light' : '🌙 Dark'}</button> */}
    </div>
    <Search />

  </div>
);
