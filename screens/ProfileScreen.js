import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileScreen = ({navigation, route}) => {

    const onLogout = () =>{
        AsyncStorage.removeItem('userEmail');
        navigation.navigate('SignInScreen');
    };


    return (
        <View style={styles.container}>
            <View style={{backgroundColor: '#009387',marginTop: 50}}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image
                        source={require('../assets/user.png')}
                        size={80}
                    />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                            marginTop:15,
                            marginBottom: 5,
                        }]}>Test User</Title>
                        <Caption style={styles.caption}>@test_user</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="map-marker-radius" color="#fff" size={20}/>
                    <Text style={{color:"#fff", marginLeft: 20}}>Lviv, Ukraine</Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="phone" color="#fff" size={20}/>
                    <Text style={{color:"#fff", marginLeft: 20}}>+380989455728</Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="email" color="#fff" size={20}/>
                    <Text style={{color:"#fff", marginLeft: 20}}>{route.params.email}</Text>
                </View>
            </View>
            </View>
            <View>
                <TouchableRipple onPress={onLogout}>
                    <View style={styles.menuItem}>
                        <MaterialIcons name="logout"  color="#000000" size={25}/>
                        <Text style={styles.menuItemText}>Log out</Text>
                    </View>
                </TouchableRipple>
            </View>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});

