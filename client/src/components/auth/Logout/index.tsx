import { logoutUser } from "../../../api/auth";

const Logout = () => {
    const handleLogout = async () => {
        try{
            await logoutUser();
            //Handle successful logout here
            console.log('Logged out successfully');
        } catch (error) {
            //Handle logout error here
            console.log(error);
        }
    };
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
};

export default Logout;
