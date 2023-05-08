
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

// const NavBarItem = ({ title, classprops }) => (
//   <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
// );

function NavBarItem({ title, link }) {
  return (
    <li className="mr-6">
      {link ? (
        <a href={link} target = "_blank" rel="noopener noreferrer">{title}</a>
      ) : (
        <span>{title}</span>
      )}
    </li>
  );
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
  {[
    { title: "GitHub Repo", link: "https://github.com/hemanth-hem/transactionApp" },
    // { title: "Wallets" },
  ].map((item, index) => (
    <NavBarItem key={item.title + index} title={item.title} link={item.link} />
  ))}
</ul>
        {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li> */}
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {[
                { title: "GitHub Repo", link: "https://github.com/hemanth-hem/transactionApp" },
                // { title: "Wallets" },
              ].map((item, index) => (
                <NavBarItem key={item.title + index} title={item.title} link={item.link} />
              ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;