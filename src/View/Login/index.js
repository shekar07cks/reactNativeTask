import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Animated,
    ImageBackground,
    BackHandler,
    ScrollView,
} from "react-native";
import { Button, Input } from "react-native-elements";
import LoginBG from "../../assets/images/mask-group.png";
import { commonstyle, theme } from "../../assets/theme";
import validate from "../../lib/validate";
import { connect } from "react-redux";
import * as actions from '../../actions';

var isHidden = true;
var isHiddenLanguage = true;

class Login extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            Pass: "",
            isHiddenstate: true,
            selected: false,
            invalidEmail: false,
            bounceValue: new Animated.Value(700), //This is the initial position of the subview
            bounceValueLanguage: new Animated.Value(800), //This is the initial position of the subview
        };
    }

    componentWillUnmount() {
        this._toggleSubview(false);
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        this.onBack();
        return true;
    }

    onBack() {
        if (this.state.isHiddenstate == false) {
            this._toggleSubviewLanguage();
        }
        else {
            BackHandler.exitApp();
        }
    }

    _toggleSubview = () => {
        if (!isHiddenLanguage) {
            this._toggleSubviewLanguage();
        }
        var toValue = 800;
        if (isHidden) {
            toValue = 0;
        }
        Animated.spring(this.state.bounceValue, {
            toValue: toValue,
            velocity: 3,
            tension: 2,
            friction: 8,
        }).start();
        isHidden = !isHidden;
        if (isHidden) {
            this.setState({ isHiddenstate: true });
        } else {
            this.setState({ isHiddenstate: false });
        }
    };
    _toggleSubviewLanguage = () => {
        var toValue = 800;
        if (isHiddenLanguage) {
            toValue = 0;
        }
        Animated.spring(this.state.bounceValue, {
            toValue: toValue,
            velocity: 3,
            tension: 2,
            friction: 8,
        }).start();
        isHiddenLanguage = !isHiddenLanguage;
        if (isHiddenLanguage) {
            this.setState({ isHiddenstate: true });
        } else {
            this.setState({ isHiddenstate: false });
        }
    };
    loginUser = () => {
        if (this.formHasError(this.errorConfig)) {
            this.props.loginSubmit(this.state.email, this.state.Pass).then(i => {
                if(this.props.loginUser){
                    this.props.navigation.navigate("Dashboard");
                } else {
                    alert("Invalid Credentials")
                }
            })
        }
    };

    formHasError(errorConfig) {
        let errorStates = {};
        for (let name in errorConfig) {
            let value = this.state[name];
            let type = errorConfig[name].type;
            let error = validate(type, value);
            if (error) {
                errorStates[name + "Error"] = error;
            }
        }

        console.log("errorStates", errorStates);
        if (Object.keys(errorStates).length > 0) {
            this.setState(errorStates);
            return false;
        }
        return true;
    }

    errorConfig = {
        email: {
            type: "email",
        },
        Pass: {
            type: "password",
        },
    };

    render() {
        const {
            bounceValue,
            isHiddenstate,
            email,
            Pass,
        } = this.state;
        return (
            <SafeAreaView style={commonstyle.fullHeight}>
                <ImageBackground source={LoginBG} style={[commonstyle.fullHeight, commonstyle.flex]}>
                    <View
                        style={styles.textContent}
                    >
                        <View />
                        <View style={commonstyle.width90}>
                            <Text style={styles.titleText}>
                                DELIVER
                                </Text>
                        </View>
                        <View
                            style={styles.loginButtonContainer}
                        >
                            <Button
                                onPress={() => this._toggleSubviewLanguage()}
                                buttonStyle={{ backgroundColor: theme.colors.primary }}
                                containerStyle={[commonstyle.fullWidth]}
                                title="Login"
                            />
                            <View style={[commonstyle.mt15, commonstyle.fDirectionRow]}>
                                <Text style={{ color: theme.colors.lightGray }}>
                                    Don't have an account?{" "}
                                </Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")}
                                    style={styles.signupContainer}>
                                    <Text
                                        style={{ color: theme.colors.primary, fontWeight: "bold" }}
                                    >
                                        Sign up
                                        </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Animated.View
                        style={[
                            styles.subView,
                            { transform: [{ translateY: bounceValue }] },
                        ]}
                    >
                        <ScrollView style={commonstyle.fullWidth}>
                            <View style={commonstyle.alignCenter}>
                                <Text style={[styles.heading, commonstyle.mt20]}>Welcome back</Text>
                                <Text style={styles.subheading}>Login to your account</Text>
                            </View>
                            <View style={styles.textFieldContainer}>
                                <Input
                                    containerStyle={styles.inputContainerStyle}
                                    inputStyle={styles.inputStyles}
                                    autoCapitalize="none"
                                    inputContainerStyle={{ borderBottomWidth: 0 }}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="grey"
                                    onChangeText={email => this.setState({ email, emailError: "" })}
                                    name="email"
                                    value={this.state.email}
                                    keyboardType="email-address"
                                    placeholder="Email"
                                />
                            </View>
                            <View style={commonstyle.alignCenter}>
                                <Text style={{ color: "red" }}>{this.state.emailError}</Text>
                            </View>
                            <View style={styles.textFieldContainer}>
                                <Input
                                    containerStyle={styles.inputContainerStyle}
                                    inputStyle={styles.inputStyles}
                                    autoCapitalize="none"
                                    inputContainerStyle={{ borderBottomWidth: 0 }}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="grey"
                                    onChangeText={Pass => this.setState({ Pass, PassError: "" })}
                                    name="Pass"
                                    value={this.state.Pass}
                                    secureTextEntry
                                    keyboardType="default"
                                    placeholder="Password"
                                />
                            </View>
                            <View style={commonstyle.alignCenter}>
                                <Text style={{ color: "red" }}>{this.state.PassError}</Text>
                            </View>
                            <View style={styles.signinBtnViewStyle}>
                                <Button
                                    onPress={ () => this.loginUser()}
                                    // disabled={email && Pass ? false : true}
                                    buttonStyle={{ backgroundColor: theme.colors.primary }}
                                    containerStyle={commonstyle.width90}
                                    title="Login"
                                />
                            </View>
                        </ScrollView>
                    </Animated.View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginUser : state.user.loginUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginSubmit : (email, pass) => dispatch(actions.getLoginData({
            email: email,
            password: pass
          }))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -15,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    textContent: {
        justifyContent: "space-between",
        height: "80%",
        alignItems: "center",
    },
    heading: {
        fontSize: 34,
        fontWeight: "bold",
        color: "rgb(10,31,68)",
    },
    subheading: {
        fontSize: 14,
        color: "grey",
        marginBottom: 20,
        marginTop: 10,
    },
    textFieldContainer: {
        width: "100%",
        alignItems: "center",
    },
    inputContainerStyle: {
        height: 40,
        marginTop: 10,
        width: "80%",
        backgroundColor: "#f1f1f1",
        color: "#000",
        borderBottomWidth: 0,
        borderRadius: 3,
        borderColor: "#d5d5d5",
    },
    inputStyles: {
        fontSize: 14,
        paddingTop: 10,
    },
    signinBtnViewStyle: {
        width: "100%",
        alignItems: "center",
        // marginTop: '10%'
    },
    forgotTextStyle: {
        color: "black",
        marginTop: 10,
    },
    signUpTextStyle: {
        color: "grey",
    },
    subView: {
        position: "absolute",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        height: "70%",
    },
    subViewLanguage: {
        position: "absolute",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        height: "50%",
    },
    titleText: {
        fontSize: 34,
        fontWeight: "bold",
        color: "#fff",
    },
    smallText: {
        fontSize: 14,
        color: "#fff",
        width: 230,
    },
    loginButtonContainer: {
        width: "80%",
        alignItems: "center",
        marginBottom: 20,
    },
    signupContainer: {
        width: 90,
        height: 70,
    },
});
