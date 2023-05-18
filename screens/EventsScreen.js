import { useSelector } from 'react-redux';
import { FlatList, Text, View } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';

const EventsScreen = () => {
    const events = useSelector((state) => state.events);

    if (events.isLoading) {
        return (
            <Loading />
        );
    }
    if (events.errMess) {
        return (
            <View>
                <Text>{events.errMess}</Text>
            </View>
        );
    }

    const renderEvent = ({ item: event }) => {
        return (
            <ListItem>
                <Image
                    source={{ uri: baseUrl + event.image }}
                    style={{ width: 50, height: 50 }}
                    resizeMode='contain'
                />
                <ListItem.Content>
                    <ListItem.Title>{event.name}</ListItem.Title>
                    <ListItem.Subtitle>{event.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={events.eventsArray}
            renderItem={renderEvent}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default EventsScreen;