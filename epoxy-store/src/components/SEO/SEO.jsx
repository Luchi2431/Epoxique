import {Helmet} from 'react-helmet-async';

const SEO = ({
    title,
    description,
    canonical,
    ogImage = 'og-default-image.jpg',
    ogType = 'website'
}) => {
    const siteName = 'Epoxique';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name='description' content={description}/>
            <link rel='canonical' href={canonical}/>

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
};






export default SEO;