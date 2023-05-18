import { useSelector } from 'react-redux';
import { FlatList, Text, View } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';

const DirectoryScreen = ({ navigation }) => {
    const beers = useSelector((state) => state.beers);

    if (beers.isLoading) {
        return (
            <Loading />
        );
    }
    if (beers.errMess) {
        return (
            <View>
                <Text>{beers.errMess}</Text>
            </View>
        );
    }

    const renderDirectoryItem = ({ item: beer }) => {
        return (
            <ListItem onPress={() => navigation.navigate('BeerInfo', { beer })}>
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
        );
    };
    return (
        <FlatList
            data={beers.beersArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;