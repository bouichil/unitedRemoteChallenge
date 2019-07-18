import { createStackNavigator, createAppContainer } from "react-navigation";

import ItemCard from "../components/ItemCard";

const RouteConfig = {
  ItemCard: { screen: ItemCard }
};

const stackConfig = {
  initialRouteName: "ItemCard",
  headerMode: "none"
};

const AppNavigator = createStackNavigator(RouteConfig, stackConfig);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
