import React from 'react';
import './Home.css';
import Kiosk from './images/키오스크아이콘.svg';
import Dict from './images/외래어 사전 아이콘.svg';

function Home() {
  return (
    <div>
      <h1 className="Home-h1">원하는 기능을 눌러주세요</h1>
      <div className="Home-Icon">
        <img alt="kiosk" src={Kiosk} />
        <div className="Home-IconMent">키오스크 연습</div>
      </div>
      <div className="Home-Icon">
        <img alt="dictionaryIcon" src={Dict} />
        <div className="Home-IconMent">외래어 사전</div>
      </div>
    </div>
  );
}

export default Home;
