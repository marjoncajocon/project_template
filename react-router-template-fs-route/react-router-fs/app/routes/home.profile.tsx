import { Outlet, useNavigate, useNavigation } from "react-router";

export default function Profile() {
    const navigate = useNavigate();
    
    return (
        
        <>This is profile page
        
        <button onClick={() => {

            navigate('/');
        }}>
            Back to the index page
        </button>

        <Outlet />
        </>
        
    )
}