import DarkModeToggle from "@/components/darkModeToggle";
import FullScreenDrawer from "@/components/FullScreenDrawer";

const Header = () => {
  return (
    <header className="absolute w-full min-h-14 shadow-sm bg-white dark:bg-black border-b-2 dark:border-b-[1px] dark:border-white dark:border-opacity-10">
      <div className="flex px-2 md:px-10 lg:px-16 min-h-14 items-center">
        <Logo src="https://placehold.co/150x40" />
        <Nav />
        <Hire />
        <FullScreenDrawer />
        <div className="flex pl-2 lg:ml-0 lg:pl-4 border-l-[1px] border-black border-opacity-20 dark:border-white dark:border-opacity-20 h-full justify-center">
          <div className="flex p-2 justify-center rounded-3xl hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-20 transition-all ease-in-out">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

const Logo = ({ src }) => {
  return (
    <div className="flex h-full my-auto items-center justify-center">
      <img src={src} width={150} height={40} alt="Logo" />
    </div>
  );
};

const Nav = () => {
  const list = [
    { name: "Developers", link: "#" },
    { name: "Designers", link: "#" },
    { name: "Marketing Experts", link: "#" },
    { name: "SEO Experts", link: "#" },
    { name: "Product Managers", link: "#" },
  ];

  return (
    // Desktop
    <nav className="hidden lg:flex ml-16 items-center w-auto">
      <ul className="flex space-x-5 text-sm text-gray-700 dark:text-white ">
        <li className="relative flex py-6 border-b-[0.25rem] border-transparent dark:hover:text-white hover:text-gray-500 hover:border-violet-600 ease-in group">
          Hire Talent
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-[1rem] mt-auto group-hover:-rotate-180 transition-all ease-in"
          >
            <path
              fillRule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          {/* Dropdown Menu */}
          <div className="absolute left-0 top-full mt-[0.2rem] hidden group-hover:flex flex-col bg-white dark:bg-black border-[1px] dark:border-white dark:border-opacity-10 shadow-md w-80 py-2 transition-all duration-300 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
            {list.map((list, index) => {
              return (
                <a
                  key={index}
                  href={list.link}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-opacity-10"
                >
                  {list.name}
                </a>
              );
            })}
            <div className="flex flex-row w-full text-gray-400 px-4 py-1 border-t-[1px] border-opacity-40 ">
              <p>Want to hire an entire team</p>
            </div>
            <a
              href="#"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-opacity-10"
            >
              Hire a Team
            </a>
          </div>
        </li>

        <li className="py-6 hover:text-gray-500 border-b-[0.25rem] border-transparent dark:hover:text-white hover:border-violet-600">
          Consulting & Services
        </li>
        <li className="py-6 hover:text-gray-500 border-b-[0.25rem] border-transparent dark:hover:text-white hover:border-violet-600">
          Clients
        </li>
        <li className="py-6 hover:text-gray-500 border-b-[0.25rem] border-transparent dark:hover:text-white hover:border-violet-600">
          Blog
        </li>
        <li className="py-6 hover:text-gray-500 border-b-[0.25rem] border-transparent dark:hover:text-white hover:border-violet-600">
          About Us
        </li>
      </ul>
    </nav>
  );
};

const Hire = () => {
  return (
    <div className="hidden lg:flex ml-auto lg:mr-6 w-auto h-full space-x-4 items-center">
      <button className="mx-auto text-md dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors ease-in ">
        Join as a freelancer
      </button>
      <button className="px-6 py-[0.4rem] text-[1rem] font-medium text-white bg-violet-600 hover:bg-violet-800 transition-colors ease-in rounded-[0.25rem]">
        Hire Top Talent
      </button>
    </div>
  );
};

export default Header;
