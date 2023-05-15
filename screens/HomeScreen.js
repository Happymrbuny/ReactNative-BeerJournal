import { ScrollView, Text, View } from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-elements';
import { BEERS } from '../shared/BEERS';
import { BREWERIES } from '../shared/BREWERIES';
import { EVENTS } from '../shared/EVENTS';

const FeaturedItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={item.image}>
                    <View>
                        <Text
                            style={{
                                color: 'black',
                                backgroundColor: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        );
    }
    return <View />;
};

const HomeScreen = () => {
    const [beers, setBeers] = useState(BEERS);
    const [breweries, setBreweries] = useState(BREWERIES);
    const [events, setEvents] = useState(EVENTS);


    const featBeer = beers.find((item) => item.featured);
    const featBrewery = breweries.find((item) => item.featured);
    const featEvent = events.find((item) => item.featured);

    return (
        <ScrollView>
            <FeaturedItem item={featBeer} />
            <FeaturedItem item={featBrewery} />
            <FeaturedItem item={featEvent} />
        </ScrollView>
    );
};

export default HomeScreen;