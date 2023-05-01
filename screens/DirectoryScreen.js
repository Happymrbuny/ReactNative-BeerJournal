import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, Image, ListItem } from 'react-native-elements';
import { BEERS } from '../shared/BEERS';

const DirectoryScreen = ({ navigation }) => {
    const [beers, setBeers] = useState(BEERS);

    const renderDirectoryItem = ({ item: beer }) => {
        return (
            <ListItem onPress={() => navigation.navigate('BeerInfo', { beer })}>
                <Image
                    source={beer.image}
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
            data={beers}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;