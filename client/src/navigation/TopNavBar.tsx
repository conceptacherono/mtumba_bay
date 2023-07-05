import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../utils";
import Logo from "/logo.jpg";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function TopNavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openUserMenu, setOpenUserMenu] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [userInfo, setUserInfo] = React.useState();
  const cart = useSelector((state: RootState) => state.product.cart);

  React.useEffect(() => {
    const closeMenuOnOutsideClickHandler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenUserMenu(false);
      }
    };

    document.addEventListener("mousedown", closeMenuOnOutsideClickHandler);
  }, []);

  const info = localStorage.getItem("user");
  React.useEffect(() => {
    if (info) {
      setUserInfo(JSON.parse(info));
    } else {
      setUserInfo(undefined);
    }
  }, [info]);

  const handleUserLogout = () => {
    localStorage.removeItem("user");
    setOpenUserMenu(false);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const Avatar = () => (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpenUserMenu((open) => !open)}
        type="button"
        className="inline-flex w-10 h-10 items-center justify-center gap-x-1.5 rounded-full bg-blue-400 text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-500"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <svg
          className="absolute w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        // ref={menuRef}
        className={`${
          openUserMenu ? "absolute" : "hidden"
        } right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1">
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            Account settings
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-1"
          >
            Support
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-2"
          >
            License
          </a>
          <button
            type="button"
            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
            onClick={handleUserLogout}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLinks.map((link) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          key={link.title}
        >
          <Link
            to={link.href}
            className="flex items-center text-gray-800 hover:text-gray-900"
          >
            {link.title}
          </Link>
        </Typography>
      ))}
    </ul>
  );
  return (
    <>
      <Navbar className="sticky inset-0 z-20 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 backdrop-filter backdrop-blur">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} alt="app logo" className="h-12 rounded-full" />
            <Typography className="mr-4 cursor-pointer py-1.5 font-stylish font-semibold text-lg text-gray-900">
              Mtumba Bay
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* Todo:: UPDATE THIS TO ONLY SHOW IF A USER IS LOGGED IN */}
            {/* cart icon and items quantity display */}
            <Link to={"/cart"} className="relative cursor-pointer">
              <BsCart size={24} className="text-primary hover:text-brown" />
              {cart.length > 0 && (
                <div className="absolute bottom-3 left-4 bg-primary p-1 h-5 w-5 rounded-full flex items-center justify-center">
                  <p className="text-xs">{cart.length}</p>
                </div>
              )}
            </Link>
            {/* End of cart display */}
            {userInfo ? (
              <>
                <Avatar />
              </>
            ) : (
              <Link to={"/auth/login"}>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block border border-solid rounded-md transition-all hover:border-blue-500"
                >
                  <span className="text-black">Login & Register</span>
                </Button>
              </Link>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {userInfo ? (
            <>
              <Avatar />
            </>
          ) : (
            <Link to={"/auth/login"}>
              <Button
                variant="gradient"
                size="sm"
                className="lg:inline-block border border-solid rounded-md transition-all hover:border-blue-500"
              >
                <span className="text-black">Signup / Login</span>
              </Button>
            </Link>
          )}
        </Collapse>
      </Navbar>
    </>
  );
}
