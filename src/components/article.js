import React, { Component } from "react";

class Article extends Component {
  render() {
    const { article, onBtnClick, isOpen } = this.props;
    const btnText = isOpen ? "close" : "open";

    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={onBtnClick}>{btnText}</button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    const { isOpen, article } = this.props;
    if (!isOpen) return null;
    return <section>{article.text}</section>;
  }
}

export default Article;
