import React from "react";
import Avatar from "antd/lib/avatar";
import { UserOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";
import "./AdviceUser.css";

const AdviceUserItem = () => {
  return (
    <div className='advice-user-item'>
      <Avatar size='large' icon={<UserOutlined />} />
      <strong className='tweet-list-item__head-name advice-user-item__author'>
        АйтиБорода
      </strong>
      <Button type='default' className='advice-user-item__btn' size='large'>
        Читать
      </Button>
    </div>
  );
};
const AdviceUser = () => {
  return (
    <div className='advice-user'>
      <AdviceUserItem />
      <AdviceUserItem />
      <AdviceUserItem />
    </div>
  );
};

export default AdviceUser;
