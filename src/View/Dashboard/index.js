import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { commonstyle } from "../../assets/theme";
import { connect } from "react-redux";
import * as actions from '../../actions';

class Dashboard extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {
    this.props.getUserData();
  }

  renderItem = (i) => {
    const item = i.item;
    return <TouchableOpacity
      style={styles.listContainer}
    >
      <View>
        <Text style={{ fontSize: 13 }}>{item.name}</Text>
      </View>
      <View>
        <Text style={commonstyle.mb5}>Name: {item.name}</Text>
        <Text style={commonstyle.mb5}>Gender: {item.gender}</Text>
        <Text style={commonstyle.mb5}>Age: {item.age}</Text>
        <Text style={commonstyle.mb5}>Email: {item.email}</Text>
        <Text style={commonstyle.mb5}>Phone No: {item.phoneNo}</Text>
      </View>
    </TouchableOpacity>;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return <SafeAreaView style={commonstyle.container}>
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.userData}
        renderItem={(i) => this.renderItem(i)}
      />
    </SafeAreaView>;
  }
}

const mapStateToProps = state => {
  return {
      userData : state.user.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getUserData : () => dispatch(actions.getAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: 20,
    marginTop: 20,
    borderColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
});

