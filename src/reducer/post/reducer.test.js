import { types } from "../../action/types";
import postReducer from "./reducer";

describe("post reducer", () => {
  it("should return default state", () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("shouls return new state if having a type", () => {
    const Posts = [
      {
        title: "test 1",
      },
      {
        title: "test 2",
      },
      {
        title: "test 3",
      },
    ];
    const newState = postReducer(undefined, {
        type: types.GET_POSTS,
        payload: Posts
    })
    expect(newState).toEqual(Posts);
  });
});
