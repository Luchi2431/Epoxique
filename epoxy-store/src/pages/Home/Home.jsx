import Hero from '../../components/Hero/Hero';
import PopularCategories from '../../components/PopularCategories/PopularCategories';
import HighlightedTables from '../../components/HighlightedTables/HighlightedTables';
import './Home.css';
import Filler1 from '../../components/Fillers/Filler1/Filler1';
import Filler2 from '../../components/Fillers/Filler2/Filler2';
import SEO from '../../components/SEO/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="Početna"
        description="Epoxique - Ručno radjeni epoksi stolovi. Jedinstveni dizajn za vaš prostor."
        canonical="https://epoxique.rs/"
        ogImage="https://epoxique.rs/logo2.svg"
      />
      <Hero />
      <Filler1 />
      <PopularCategories />
      <HighlightedTables />
      <Filler2 />
    </>
  );
};

export default Home;