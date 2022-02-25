import styles from "./comment.module.scss";
import Image from "next/image";
import { Replies, Comments } from "../interface";
import { CSSProperties } from "react";
import DeleteReply from "./DeleteReply";
import { useMediaQuery } from "react-responsive";

const Comment = (props: {
  comment: Comments | Replies;
  comments?: Comments;
  style?: CSSProperties;
}) => {
  const currentUser = "juliusomo"
  // const isCurrentUser =
  //   props.comment.user.username === props.comments?.currentUser.username
  //     ? true
  //     : false;

  const isCurrentUser =
    props.comment.author.username === currentUser
      ? true
      : false;

  const isLargeScreen = useMediaQuery({ query: "(min-width: 376px)" });

  const date = props.comment.createdAt; 

  return (
    <div className={styles.container} style={props.style}>
      <div className={styles.header}>
        <div className={styles.score}>
          <button className={styles.upvote}>
            <Image src="/images/icon-plus.svg" width={10} height={10} />
          </button>
          <span>{props.comment.score}</span>
          <button className={styles.downvote}>
            <Image src="/images/icon-minus.svg" width={10} height={10} />
          </button>
        </div>

        {!isLargeScreen && <DeleteReply isCurrentUser={isCurrentUser} />}
      </div>

      <div className={styles.comment}>
        <header className={styles.user}>
          <div className={styles.user_image}>
            <Image
              src={props.comment.author.avatar.webp.slice(1)}
              width={32}
              height={32}
            />
          </div>

          <div className={styles.user_username}>
            <h4>{props.comment.author.username}</h4>
          </div>

          {isCurrentUser && (
            <div className={styles.user_current_user}>
              <span>You</span>
            </div>
          )}

          <div className={styles.user_created_at}>
            <p>{date}</p>
          </div>
          {isLargeScreen && <DeleteReply isCurrentUser={isCurrentUser} />}
        </header>

        <div className={styles.content}>
          <p>{props.comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
