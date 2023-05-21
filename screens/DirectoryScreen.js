import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, Text, View } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import { Picker } from '@react-native-picker/picker';

const DirectoryScreen = ({ navigation }) => {
    const beers = useSelector((state) => state.beers);
    const [selectedStyle, setSelectedStyle] = useState('');
    const [beerStyleOptions, setBeerStyleOptions] = useState([]);

    useEffect(() => {
        const styles = beers.beersArray.map((beer) => beer.style);
        const uniqueStyles = [...new Set(styles)];
        setBeerStyleOptions(uniqueStyles);
    }, [beers.beersArray]);


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

    const filteredBeers = selectedStyle
        ? beers.beersArray.filter((beer) => beer.style === selectedStyle)
        : beers.beersArray;

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4ae00' }}>
                <Text style={{ flex: 1, marginLeft: 10 }}>Beer Style:</Text>
                <View style={{ flex: 3 }}>
                    <Picker
                        selectedValue={selectedStyle}
                        onValueChange={(itemValue) => setSelectedStyle(itemValue)}
                    >
                        <Picker.Item label='All Styles' value='' />
                        {beerStyleOptions.map((style) => (
                            <Picker.Item label={style} value={style} key={style} />
                        ))}
                    </Picker>
                </View>
            </View>
            <FlatList
                data={filteredBeers}
                renderItem={renderDirectoryItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default DirectoryScreen;