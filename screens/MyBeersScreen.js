import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Image, ListItem } from 'react-native-elements';
import Loading from '../components/LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const MyBeersScreen = ({ navigation }) => {
    const { beersArray, isLoading, errMess } = useSelector(
        (state) => state.beers
    );
    const myBeers = useSelector((state) => state.myBeers);

    const renderMyBeer = ({ item: beer }) => {
        return (
            <ListItem
                onPress={() =>
                    navigation.navigate('Directory', {
                        screen: 'BeerInfo',
                        params: { beer }
                    })
                }
            >
                <Image
                    source={{ uri: baseUrl + beer.image }}
                    style={{ width: 50, height: 50 }}
                    resizeMode='contain'
                />
                <ListItem.Content>
                    <ListItem.Title>{beer.name}</ListItem.Title>
                    <ListItem.Subtitle>{beer.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return (
            <View>
                <Text>{errMess}</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={beersArray.filter((beer) =>
                myBeers.includes(beer.id)
            )}
            renderItem={renderMyBeer}
            keyExtractor={(item) => item.id.toString()}
        />
    )
};

export default MyBeersScreen;