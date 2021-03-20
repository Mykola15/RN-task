import * as React from 'react';
import {
    Text, View, StyleSheet, ScrollView, TouchableOpacity
} from 'react-native';

const PostsScreen = ({navigation}) => {
    const [postsArr, setPostsArr] = React.useState();

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setPostsArr(json);
            })
    }, [])

    return (
        <ScrollView style={styles.container}>
            {postsArr && postsArr.map((post) => {
                return (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('SinglePostScreen', {post: post})
                    }}>
                        <View style={styles.post}>
                            <View style={styles.post_title}>
                                <Text style={[styles.post_text, {fontWeight: 'bold', fontSize: 16}]}>
                                    {post.id}.{post.title}
                                </Text>
                            </View>
                            <View style={styles.post_body}>
                                <Text style={styles.post_text}>{post.body}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    );
}
export default PostsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50
    },
    post: {
        margin: 15,
        marginBottom: 0,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
    },
    post_title: {
        backgroundColor: '#fff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    post_body: {
        backgroundColor: '#009387',
        borderRadius: 10,
    },
    post_text: {
        margin: 5,
        fontSize: 14
    }
});