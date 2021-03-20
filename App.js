import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainTabScreen from './screens/MainTabScreen';
import SignInScreen from './screens/SignInScreen';
import SinglePhotoScreen from "./screens/SinglePhotoScreen";
import SinglePostScreen from "./screens/SinglePostScreen";


const Stack = createStackNavigator();

const App = () => {
      const [userEmail, setUserEmail] = React.useState();

      React.useEffect(() => {
        AsyncStorage.getItem('userEmail').then((value) => {
          if (value) {
            setUserEmail(value);
          } else {
            setUserEmail('No email');
          }
        });
      }, []);
      return (
          <>
            {userEmail &&
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="SignInScreen" component={SignInScreen}
                              options={{
                                title: '',
                                headerShown: false
                              }}
                              initialParams={{
                                email: userEmail,
                              }}/>

                <Stack.Screen name="MainTabScreen" component={MainTabScreen}
                              options={{
                                title: '',
                                headerShown: false
                              }}
                              initialParams={{
                                email: userEmail,
                              }}/>
                  <Stack.Screen name="SinglePhotoScreen" component={SinglePhotoScreen}
                                options={{
                                    title: '',

                                }}
                  />
                  <Stack.Screen name="SinglePostScreen" component={SinglePostScreen}
                                options={{
                                    title: '',

                                }}
                  />
              </Stack.Navigator>
            </NavigationContainer>
            }
          </>
      );
    }
;

export default App;


