import {Link,useLocation} from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
    const Location = useLocation();
    const pathnames = Location.pathname.split("/").filter(x=>x);

    // Add Serbian translations for path names
    const translations = {
        'home': 'Početna',
        'collection': 'Kolekcija',
        'contact': 'Kontakt',
        'cart': 'Korpa',
        'info': 'Informacije',
        'about': 'O nama',
        'reviews': 'Recenzije',
        'warranty': 'Garancija',
        'dimensions': 'Dimenzije',
        'core': 'Materijali',
        'product': 'Proizvod',
        'checkout': 'Plaćanje',
        'tableconfigurator': 'Narudzbina po meri',
        'gallery' : 'Galerija'
    };

    return (
        <div className="breadcrumbs">
            <Link to="/">{translations['home']}</Link>
            {pathnames.map((name,index) => {
                const routeTo = `/${pathnames.slice(0,index+1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                
                // Get Serbian translation or use capitalized original if translation not found
                const translatedName = translations[name.toLowerCase()] || 
                    name.charAt(0).toUpperCase() + name.slice(1);

                return isLast ? (
                    <span key={name}>/ {translatedName}</span>
                ) : (
                    <span key={name}>
                        {' /'}
                        <Link to={routeTo}>{translatedName}</Link>
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;