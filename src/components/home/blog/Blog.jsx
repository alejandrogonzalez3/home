import React, { useEffect, useReducer, useCallback } from "react";
import Axios from "axios";
import ShowBlog from "./ShowBlog";
import { Spinner } from "react-bootstrap";
import { Container, Row, Jumbotron } from "react-bootstrap";

const initialState = {
  profile: {
    ptitle: "",
    name: "",
    avtar: "",
    profileurl: "",
  },
  items: [],
  isloading: true,
  error: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "error":
      return {
        error: payload,
        ...initialState,
      };
    case "fetchEnded":
      return {
        ...state,
        isloading: false,
        items: payload.posts,
        profile: payload.profile,
      };

    default:
      return { ...state };
  }
};

export const Blog = () => {
  const [{ profile, items, isloading, error }, dispatch] = useReducer(reducer, initialState);

  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alejandro.gonzalez3";

  /* eslint-disable react-hooks/exhaustive-deps */
  const fetchMyAPI = useCallback(async () => {
    const data = await Axios.get(mediumURL);
    const avatar = data.data.feed.image;
    const profileLink = data.data.feed.link;
    const res = data.data.items;
    const posts = res.filter((item) => item.categories.length > 0);
    const title = data.data.feed.title;

    dispatch({
      type: "fetchEnded",
      payload: { profile: { ...profile, ptitle: title, profileurl: profileLink, avtar: avatar }, posts: posts },
    });

  }, []);

  useEffect(() => {
    fetchMyAPI().catch((e) => {
      dispatch({
        type: "error",
        payload: e.toJSON(),
      });
    });
  }, [fetchMyAPI]);

  if (isloading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <>
        <h2 className="red center1">{error.code ? error.code : error.name}</h2>
        <p className="errorMessage center1">{error.message}</p>
      </>
    );
  }
  return (
    <section id="medium" className="section">
      <Container>
        <Jumbotron fluid className="bg-white">
          <h2 className="display-4 mb-5 text-center">Medium</h2>
          <Row>
            {items.map((post, index) => (
              <ShowBlog key={index} {...post} {...profile} {...index} />
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Blog;
