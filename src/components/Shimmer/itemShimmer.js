import React, { Component } from "react";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import styles from "./styles";

class ItemShimmer extends Component {
  render() {
    return (
      <ShimmerPlaceHolder autoRun={true} style={styles.itemContainerStyle} />
    );
  }
}

export default ItemShimmer;
