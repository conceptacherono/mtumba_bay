import { Link } from "react-router-dom";

const SignUP = () => {
  return (
    <div>
      Signup page
      <div className="flex gap-4">
        <span>Already have an account?</span>
        <Link to={"/auth/login"} className="text-blue-500 underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUP;
