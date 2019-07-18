import React, { Component } from "react";
import moment from "moment";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

class ItemCard extends Component {
  render() {
    const { items } = this.props;
    const date = moment(items.created_at).format("YYYY-MM-DD");
    return (
      <View style={styles.mainContainer}>
        <View style={styles.containerStyle}>
          <View style={{ flexDirection: "row" }}>
            <ImageBackground
              style={styles.imageContainer}
              resizeMode="cover"
              source={{
                uri: `${items.owner.avatar_url}`,
                cache: "force-cache"
              }}
            />
            <View style={styles.infoContainer}>
              <View style={{ flex: 0.3, marginTop: 20 }}>
                <Text
                  style={styles.titleStyle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {items.name}
                </Text>
              </View>
              <View style={{ flex: 0.4, marginRight: 4 }}>
                <Text
                  style={{ color: "#1C1C1C", fontSize: 15, fontWeight: "400" }}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {items.description}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.ratingContainerStyle}>
            <View
              style={{
                height: "80%",
                borderRadius: 10,
                marginTop: 4,
                marginLeft: 6,
                padding: 5,
                backgroundColor: "white"
              }}
            >
              <Text style={styles.textRatingStyle}>
                Stars:{items.stargazers_count}
              </Text>
            </View>
            <View
              style={{
                height: "80%",
                borderRadius: 10,
                padding: 5,
                marginTop: 4,
                marginHorizontal: 6,
                backgroundColor: "white"
              }}
            >
              <Text style={styles.textRatingStyle}>
                Issues:{items.open_issues_count}
              </Text>
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
                Submitted {moment().diff(date, "days")} days ago by{" "}
                {items.owner.login}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ItemCard;
