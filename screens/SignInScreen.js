import React from 'react';

import {
    View,
    Text,
    Alert,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation,route}) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        secureTextEntry: true,
        isValidEmail: true,
        isValidPassword: true,
    });

    const validateEmail = (email) => {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(String(email).toLowerCase());
    }


    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const handleValidEmail = (email) => {
        if (validateEmail(email)) {
            setData({
                ...data,
                isValidEmail: true
            });
        } else {
            setData({
                ...data,
                isValidEmail: false
            });
        }
    }
    const handleValidPass = (pass) => {
        if (pass.trim().length >= 8) {
            setData({
                ...data,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                isValidPassword: false
            });
        }
    }

    const handleEmailChange = (email) => {
        if (validateEmail(email)) {
            setData({
                ...data,
                email: email,
                isValidEmail: true
            });
        } else {
            setData({
                ...data,
                email: email,
                isValidEmail: false
            });
        }
    }

    const handlePasswordChange = (pass) => {
        if (pass.trim().length >= 8) {
            setData({
                ...data,
                password: pass,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: pass,
                isValidPassword: false
            });
        }
    }
    const loginHandle = () => {

        if ( data.email.length === 0 || data.password.length === 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn();
    }
    const signIn = () => {
        AsyncStorage.setItem('userEmail', data.email);
        setData({
            email: '',
            password: '',
            secureTextEntry: true,
            isValidEmail: true,
            isValidPassword: true,
        });
        navigation.navigate('MainTabScreen' ,{email: data.email});
    }
    React.useEffect(()=>{
        if(route.params.email && validateEmail(route.params.email)){
            navigation.navigate('MainTabScreen' ,{email: route.params.email});
        }
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View
                style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value = {data.email}
                        onChangeText={(email) => handleEmailChange(email)}
                        onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
                    />
                </View>

                {!data.isValidEmail &&
                    <View>
                        <Text style={styles.errorMsg}>Invalid Email!</Text>
                    </View>
                }

                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>

                <View style={styles.action}>
                    <Feather
                        name="lock"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        secureTextEntry={data.secureTextEntry}
                        type='password'
                        autoCapitalize="none"
                        value = {data.password}
                        onChangeText={(pass) => handlePasswordChange(pass)}
                        onEndEditing={(e) => handleValidPass(e.nativeEvent.text)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                {!data.isValidPassword &&
                    <View>
                        <Text style={styles.errorMsg}>Password must be at least 8 characters long!</Text>
                    </View>
                }

                <TouchableOpacity>
                    <Text style={{color: '#009387', marginTop: 15}}>Forgot password?</Text>
                </TouchableOpacity>
                {data.isValidPassword && data.isValidEmail ?
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.signIn}>
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={loginHandle}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    : <View style={styles.button}>
                        <View style={[styles.signIn, {
                            borderColor: '#837f7f',
                            borderWidth: 1,
                            marginTop: 50
                        }]}>
                            <Text style={[styles.textSign, {
                                color: '#837f7f'
                            }]}>Sign In</Text>
                        </View>
                    </View>
                }
            </View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});