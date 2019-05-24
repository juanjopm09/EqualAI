import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

class EqualAIScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>EqualAIScreen</Text>
            </View>
        );
    }
}

class EqualizerScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>SettingsScreen</Text>
            </View>
        );
    }
}

class SettingsScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>SettingsScreen</Text>
            </View>
        );
    }
}

const Navigator = createMaterialBottomTabNavigator({
    EqualAI: { screen: EqualAIScreen,
        navigationOptions: {
            tabBarLabel: 'EqualAI',
            tabBarIcon:({tintColor})=>(
                <Icon name='ios-pulse' color={tintColor} size={24} />
            )
        }
    },
    Equalizer: { screen: EqualizerScreen,
        navigationOptions: {
            tabBarLabel: 'Equalizer',
            tabBarIcon:({tintColor})=>(
                <Icon name='ios-options' color={tintColor} size={24} />
            )
        }
    },
    Settings: { screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon:({tintColor})=>(
                <Icon name='ios-settings' color={tintColor} size={24} />
            )
        }
    }
}, {
    initialRouteName: 'Equalizer',
    order: ['EqualAI', 'Equalizer', 'Settings'],
    activeTintColor: 'black',
    inactiveColor: 'gray',
    shifting: true,
    barStyle: {
        backgroundColor: 'white'
    }
}) 

const Router = createAppContainer(Navigator);

export default Router;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
});
  