import { View, FlatList, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Image, ListItem } from 'react-native-elements';
import { SwipeRow } from 'react-native-swipe-list-view';
import { toggleMyBeer } from '../features/myBeers/myBeersSlice';
import Loading from '../components/LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import * as Notifications from 'expo-notifications';

const MyBeersScreen = ({ navigation }) => {
    const { beersArray, isLoading, errMess } = useSelector(
        (state) => state.beers
    );
    const myBeers = useSelector((state) => state.myBeers);
    const dispatch = useDispatch();

    const renderMyBeer = ({ item: beer }) => {

        const presentLocalNotification = async (beerRemoved) => {
            const sendNotification = () => {
                Notifications.setNotificationHandler({
                    handleNotification: async () => ({
                        shouldShowAlert: true,
                        shouldPlaySound: true,
                        shouldSetBadge: true
                    })
                });

                Notifications.scheduleNotificationAsync({
                    content: {
                        title: 'Beer Removed!',
                        body: `${beerRemoved} was removed from your beers.`
                    },
                    trigger: null
                });
            };

            let permissions = await Notifications.getPermissionsAsync();
            if (!permissions.granted) {
                permissions = await Notifications.requestPermissionsAsync();
            }
            if (permissions.granted) {
                sendNotification();
            }
        };

        return (
            <SwipeRow rightOpenValue={-100}>
                <View style={styles.deleteView}>
                    <TouchableOpacity
                        style={styles.deleteTouchable}
                        onPress={() => Alert.alert('Remove Beer?',
                            'Are you sure you want to remove ' + beer.name + ' from your beers?',
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log(beer.name + ' not deleted'),
                                    style: 'cancel'
                                },
                                {
                                    text: 'OK',
                                    onPress: () => {
                                        dispatch(toggleMyBeer(beer.id));
                                        presentLocalNotification(beer.name);
                                    }
                                }
                            ],
                            { cancelable: false }
                        )}
                    >
                        <Text style={styles.deleteText}>Remove from My Beers</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ListItem
                        onPress={() =>
                            navigation.navigate('BeerInfo', { beer }, {
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
                </View>
            </SwipeRow>
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


const styles = StyleSheet.create({
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    deleteTouchable: {
        backgroundColor: 'red',
        height: '100%',
        justifyContent: 'center'
    },
    deleteText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16,
        width: 100
    }
});

export default MyBeersScreen;