import Image from "next/image";
import styles from "./DeleteReply.module.scss";

const DeleteReply = (props: { isCurrentUser: boolean }) => {
  return (
    <div className={styles.user_delete_reply}>
      {props.isCurrentUser && (
        <div className={styles.user_delete}>
          <span>
            <Image src="/images/icon-delete.svg" width={10} height={10} />
          </span>
          <span>Delete</span>
        </div>
      )}
      <div className={styles.user_reply}>
        <span>
          <Image
            src={`/images/icon-${props.isCurrentUser ? "edit" : "reply"}.svg`}
            width={10}
            height={10}
          />
        </span>
        <span>{props.isCurrentUser ? "Edit" : "Reply"}</span>
      </div>
    </div>
  );
};

export default DeleteReply;
