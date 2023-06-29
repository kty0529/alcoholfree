import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.loading}>
      <span className={`${styles.icon} material-icons-outlined`}>
        hourglass_empty
      </span>

      <div className={styles.text}>
        데이터를 로드 중입니다.
        <br />로딩이 계속되면 페이지를 새로고침 해주세요.
      </div>
    </div>
  )
}

export default Loading;
