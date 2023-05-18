import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';

const FeaturedItem = (props) => {
    const { item } = props;
    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
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
            <FeaturedItem
                item={featBeer}
                isLoading={beers.isLoading}
                errMess={beers.errMess}
            />
            <FeaturedItem
                item={featBrewery}
                isLoading={breweries.isLoading}
                errMess={breweries.errMess}
            />
            <FeaturedItem
                item={featEvent}
                isLoading={events.isLoading}
                errMess={events.errMess}
            />
        </ScrollView>
    );
};

export default HomeScreen;