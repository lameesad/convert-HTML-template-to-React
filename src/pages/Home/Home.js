import React from "react";
import { Nav } from "../../components/Nav/Nav";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { PostPreviewList } from "../../components/PostPreiewList/PostPreiewList";
import { useEffect, useState } from "react";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        title: "Man must explore, and this is exploration at its greatest",
        subtitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        publication_date: "September 24, 2019",
      },
      {
        id: 2,
        title: "Man must explore, and this is exploration at its greatest",
        subtitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        publication_date: "September 24, 2019",
      },
      {
        id: 3,
        title: "Man must explore, and this is exploration at its greatest",
        subtitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        publication_date: "September 24, 2019",
      },
    ]);
  }, []);

  return (
    <>
      <Nav />

      <Header
        imgName="home-bg"
        title="Clean Blog"
        subtitle="A Blog Theme by Start Bootstrap"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <PostPreviewList posts={posts} />
          </div>
        </div>
      </div>

      <hr />
      <Footer />
    </>
  );
};
