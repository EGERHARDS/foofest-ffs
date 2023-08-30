const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo bg-indigo-600 border-radius-32 flex w-auto h-32 justify-center">
        <img src="/logo-foo.png" alt="logo"/>
      </div>
      <div className="links flex flex-col justify-center ">
        <button className="flex text-white text-6xl text-left justify-start font-semibold pt-4 bg-transparent hover:text-indigo-600 transition-colors duration-300 w-full text-center mb-0">
          <a href="/">Home</a>
        </button>

        <button className="flex text-white text-6xl justify-center font-semibold bg-transparent hover:text-indigo-600 transition-colors duration-300 w-full text-center mb-0">
          <a href="/">Tickets</a>
        </button>
        <button className="flex text-white text-6xl text-right justify-end font-semibold bg-transparent hover:text-indigo-600 transition-colors duration-300 w-full text-center mb-0">
          <a href="/">Contact</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
