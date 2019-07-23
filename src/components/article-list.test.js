import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArticleList from "./article-list";
import articles from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("ArticleList", () => {
  it("should render ArticleList", () => {
    const container = mount(<ArticleList articles={[]} />);
    expect(container.find(".test--article-list__container").length).toBe(1);
  });

  it("should render all articles closed by default", () => {
    const container = mount(<ArticleList articles={articles} />);
    expect(container.find(".test--article__body").length).toBe(0);
  });

  it("should open article on click", () => {
    const container = mount(<ArticleList articles={articles} />);
    expect(container.find(".test--article__body").length).toBe(0);

    container
      .find(".test--article__btn")
      .at(0)
      .simulate("click");

    expect(container.find(".test--article__body").length).toBe(1);
  });

  it("should fetch all articles on mount", function() {
    const fn = jest.fn();

    mount(<ArticleList articles={articles} fetchAll={fn} />);

    expect(fn.mock.calls.length).toBe(1);
  });
});
