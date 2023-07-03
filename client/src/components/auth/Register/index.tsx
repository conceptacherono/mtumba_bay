import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { bool, object, ref, string } from "yup";
import { registerUser } from "../../../api/auth";
import { RegisterUserData } from "../../../interfaces/user";
import OAuthButtons from "../OAuthButtons";
import Logo from "/logo.jpg";
import RegisterImg from "/register.jpg";
import Loader from "../../Loader";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const Register: React.FC = () => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const validationSchema = object().shape({
    username: string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: string()
      .required("Email is required")
      .email("Invalid email address"),
    password: string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: string()
      .required("Confirm Password is required")
      .oneOf([ref("password"), ""], "Confirm Password does not match"),
    acceptTerms: bool().oneOf(
      [true],
      "Please review and accept terms & conditions"
    ),
  });

  React.useEffect(() => {
    const timeoutID = error
      ? setTimeout(() => {
          setError(false);
        }, 5000)
      : undefined;

    return () => clearTimeout(timeoutID);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<RegisterUserData> = async (data) => {
    setLoading(true);

    try {
      const userData = {
        username: data.username,
        email: data.email,
        password: data.password,
      };
      const response = await registerUser(userData);
      console.log("Registration successful!", response);
      navigate("/");
      // Add any success handling logic here, such as showing a success message or redirecting to another page
    } catch (error) {
      console.error("Registration failed!", error);
      setError(true);
      // Add error handling logic here, such as displaying an error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="hidden md:flex flex-1 min-h-screen relative rounded-tr-[80px] overflow-hidden">
        <img
          src={RegisterImg}
          alt="Register image"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute top-0 right-0 w-full h-full flex  justify-center items-center
             bg-gray-900/30 backdrop-brightness-75"
        />{" "}
      </div>
      <div className="flex-1 h-screen w-full flex flex-col justify-center px-24">
        <Link to={"/"} className="flex items-center gap-2 w-max h-min">
          <img src={Logo} alt="app logo" className="h-12 rounded-full" />
          <Typography className="mr-4 cursor-pointer py-1.5 font-stylish font-semibold text-lg text-gray-900">
            Mtumba Bay
          </Typography>
        </Link>
        <h1 className="bold text-2xl underline py-4">Create an account</h1>
        <OAuthButtons isLogin={false} />

        <div className="flex items-center justify-center">
          <h3 className="text-2xl text-gray-500 py-6">OR</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="input-wrapper flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              {...register("username")}
              className="input-field"
            />
            {errors.username && (
              <p className="form-error">{errors.username.message as string}</p>
            )}
          </div>

          <div className="input-wrapper flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              className="input-field"
            />
            {errors.email && (
              <p className="form-error">{errors.email.message as string}</p>
            )}
          </div>

          <div className="input-wrapper flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password")}
              className="input-field"
            />
            {errors.password && (
              <p className="form-error">{errors.password.message as string}</p>
            )}
          </div>

          <div className="input-wrapper flex flex-col">
            <label>Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword")}
              className={`input-field ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            <div className="form-error">{errors.confirmPassword?.message}</div>
          </div>

          <div className="input-wrapper flex items-center gap-4">
            <input
              type="checkbox"
              {...register("acceptTerms")}
              className={`form-check-input ${
                errors.acceptTerms ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              I have read and agree to the terms and conditions
            </label>
          </div>
          <div className="form-error">{errors.acceptTerms?.message}</div>

          {error && <div className="form-error">Something went wrong</div>}
          <div className="input-wrapper">
            <button
              type="submit"
              className="focus:shadow-outline flex items-center justify-center gap-4 rounded bg-primary py-4 mt-6 w-full text-xl text-white hover:bg-black focus:outline-none"
            >
              {loading ? "Processing..." : "Submit"}
              {loading && <Loader size={6} />}
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-6">
          <p>
            Already have an account?{" "}
            <span className="text-blue-500 border-b border-blue-600 hover:text-blue-600">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
