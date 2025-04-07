import {Link,useLocation} from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
    const Location = useLocation();
    const pathnames = Location.pathname.split("/").filter(x=>x);

    return (
        <div className="breadcrumbs">
            <Link to="/">Home</Link>
            {pathnames.map((name,index) => {
                const routeTo = `/${pathnames.slice(0,index+1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                //Format the name to be more readable
                const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

                return isLast ? (
                    <span key={name}>/ {formattedName}</span>
                ) : (
                    <span key={name}>
                        { ' /'}
                        <Link to={routeTo}>{formattedName}</Link>
                    </span>
                );
            })}

        </div>
    );

};

export default Breadcrumbs;