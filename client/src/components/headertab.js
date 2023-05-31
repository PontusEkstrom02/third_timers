import { Link } from "react-router-dom";

export default function header({role}){
    const handleLogout = () => {
        localStorage.removeItem('token');
      };

    if(role === "GUEST"){
        return(
            <header>
                <h1>Booksters website</h1>
                <div>
                    <small>Browsing as guest...</small>
                    <Link to="../">
                        <button>Sign in</button>
                    </Link>
                </div>
            </header>
        )
    }
    else if(role === "USER"){
        return(
            <header>
                <h1>Booksters website</h1>
                <div>
                    <small>Browsing as user {}</small>
                    <Link to="../">
                        <button onClick={handleLogout}>Sign out</button>
                    </Link>
                </div>
            </header>
        )
    }
    else if(role === "ADMIN"){
        return(
            <header>
                <h1>Booksters website</h1>
                <div>
                    <small>Browsing as admin {}</small>
                    <Link to="../">
                        <button onClick={handleLogout}>Sign out</button>
                    </Link>
                </div>
            </header>
        )
    }
    else {
       return(
        <header>
            <h1>Booksters website</h1>
        </header>
       ) 
    }
}