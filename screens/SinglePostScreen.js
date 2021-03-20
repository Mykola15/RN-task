import * as React from 'react';
import {
    Text, StyleSheet, View, ScrollView
} from 'react-native';
import {Avatar} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SinglePostScreen = ({route}) => {
    const [commentsArr, setCommentsArr] = React.useState();
    const post = route.params.post;
    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${route.params.post.id}`)
            .then(response => response.json())
            .then(json => {
                setCommentsArr(json);
            })
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.post_title}>
                    <Text style={[styles.post_text, {fontWeight: 'bold', fontSize: 32}]}>
                        {post.id}. {post.title}
                    </Text>
                </View>
                <View style={styles.post_body}>
                    <Text style={styles.post_text}>
                        {post.body}
                    </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <ScrollView>
                    {commentsArr && commentsArr.map((comment) => {
                        return (
                            <View style={styles.comment}>
                                <View style={styles.comment_user}>
                                    <Avatar.Image
                                        source={require('../assets/user.png')}
                                        size={40}
                                    />
                                    <View style={styles.user_name}>
                                        <Text style={styles.user_name_text}>{comment.name}</Text>
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <MaterialCommunityIcons name="email" color="#373636" size={20}/>
                                            <Text style={{color: "#373636", marginLeft: 5,marginTop: 2}}>{comment.email}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.comment_body}>
                                    <Text style={styles.comment_body_text}>{comment.body}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
}
export default SinglePostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,

    },
    footer: {
        flex: 2,
        backgroundColor: '#009387',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopColor: '#000',
        borderTopWidth: 2,

    },
    post_title: {
        backgroundColor: '#fff',
    },
    post_body: {
        backgroundColor: '#009387',
        borderRadius: 10,
    },
    post_text: {
        margin: 5,
        fontSize: 18
    },
    comment: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        marginBottom: 0,
        padding: 10,
    },
    comment_user: {
        flexDirection: 'row',
        paddingBottom: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 1,

    },
    comment_body_text: {
        fontSize: 12
    },
    comment_body: {},
    user_name_text: {
        fontSize: 16
    },
    user_name: {
        paddingLeft: 5,
        width: '80%'
    }
});