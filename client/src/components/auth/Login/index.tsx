import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      Login page
      <div className="flex gap-4">
        <span>New user?</span>
        <Link to={"/auth/login"} className="text-blue-500 underline">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
