import React, { Component } from "react";

class AccordionComponent extends Component {
  state = {
    openArticleId: null
  };

  toggleOpenArticle = openArticleId => () => this.setState({ openArticleId });
}

export default AccordionComponent;
