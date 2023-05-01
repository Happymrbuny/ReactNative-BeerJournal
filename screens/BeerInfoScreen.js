import RenderBeer from '../features/beers/RenderBeer';

const BeerInfoScreen = ({ route }) => {
    const { beer } = route.params;

    return <RenderBeer beer={beer} />;
};

export default BeerInfoScreen;