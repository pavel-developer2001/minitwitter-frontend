import { Avatar, Image } from "antd";
import PageHeader from "antd/lib/page-header";
import React from "react";
import { useHistory } from "react-router-dom";
import MyLayout from "../../components/MyLayout";
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

import "./Profile.css";

const Profile = () => {
  const history = useHistory();
  return (
    <div>
      <MyLayout>
        <PageHeader
          className='site-page-header profile__header'
          onBack={() => history.push("/")}
          title='Dark Side'
          subTitle='0 твитов'
        />
        <div className='profile__head'>
          <Avatar
            size={128}
            src={
              <Image src='https://i.pinimg.com/736x/b3/d7/8f/b3d78f0bc71acdd0a4be282e7ade3e2a.jpg' />
            }
            icon={<UserOutlined />}
          />
          <Title>Dark Side</Title>
        </div>
      </MyLayout>
    </div>
  );
};

export default Profile;
