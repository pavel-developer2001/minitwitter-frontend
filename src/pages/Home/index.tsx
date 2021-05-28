import React from "react";
import MyLayout from "../../components/MyLayout";
import TweetList from "../../components/TweetList";
import FormAddTweet from "../../components/FormAddTweet";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <MyLayout>
        <header className='home__header'>Главная</header>
        <FormAddTweet />
        <TweetList />
      </MyLayout>
    </div>
  );
};

export default Home;
