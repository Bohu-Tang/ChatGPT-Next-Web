import styles from "./err.module.scss";

export function Err() {
  return (
    <div className={styles["err"]}>
      <h1>你没有权限</h1>
    </div>
  );
}
