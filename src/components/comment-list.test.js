import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CommentList from "./comment-list";
import articles from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("CommentList", () => {
  it("should render CommentList", () => {
    const container = mount(<CommentList comments={[]} />);
    expect(container.find(".test--comments-list__container").length).toBe(1);
  });

  it("should render all comments closed by default", () => {
    const container = mount(<CommentList comments={articles[0].comments} />);
    expect(container.find(".test--comments__body").length).toBe(0);
  });

  it("should open comments on click", () => {
    const container = mount(<CommentList comments={articles[0].comments} />);
    expect(container.find(".test--comments__body").length).toBe(0);

    container
      .find(".test--comments__btn")
      .at(0)
      .simulate("click");

    expect(container.find(".test--comments__body").length).toBe(1);
  });
});
