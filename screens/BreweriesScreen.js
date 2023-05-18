import { useSelector } from 'react-redux';
import { FlatList, Text, View } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';

const BreweriesScreen = () => {
    const breweries = useSelector((state) => state.breweries);

    if (breweries.isLoading) {
        return (
            <Loading />
        );
    }
    if (breweries.errMess) {
        return (
            <View>
                <Text>{breweries.errMess}</Text>
            </View>
        );
    }

    const renderBrewery = ({ item: brewery }) => {
        return (
            <ListItem>
                <Image
                    source={{ uri: baseUrl + brewery.image }}
                    style={{ width: 50, height: 50 }}
                    resizeMode='contain'
                />
                <ListItem.Content>
                    <ListItem.Title>{brewery.name}</ListItem.Title>
                    <ListItem.Subtitle>{brewery.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={breweries.breweriesArray}
            renderItem={renderBrewery}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default BreweriesScreen;