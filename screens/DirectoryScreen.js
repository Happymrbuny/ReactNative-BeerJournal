import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Image, ListItem, Button, Icon } from 'react-native-elements';
import { SwipeRow } from 'react-native-swipe-list-view';
import { toggleMyBeer } from '../features/myBeers/myBeersSlice';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import { Picker } from '@react-native-picker/picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyBeersScreen from './MyBeersScreen';

const DirectoryTab = ({ navigation }) => {
    const beers = useSelector((state) => state.beers);
    const myBeers = useSelector((state) => state.myBeers);
    const [selectedStyle, setSelectedStyle] = useState('');
    const [beerStyleOptions, setBeerStyleOptions] = useState([]);
    const dispatch = useDispatch();

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
            <SwipeRow leftOpenValue={100}>
                <View style={styles.addView}>
                    <TouchableOpacity
                        style={styles.addTouchable}
                        onPress={() => {
                            if (!myBeers.includes(beer.id)) {
                                dispatch(toggleMyBeer(beer.id));
                            } else {
                                console.log('Already set as My Beer.');
                            }
                        }}
                    >
                        <Text style={styles.addText}>Add to My Beers</Text>
                    </TouchableOpacity>
                </View>
                <View>
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
                </View>
            </SwipeRow>
        );
    };

    const filteredBeers = selectedStyle
        ? beers.beersArray.filter((beer) => beer.style === selectedStyle)
        : beers.beersArray;

    return (
        <View style={{ flex: 1 }}>
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

const MyBeersTab = () => {
    return <ScrollView></ScrollView>
};

const Tab = createBottomTabNavigator();

const DirectoryScreen = () => {
    const tabBarOptions = {
        activeBackgroundColor: '#ec9d00',
        inactiveBackgroundColor: '#efc966',
        activeTintColor: 'black',
        inactiveTintColor: '#808080',
        labelStyle: { fontSize: 16 }
    };
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen
                name='Directory'
                component={DirectoryTab}
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <Icon
                                name='list'
                                type='font-awesome'
                                color={props.color}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name='My Beers'
                component={MyBeersScreen}
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <Icon
                                name='beer'
                                type='font-awesome'
                                color={props.color}
                            />
                        );
                    }
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    addView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    addTouchable: {
        backgroundColor: 'green',
        height: '100%',
        justifyContent: 'center'
    },
    addText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16,
        width: 100
    },
    formButton: {
        margin: 40
    }
});

export default DirectoryScreen;