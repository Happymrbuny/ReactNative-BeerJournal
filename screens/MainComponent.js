import { Image, Platform, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import BeerInfoScreen from './BeerInfoScreen';
import DirectoryScreen from './DirectoryScreen';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import MyBeersScreen from './MyBeersScreen';
import BreweriesScreen from './BreweriesScreen';
import EventsScreen from './EventsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: 'goldenrod'
    },
    headerBackground: () => (
        <Image
            source={require('../assets/images/jumbo_bubbles.jpg')}
            style={{ width: '100%', height: '100%' }}
        />
    )
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};
const MyBeersNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='My Beers'
                component={MyBeersScreen}
                optoins={{
                    title: 'My Beers'
                }}
            />
        </Stack.Navigator>
    )
}
const BreweriesNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Breweries'
                component={BreweriesScreen}
                optoins={{
                    title: 'Breweries'
                }}
            />
        </Stack.Navigator>
    )
}
const EventsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Events'
                component={EventsScreen}
                optoins={{
                    title: 'Beer Events'
                }}
            />
        </Stack.Navigator>
    )
}
const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='About'
                component={AboutScreen}
            />
        </Stack.Navigator>
    )
}
const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                optoins={{
                    title: 'Contact Us'
                }}
            />
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Beer Directory' }}
            />
            <Stack.Screen
                name='BeerInfo'
                component={BeerInfoScreen}
                options={({ route }) => ({
                    title: route.params.beer.name
                })}
            />

        </Stack.Navigator>
    );
};

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRoute='Home'
                drawerStyle={{ backgroundColor: '#FFC457' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='Beers'
                    component={MyBeersNavigator}
                    options={{ title: 'My Beers' }}
                />
                <Drawer.Screen
                    name='Breweries'
                    component={BreweriesNavigator}
                    options={{ title: 'Breweries' }}
                />
                <Drawer.Screen
                    name='Events'
                    component={EventsNavigator}
                    options={{ title: 'Events' }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Beer Directory' }}
                />
                <Drawer.Screen
                    name='About'
                    component={AboutNavigator}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{ title: 'Contact Us' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});


export default Main;