import React, { Component } from "react";
import { connect } from "react-redux";
import { View, FlatList } from "react-native";
import styles from "./styles";
import ItemCard from "../ItemCard";
import ItemShimmer from "../Shimmer/itemShimmer";
import { fetchItemsList } from "../../actions/thunk/items";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }

  getNextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  componentDidUpdate(prevProps, nextState) {
    if (this.state.page != nextState.page) {
      this.props.fetchItemsList(this.state.page);
    }
  }

  componentDidMount() {
    this.props.fetchItemsList(this.state.page);
  }
  render() {
    const { fetching, items } = this.props;
    return (
      <View style={styles.Container}>
        <FlatList
          data={fetching ? arr : items}
          contentContainerStyle={styles.flatListStyle}
          renderItem={data =>
            fetching ? <ItemShimmer /> : <ItemCard items={data.item} />
          }
          keyExtractor={(data, key) => key}
          onEndReached={this.getNextPage}
          onEndReachedThreshold={0.05}
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  fetchItemsList
};

const mapStateToProps = state => ({
  fetched: state.items.fetched,
  fetching: state.items.fetching,
  items: state.items.items
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
