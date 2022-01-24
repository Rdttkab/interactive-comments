import Image from "next/image";
import { Comments } from "../interface";
import styles from "./CommentForm.module.scss";

type Props = {
  commentsData: Comments;
};

const CommentForm = ({ commentsData}: Props) => {
  return (
    <form className={styles.comment_form} action="/comment">
      <span className={styles.avatar_container}>
        <Image
          src={commentsData.currentUser.image.webp.slice(1)}
          width={32}
          height={32}
        />
      </span>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Add a comment..."
        className={styles.comment_textarea}></textarea>
      <span className={styles.btn}>
        <button type="submit" className={styles.btn_comment}>
          Send
        </button>
      </span>
    </form>
  );
};

export default CommentForm;
