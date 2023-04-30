import { useState } from 'react';
import { View } from 'react-native';
import { BEERS } from '../shared/BEERS';
import DirectoryScreen from './DirectoryScreen';
import BeerInfoScreen from './BeerInfoScreen';

const Main = () => {
    const [beers, setBeers] = useState(BEERS);
    const [selectedBeerId, setSelectedBeerId] = useState();

    return (
        <View style={{ flex: 1 }} >
            <DirectoryScreen
                beers={beers}
                onPress={(beerId) => setSelectedBeerId(beerId)}
            />
            <BeerInfoScreen
                beer={
                    beers.filter(
                        (beer) => beer.id === selectedBeerId
                    )[0]
                }
            />
        </View>
    );
};

export default Main;