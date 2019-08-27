import { DELETE_ARTICLE, DATE_FILTER, SELECT_FILTER } from "../constants";

const Defaultfilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
};

export default (filters = Defaultfilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case DATE_FILTER:
      return { ...filters, dateRange: payload.dateRange };

    case SELECT_FILTER:
      return { ...filters, selected: payload.selected };

    case DELETE_ARTICLE:
      return {
        ...filters,
        selected: filters.selected.filter(
          selected => selected.value !== payload.id
        )
      };

    default:
      return filters;
  }
};
