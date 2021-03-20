import * as React from 'react';
import {View,Image, TouchableOpacity} from 'react-native';
import GridView from 'react-native-super-grid';

const PhotosScreen = ({navigation}) => {
    const [photoArr, setPhotoArr] = React.useState();
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setPhotoArr(json))
    }, [])

    const renderItem = (item) => {
        return (
            <TouchableOpacity onPress={()=>{
                navigation.navigate('SinglePhotoScreen',{item: item.item})}}>
            <Image source={{uri: item.item.url}} style={{height: 180,width:180}}/>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{backgroundColor: '#009387', width: '100%', height: '100%',marginTop:50}}>
            {photoArr &&
            <GridView data={photoArr.slice(0,100)} renderItem={renderItem}/>
            }
        </View>
    );
}
export default PhotosScreen;
