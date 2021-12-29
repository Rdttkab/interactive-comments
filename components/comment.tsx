import data from "../public/data.json";
import styles from "./comment.module.scss";
import Image from "next/image";

const Comment = () => {
    return (
        <main className={styles.main}>
            <div className={styles.score}>
                <button className={styles.upvote}>
                    <Image src="/images/icon-plus.svg" width={10} height={10} />
                </button>
                <span>{data.comments[0].score}</span>
                <button className={styles.downvote}>
                    <Image src="/images/icon-minus.svg" width={10} height={10} />
                </button>
            </div>
            <div className={styles.comment}>
                <header className={styles.user}>
                    <div className={styles.user_image}>
                        <Image
                            src="/images/avatars/image-amyrobson.png"
                            width={32}
                            height={32}
                        />
                    </div>
                    <div className={styles.user_username}>
                        <h4>{data.comments[0].user.username}</h4>
                    </div>
                    <div className={styles.user_created_at}>
                        <p>{data.comments[0].createdAt}</p>
                    </div>
                    <div className={styles.user_reply}>
                        <span>
                            <Image src="/images/icon-reply.svg" width={10} height={10} />
                        </span>
                        <span>Reply</span>
                    </div>
                </header>
                <div className={styles.content}>
                    <p>{data.comments[0].content}</p>
                </div>
            </div>
        </main>
    );
}

export default Comment

