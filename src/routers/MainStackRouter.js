import { createStackNavigator, createAppContainer } from "react-navigation";

import ListItems from "../components/ReposList";

const RouteConfig = {
  ListItems: { screen: ListItems }
};

const stackConfig = {
  initialRouteName: "ListItems",
  headerMode: "none"
};

const AppNavigator = createStackNavigator(RouteConfig, stackConfig);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
