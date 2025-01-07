const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto p-1 md:p-4 ">
        <Logo src="https://placehold.co/100x50" />
      </div>
    </header>
  );
};

const Logo = (src) => {
  return (
    <div className="flex w-full h-full my-auto mx-auto">
      <img src={`${src}`}></img>
    </div>
  );
};

export default Header;
