import React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { selectFIlter } from "../../ac";

function SelectFilter({ articles, selected, selectFIlter }) {
  const options = articles.map(article => ({
    label: article.title,
    value: article.id
  }));

  return (
    <Select
      options={options}
      value={selected}
      onChange={selectFIlter}
      isMulti
    />
  );
}

export default connect(
  state => ({
    articles: state.articles,
    selected: state.filters.selected
  }),
  { selectFIlter }
)(SelectFilter);
