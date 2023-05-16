import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const FeaturedItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={{ uri: baseUrl + item.image }}>
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
    const beers = useSelector((state) => state.beers);
    const breweries = useSelector((state) => state.breweries);
    const events = useSelector((state) => state.events);

    const featBeer = beers.beersArray.find((item) => item.featured);
    const featBrewery = breweries.breweriesArray.find((item) => item.featured);
    const featEvent = events.eventsArray.find((item) => item.featured);

    return (
        <ScrollView>
            <FeaturedItem item={featBeer} />
            <FeaturedItem item={featBrewery} />
            <FeaturedItem item={featEvent} />
        </ScrollView>
    );
};

export default HomeScreen;