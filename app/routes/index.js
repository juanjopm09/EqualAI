import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import VerticalSlider from 'rn-vertical-slider';
import ToggleSwitch from 'toggle-switch-react-native'
import { Button } from 'react-native-elements';

class EqualAIScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>EqualAIScreen</Text>
                <View style={{marginTop: 100}}>
                    <Button
                        icon={
                            <Icon name='ios-pulse' color='white' size={24} />
                        }
                        iconRight
                        title="Smart Equalize "
                    />
                </View>
            </View>
        );
    }
}

class EqualizerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { bassValue: 50 };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Equalizer</Text>
                <View style={styles.verticalSliders}>
                    <VerticalSlider
                        value={this.state.bassValue}
                        disabled={false}
                        min={0}
                        max={100}
                        onChange={(value: number) => {
                            console.log("CHANGE", this.state.bassValue);
                        }}
                        onComplete={(value: number) => {
                            console.log("COMPLETE", this.state.bassValue);
                            this.setState({ bassValue: value });
                        }}
                        width={50}
                        height={300}
                        step={1}
                        borderRadius={5}
                        minimumTrackTintColor={"gray"}
                        maximumTrackTintColor={"tomato"}
                        showBallIndicator
                        ballIndicatorColor={"gray"}
                        ballIndicatorTextColor={"white"}
                    />
                    <Text>Bass</Text>
                </View>
            </View>
        );
    }
}

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { isOn: false };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
                <View style={{marginTop: 100}}>
                    <ToggleSwitch
                        isOn={this.state.isOn}
                        onColor='green'
                        offColor='red'
                        label='Passive Learning'
                        labelStyle={{color: 'black', fontWeight: '900'}}
                        size='large'
                        onToggle={ (isOn) => this.setState({ isOn: isOn }) }
                    />
                </View>
            </View>
        );
    }
}

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { isOn: true };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
                <View style={{marginTop: 100}}>
                    <ToggleSwitch
                        isOn={this.state.isOn}
                        onColor='bloe'
                        offColor='green'
                        label='Passive Learning'
                        labelStyle={{color: 'black', fontWeight: '800'}}
                        size='large'
                        onToggle={ (isOn) => this.setState({ isOn: isOn }) }
                    />
                </View>
            </View>
        );
    }
}

const Navigator = createMaterialBottomTabNavigator({
    EqualAI: {
        screen: EqualAIScreen,
        navigationOptions: {
            tabBarLabel: 'EqualAI',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-pulse' color={tintColor} size={24} />
            )
        }
    },
    Equalizer: {
        screen: EqualizerScreen,
        navigationOptions: {
            tabBarLabel: 'Equalizer',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-options' color={tintColor} size={24} />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
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
    verticalSliders: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});
