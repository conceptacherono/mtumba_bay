import { logoutUser } from "../../../api/auth";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const Logout = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
      //Handle successful logout here
      // console.log('Logged out successfully');
    } catch (error) {
      //Handle logout error here
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
