import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.app}>
      <h1>
        공간을 <br /> 공유하다
      </h1>
      <div className={styles.container}>
        <ul className={styles.box}>
          <li className={styles.aa}>파티</li>
          <li>스터디</li>
          <li>모임</li>
          <li>회의</li>
          <li>기타</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
