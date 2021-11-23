import React from 'react'
import { Image, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//screens 
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';


//constants
import { COLORS, icons } from '../constants'


const dTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    }
}


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: COLORS.primary,
                borderTopColor: "transparent",
                height: 60,
            }
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.darkGray
                            }}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        focused ? <View
                            style={{
                                width: 5,
                                height: 5,
                                backgroundColor: focused ? COLORS.white : COLORS.darkGray,
                                borderRadius: 5,
                                position: 'absolute',
                                bottom: 5,
                            }}
                        /> : null
                    )
                }}
            />
            <Tab.Screen name="Play" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.play2}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.darkGray
                            }}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        focused ? <View
                            style={{
                                width: 5,
                                height: 5,
                                backgroundColor: focused ? COLORS.white : COLORS.darkGray,
                                borderRadius: 5,
                                position: 'absolute',
                                bottom: 5,
                            }}
                        /> : null
                    )
                }}
            />
            <Tab.Screen name="Search" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.searchBottom}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.darkGray
                            }}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        focused ? <View
                            style={{
                                width: 5,
                                height: 5,
                                backgroundColor: focused ? COLORS.white : COLORS.darkGray,
                                borderRadius: 5,
                                position: 'absolute',
                                bottom: 5,
                            }}
                        /> : null
                    )
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.profile}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.darkGray
                            }}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        focused ? <View
                            style={{
                                width: 5,
                                height: 5,
                                backgroundColor: focused ? COLORS.white : COLORS.darkGray,
                                borderRadius: 5,
                                position: 'absolute',
                                bottom: 5,
                            }}
                        /> : null
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer theme={dTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Root">
                <Stack.Screen name="Root" component={Tabs} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
