import React from "react";
import AdviceUser from "../AdviceUser";

import "./WhoToRead.css";

const WhoToRead = () => {
  return (
    <div className='who-to-read'>
      <h3 className='who-to-read-title'>Кого читать</h3>
      <AdviceUser />
    </div>
  );
};

export default WhoToRead;
