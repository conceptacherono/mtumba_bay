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
  const cart = useSelector((state: RootState) => state.product.cart);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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
            {/* TODO:: UPDATE THIS TO ONLY SHOW IF A USER IS LOGGED IN */}
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

            <Link to={"/auth/signup"}>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block border border-solid rounded-md transition-all hover:border-blue-500"
              >
                <span className="text-black">Login & Register</span>
              </Button>
            </Link>
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
          <Link to={"/auth/signup"}>
            <Button
              variant="gradient"
              size="sm"
              className="lg:inline-block border border-solid rounded-md transition-all hover:border-blue-500"
            >
              <span className="text-black">Signup / Login</span>
            </Button>
          </Link>
        </Collapse>
      </Navbar>
    </>
  );
}
