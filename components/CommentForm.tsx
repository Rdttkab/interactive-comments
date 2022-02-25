import Image from "next/image";
import { FormEventHandler, useState } from "react";
import { Comments } from "../interface";
import styles from "./CommentForm.module.scss";

type Props = {
  commentsData: Comments;
};

const CommentForm = (props) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/comment/", {
      body: JSON.stringify({ comment: comment }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    const result = await res.json()

    if(res.status === 201){
      console.log("success")
    }

    event.target.reset();
  };

  const handleChange = (event) => {
      setComment(event.target.value);
  }

  return (
    <form className={styles.comment_form} onSubmit={handleSubmit}>
      <span className={styles.avatar_container}>
        {/* <Image
          src={commentsData.currentUser.image.webp.slice(1)}
          width={32}
          height={32}
        /> */}
      </span>
      <textarea
        name="comment"
        id="comment"
        cols={30}
        rows={10}
        placeholder="Add a comment..."
        className={styles.comment_textarea}
        onChange={handleChange}
        required></textarea>
      <span className={styles.btn}>
        <button type="submit" className={styles.btn_comment}>
          Send
        </button>
      </span>
    </form>
  );
};

export default CommentForm;
