import styles from "./comment.module.scss";
import Image from "next/image";
import { CommentArray, Replies, Comments } from "../interface";
import { CSSProperties } from "react";

const Comment = (props: {
  comment: CommentArray | Replies;
  comments?: Comments;
  style?: CSSProperties;
}) => {
  const isCurrentUser =
    props.comment.user.username === props.comments?.currentUser.username
      ? true
      : false;

  return (
    <div className={styles.container} style={props.style}>
      <div className={styles.score}>
        <button className={styles.upvote}>
          <Image src="/images/icon-plus.svg" width={10} height={10} />
        </button>
        <span>{props.comment.score}</span>
        <button className={styles.downvote}>
          <Image src="/images/icon-minus.svg" width={10} height={10} />
        </button>
      </div>

      <div className={styles.comment}>
        <header className={styles.user}>
          <div className={styles.user_image}>
            <Image
              src={props.comment.user.image.webp.slice(1)}
              width={32}
              height={32}
            />
          </div>

          <div className={styles.user_username}>
            <h4>{props.comment.user.username}</h4>
          </div>

          {isCurrentUser ? (
            <div className={styles.user_current_user}>
              <span>You</span>
            </div>
          ) : null}

          <div className={styles.user_created_at}>
            <p>{props.comment.createdAt}</p>
          </div>

          <div className={styles.user_delete_reply}>
            {isCurrentUser ? (
              <div className={styles.user_delete}>
                <span>
                  <Image src="/images/icon-delete.svg" width={10} height={10} />
                </span>
                <span>Delete</span>
              </div>
            ) : null}
            <div className={styles.user_reply}>
              <span>
                <Image
                  src={`/images/icon-${isCurrentUser ? "edit" : "reply"}.svg`}
                  width={10}
                  height={10}
                />
              </span>
              <span>{isCurrentUser ? "Edit" : "Reply"}</span>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <p>{props.comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
