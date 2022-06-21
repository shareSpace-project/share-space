import { BookIcon, EtcIcon, GroupsIcon, MeetingIcon, PartyIcon } from '../assets';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.homeWrap}>
      <div className={styles.container}>
        <h2>
          공간을 <br /> 공유하다
        </h2>
        <ul className={styles.categoryWrap}>
          <li>
            <button type='button'>
              <dl>
                <dt>
                  <BookIcon />
                </dt>
                <dd>스터디</dd>
              </dl>
            </button>
          </li>
          <li>
            <button type='button'>
              <dl>
                <dt>
                  <GroupsIcon />
                </dt>
                <dd>모임</dd>
              </dl>
            </button>
          </li>
          <li>
            <button type='button'>
              <dl>
                <dt>
                  <MeetingIcon />
                </dt>
                <dd>회의</dd>
              </dl>
            </button>
          </li>
          <li>
            <button type='button'>
              <dl>
                <dt>
                  <PartyIcon />
                </dt>
                <dd>파티</dd>
              </dl>
            </button>
          </li>
          <li>
            <button type='button'>
              <dl>
                <dt>
                  <EtcIcon />
                </dt>
                <dd>기타</dd>
              </dl>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
