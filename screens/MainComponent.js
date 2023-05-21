import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBreweries } from '../features/breweries/breweriesSlice';
import { fetchBeers } from '../features/beers/beersSlice';
import { fetchEvents } from '../features/events/eventsSlice';
import { fetchComments } from '../features/comments/commentsSlice';
import { Image, ImageBackground, Platform, View, StyleSheet, Text } from 'react-native';
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
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import logo from '../assets/images/logo.png';
import foam from '../assets/images/foam.jpg';
import headerfoam from '../assets/images/headerfoam.jpg';
import bubbles from '../assets/images/bubbles.jpg';
import { BackgroundImage } from 'react-native-elements/dist/config';

const Drawer = createDrawerNavigator();
const screenOptions = {
    headerTintColor: 'black',
    headerStyle: {
        backgroundColor: '#ec9d00',
    },
    headerBackground: () => (
        <Image
            source={require('../assets/images/headerfoam.jpg')}
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
                options={({ navigation }) => ({
                    title: 'My Beers',
                    headerLeft: () => (
                        <Icon
                            name='beer'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
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
                options={({ navigation }) => ({
                    title: 'Breweries',
                    headerLeft: () => (
                        <Icon
                            name='building-o'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
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
                options={({ navigation }) => ({
                    title: 'Events',
                    headerLeft: () => (
                        <Icon
                            name='calendar'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
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
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
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
                options={({ navigation }) => ({
                    title: 'Contact Us',
                    headerLeft: () => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
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
                options={({ navigation, route }) => ({
                    title: 'Beer Directory',
                    headerTitle: getFocusedRouteNameFromRoute(route),
                    headerLeft: () => (
                        <Icon
                            name={
                                getFocusedRouteNameFromRoute(route) ===
                                    'Directory'
                                    ? 'list'
                                    : 'beer'
                            }
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
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

const CustomDrawerContent = (props) => {
    return (
        <ImageBackground
            source={bubbles}
            style={{ flex: 1 }}
            resizeMode='stretch'
        >
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{
                    paddingTop: 0,
                }}
            >
                <View style={{ flexShrink: 1 }}>
                    <ImageBackground
                        source={foam}
                        style={styles.drawerHeader}

                    >
                        <View style={{ flex: 1 }}>
                            <Image source={logo} style={styles.drawerImage} />
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.drawerHeaderText}>Beer Journal</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{}}>
                    <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
                </View>
            </DrawerContentScrollView >
        </ImageBackground >
    )
};

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBeers());
        dispatch(fetchBreweries());
        dispatch(fetchEvents());
        dispatch(fetchComments());
    }, [dispatch]);

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
                drawerStyle={{ backgroundColor: '#ec9d00' }}
                drawerContent={CustomDrawerContent}
                drawerContentOptions={{ activeTintColor: 'white', inactiveTintColor: '#4f480c' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Beers'
                    component={MyBeersNavigator}
                    options={{
                        title: 'My Beers',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='beer'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{
                        title: 'Beer Directory',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Breweries'
                    component={BreweriesNavigator}
                    options={{
                        title: 'Breweries',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='building-o'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Events'
                    component={EventsNavigator}
                    options={{
                        title: 'Events',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='calendar'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='About'
                    component={AboutNavigator}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='info-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{
                        title: 'Contact Us',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='address-card'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: 'black',
        fontSize: 24
    },
    drawerHeader: {
        backgroundColor: '#ec9d00',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    drawerHeaderText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    }
});

export default Main;