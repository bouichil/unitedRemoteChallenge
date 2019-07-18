import React, { Component } from "react";
import { connect } from "react-redux";
import { View, FlatList } from "react-native";
import styles from "./styles";
import ItemCard from "../ItemCard";
import { fetchItemsList } from "../../actions/thunk/items";

class ListItems extends Component {
  componentDidMount() {
    this.props.fetchItemsList();
  }
  render() {
    const { items } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: "#FAFBFB" }}>
        <FlatList
          data={items}
          contentContainerStyle={styles.flatListStyle}
          renderItem={data => <ItemCard items={data.item} />}
          keyExtractor={(data, key) => key}
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  fetchItemsList
};

const mapStateToProps = state => ({
  items: state.items.items
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
