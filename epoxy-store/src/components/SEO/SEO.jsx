import {Helmet} from 'react-helmet';

const SEO = ({title,description}) => {
    <Helmet>
        <title>{title} | Epoxy Stolovi</title>
        <meta name="description" content={description}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
    </Helmet>
};

export default SEO;