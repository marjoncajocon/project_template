import { Link } from "react-router";

export default function _Index() {


    return (<>
        this is our homepage    

        <Link to={`/home/profile/about/${Math.random() * 100}`}>Go to About</Link>
    </>)
}