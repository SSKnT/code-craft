const Header = () => {
  return (
    <header className="bg-white border-b-2">
      <div className="flex md:px-16 items-center">
        <Logo src="https://placehold.co/100x150" />
        <Nav />
        <Hire />
      </div>
    </header>
  );
};

const Logo = (src) => {
  return (
    <div className="flex h-full my-auto">
      <img src="https://placehold.co/150x40"></img>
    </div>
  );
};

const Nav = () => {
  return (
    // Desktop
    <nav className="hidden md:flex ml-16 items-center w-auto">
      <ul className="flex space-x-6 text-sm text-gray-700 ">
        <li className="relative flex py-6 border-b-[0.2rem] border-transparent hover:border-blue-500 hover:text-gray-500 group">
          Hire Talent
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-[1rem] mt-auto group-hover:rotate-180 transition-all ease-in"
          >
            <path
              fillRule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          {/* Dropdown Menu */}
          <div className="absolute left-0 top-full mt-[0.2rem] hidden group-hover:flex flex-col bg-white shadow-md w-80 py-2 transition-all duration-300 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100">
              Developers
            </a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100">
              Designers
            </a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100">
              Marketing Experts
            </a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100">
              SEO Experts
            </a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100">
              Product Managers
            </a>
            <div className="flex flex-row w-full text-gray-400 px-4 py-1 border-t-2">
              <p>Want to hire an entire team</p>
            </div>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100">
              Hire a Team
            </a>
          </div>
        </li>

        <li className="py-6 hover:text-gray-500 border-b-[0.2rem] border-transparent hover:border-blue-500">
          Consulting & Services
        </li>
        <li className="py-6 hover:text-gray-500 border-b-[0.2rem] border-transparent hover:border-blue-500">
          Clients
        </li>
        <li className="py-6 hover:text-gray-500 border-b-[0.2rem] border-transparent hover:border-blue-500">
          Blog
        </li>
        <li className="py-6 hover:text-gray-500 border-b-[0.2rem] border-transparent hover:border-blue-500">
          About Us
        </li>
      </ul>
    </nav>
  );
};

const Hire = () => {
  return (
    <div className="hidden lg:flex ml-auto w-auto h-full space-x-3 items-center">
      <button className="mx-auto text-md hover:text-green-600 transition-colors ease-in">
        Join as a freelancer
      </button>
      <button className="px-6 py-[0.3rem] text-[1rem] font-medium text-white bg-violet-600 hover:bg-violet-800 transition-colors ease-in rounded-[0.25rem]">
        Hire Top Talent
      </button>
    </div>
  );
};

export default Header;
