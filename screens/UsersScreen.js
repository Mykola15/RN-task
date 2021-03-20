import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';
import {Caption} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const UsersScreen = () => {
    const [usersArr, setUsersArr] = React.useState();
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsersArr(json))
    }, [])

    const renderUser = (item) => {
        const user = item.item;
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Image style={styles.userImage}
                           source={require('../assets/user.png')}/>
                </View>
                <View style={styles.cardFooter}>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Caption style={styles.caption}>@{user.username}</Caption>
                    </View>
                    <View style={styles.userInfoSection}>
                        <View style={styles.row}>
                            <MaterialCommunityIcons name="map-marker-radius"  size={15}/>
                            <Text style={{ marginLeft: 5,fontSize:12}}>{user.address.city},{user.address.street}</Text>
                        </View>
                        <View style={styles.row}>
                            <MaterialCommunityIcons name="phone" size={15}/>
                            <Text style={{ marginLeft: 5,fontSize:12}}>+{user.phone}</Text>
                        </View>
                        <View style={styles.row}>
                            <MaterialCommunityIcons name="email"  size={15}/>
                            <Text style={{marginLeft: 5, fontSize:12}}>{user.email}</Text>
                        </View>
                    </View>
                </View>
            </View>

        )
    }

    return (
        <View style={styles.container}>
            {usersArr &&
            <FlatList style={styles.list}
                      contentContainerStyle={styles.listContainer}
                      data={usersArr}
                      numColumns={2}
                      renderItem={renderUser}/>
            }
        </View>);
};
export default UsersScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#009387",
    },
    listContainer: {
        alignItems: 'center'
    },
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 5,
        backgroundColor: "white",
        flexBasis: '46%',
        marginHorizontal: 5,
    },
    cardFooter: {
        marginTop:10,
        marginHorizontal: 5,
        justifyContent: 'flex-end',
        width:'80%'
    },
    cardHeader: {
        padding: 5,
        borderBottomColor:'#000',
        borderBottomWidth: 1,
    },
    userImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf: 'center',
        borderColor: "#DCDCDC",
        borderWidth: 3,
    },
    name: {
        fontSize: 16,
        flex: 1,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
});