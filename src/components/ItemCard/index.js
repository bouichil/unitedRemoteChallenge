import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

class ItemCard extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.containerStyle}>
          <View style={{ flexDirection: "row" }}>
            <ImageBackground style={styles.imageContainer} />
            <View style={styles.infoContainer}>
              <View style={{ flex: 0.3, marginTop: 20 }}>
                <Text
                  style={styles.titleStyle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Repository name
                </Text>
              </View>
              <View style={{ flex: 0.4, marginRight: 4 }}>
                <Text
                  style={{ color: "#1C1C1C", fontSize: 15, fontWeight: "400" }}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  This is a description
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.ratingContainerStyle}>
            <View
              style={[
                styles.starsAndIssuesContainer,
                {
                  marginLeft: 6
                }
              ]}
            >
              <Text style={styles.textRatingStyle}>Stars:120</Text>
            </View>
            <View
              style={[
                styles.starsAndIssuesContainer,
                {
                  marginHorizontal: 6
                }
              ]}
            >
              <Text style={styles.textRatingStyle}>Issues:11</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  color: "black",
                  fontSize: 10,
                  fontWeight: "400"
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Submitted 30 days ago by ...
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ItemCard;
