import { Link, useNavigate } from "react-router-dom"
import "./Navbar.scss"
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

const Navbar = () => {

    const messageRef = collection(db, "MyProfile");
    const [api, setApiData] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(messageRef, (snapshot) => {
            const newApi = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setApiData(newApi);
        });

        return unsubscribe;
    }, []);

    const nav = useNavigate();

    const handleClick = () => {
        nav("/")
        window.location.reload();
    };

    return (
        <div className='navbar-main'>
            <div className="nav-bramd ">
                <Link to="/" className="link nav-brand" onClick={handleClick}>  My Profile </Link>
            </div>
            <div className="nav-item mx-4">
                <Link to="/about/" className="link"> About</Link>
                <div className="line"></div></div>
            <div className="nav-item">
                <Link to="/contact/" className="link"> Contact</Link>
                <div className="line"></div>
            </div>

            {api.length === 0 ? null :
                <div style={{ color: "#FE2E64" }} className="ms-2">{api.length}</div>
            }
        </div>
    )
}

export default Navbar