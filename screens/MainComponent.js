import { Image, Platform, View } from 'react-native';
import Constants from 'expo-constants';
import BeerInfoScreen from './BeerInfoScreen';
import DirectoryScreen from './DirectoryScreen';
import HomeScreen from './HomeScreen';
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
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                optoins={{
                    title: 'Home'
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
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Directory' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;