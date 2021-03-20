import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import PhotosScreen from "./PhotosScreen";
import UsersScreen from "./UsersScreen";


const MainTabScreen = ({route}) => {
    const BottomTabs = createBottomTabNavigator();
    return (
        <BottomTabs.Navigator
            tabBarOptions={{
                activeTintColor: '#009387',
            }}>
            <BottomTabs.Screen
                name="TabStack"
                component={PostsScreen}
                options={{
                    tabBarLabel: 'Posts',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="file-document" color={color} size={size}/>
                    ),
                }}
            />
            <BottomTabs.Screen
                name="TabChat"
                component={PhotosScreen}
                options={{
                    tabBarLabel: 'Photos',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name="photo" color={color} size={size}/>
                    ),
                }}
            />
            <BottomTabs.Screen
                name="TabContacts"
                component={UsersScreen}
                options={{
                    tabBarLabel: 'Users',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name="contacts" color={color} size={size}/>
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    ),
                }}
                initialParams={{
                    email: route.params.email,
                }}
            />

        </BottomTabs.Navigator>
    );
}
export default MainTabScreen;

