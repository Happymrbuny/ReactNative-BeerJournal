import { ScrollView, Text, View, StyleSheet } from 'react-native';
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
            <Card containerStyle={{ padding: 0, height: 250 }}>
                <Card.Title style={{ fontSize: 20, paddingTop: 10 }}>{item.name}</Card.Title>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Card.Image
                            source={{ uri: baseUrl + item.image }}
                            style={styles.featuredImage}
                        />
                    </View>
                    <View style={styles.featuredText}>
                        <Text style={{ fontSize: 15 }}>
                            {item.description}
                        </Text>
                    </View>
                </View>
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

const styles = StyleSheet.create({
    featuredImage: {
        margin: 10,
        height: 175,
        resizeMode: 'contain'
    },
    featuredText: {
        flex: 2,
        borderWidth: .5,
        margin: 20,
        padding: 20
    }
})

export default HomeScreen;