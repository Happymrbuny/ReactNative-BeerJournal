import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

const DirectoryScreen = ({ navigation }) => {
    const beers = useSelector((state) => state.beers);

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