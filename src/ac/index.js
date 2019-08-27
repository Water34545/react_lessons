import {
  DELETE_ARTICLE,
  INCREMENT,
  DATE_FILTER,
  SELECT_FILTER
} from "../constants";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  };
}

export function changeDateFilter(dateRange) {
  return {
    type: DATE_FILTER,
    payload: { dateRange }
  };
}

export function selectFIlter(selected) {
  return {
    type: SELECT_FILTER,
    payload: { selected }
  };
}
