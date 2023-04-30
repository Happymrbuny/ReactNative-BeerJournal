import RenderBeer from '../features/beers/RenderBeer';

const BeerInfoScreen = (props) => {
    return <RenderBeer beer={props.beer} />;
};

export default BeerInfoScreen;