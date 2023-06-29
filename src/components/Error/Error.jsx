import styles from "./Error.module.scss";

function Error() {
  return (
    <div className={styles.message}>
      <span className={`${styles.icon} material-icons-outlined`}>
        priority_high
      </span>

      <div className={styles.text}>
        데이터 로드에 실패했습니다!
        <br />왜지?
        <br />
        <br />페이지를 새로고침 해주세요.
        <br />만약 오류가 계속된다면 관리자에게 문의해주세요.
      </div>
    </div>
  )
}

export default Error;
