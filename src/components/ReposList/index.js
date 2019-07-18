import React, { Component } from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import ItemCard from "../ItemCard";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class ListItems extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FAFBFB" }}>
        <FlatList
          data={arr}
          contentContainerStyle={styles.flatListStyle}
          renderItem={data => <ItemCard />}
          keyExtractor={(data, key) => key}
        />
      </View>
    );
  }
}

export default ListItems;
