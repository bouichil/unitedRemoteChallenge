import moment from "moment";
import { requestAction } from "../formUtil";
import { getItemsList } from "../../api/itemsList";

const RESOURCE = "ITEMS_LIST";

export const fetchItemsList = () => (dispatch, getState) => {
  const currentDate = new Date();
  const date = moment(currentDate.setDate(currentDate.getDate() - 30)).format(
    "YYYY-MM-DD"
  );
  return dispatch(requestAction(getItemsList(date), RESOURCE));
};
