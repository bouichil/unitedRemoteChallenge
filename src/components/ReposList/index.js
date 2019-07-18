import React, { Component } from "react";
import { connect } from "react-redux";
import { View, FlatList } from "react-native";
import styles from "./styles";
import ItemCard from "../ItemCard";
import ItemShimmer from "../Shimmer/itemShimmer";
import { fetchItemsList } from "../../actions/thunk/items";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class ListItems extends Component {
  componentDidMount() {
    this.props.fetchItemsList();
  }
  render() {
    const { fetching, items } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#FAFBFB" }}>
        <FlatList
          data={fetching ? arr : items}
          contentContainerStyle={styles.flatListStyle}
          renderItem={data =>
            fetching ? <ItemShimmer /> : <ItemCard items={data.item} />
          }
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
  fetching: state.items.fetching,
  items: state.items.items
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
