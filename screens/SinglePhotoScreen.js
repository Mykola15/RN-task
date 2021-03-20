import * as React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const SinglePhotoScreen = ({route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}><Image source={{uri: route.params.item.url}} style={{height: 350,width:350}} /></View>
            <View style={styles.footer}><Text style={styles.text_footer}> {route.params.item.title}</Text></View>
        </View>
    );
}
export default SinglePhotoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    footer: {
        flex: 2,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    header: {
        flex: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    text_footer: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24
    }
});