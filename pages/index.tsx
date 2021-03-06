import type { GetStaticProps } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Comment from "../components/comment";
import styles from "../styles/Home.module.scss";
import { Comments } from "../interface";
import { Key, CSSProperties } from "react";
import CommentForm from "../components/CommentForm";
import React from "react";

const commentStyle: CSSProperties = {
  // marginLeft: "88px",
  // width: "644px"
};

const Home = ({ commentsData } ) => {
  console.log(commentsData.comments);
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <title>Frontend Mentor | Interactive comments section</title>
      </Head>

      {commentsData.comments.map((comment: Comments, index: Key) => {
        return (
          <React.Fragment key={index}>
            <Comment key={index} comment={comment} />
            {/* {comment.replies.length !== 0 &&
              comment.replies.map((reply, index) => {
                return (
                  <Comment
                    key={index}
                    comment={reply}
                    comments={commentsData}
                    style={commentStyle}
                  />
                );
              })} */}
          </React.Fragment>
        );
      })}

      {/* <CommentForm commentsData={commentsData} /> */}
      <CommentForm />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/comment`);
  const data: Comments = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      commentsData: data,
    },
  };
};

export default Home;
