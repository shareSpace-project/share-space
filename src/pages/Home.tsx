import { BookIcon, EtcIcon, GroupsIcon, MeetingIcon, PartyIcon } from '../assets';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.homeWrap}>
      <h2>
        공간을 <br /> 공유하다
      </h2>
      <div className={styles.container}>
        <ul className={styles.box}>
          <li>
            <dl>
              <dt>
                <BookIcon />
              </dt>
              <dd>스터디</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <GroupsIcon />
              </dt>
              <dd>모임</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <MeetingIcon />
              </dt>
              <dd>회의</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <PartyIcon />
              </dt>
              <dd>파티</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <EtcIcon />
              </dt>
              <dd>기타</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
