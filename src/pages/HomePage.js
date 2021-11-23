import { Fragment } from 'react';
import AutoSlider from '../components/Home/AutoSlider';
import CategoryBlocks from '../components/Home/CategoryBlocks';
import NovelCategory from '../components/Home/NovelCategory';
import FeaturedNovels from '../components/Home/FeaturedNovels';
import Footer from '../components/Layout/Footer';

function HomePage(){
    return (
        <Fragment>
        <AutoSlider></AutoSlider>
        <CategoryBlocks></CategoryBlocks>
        <NovelCategory></NovelCategory>
        <FeaturedNovels></FeaturedNovels>
        <Footer></Footer>
        </Fragment>
    )
}

export default HomePage;