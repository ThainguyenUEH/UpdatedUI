import React from "react";
import HomeSlide from "../Components/HomeSlide/HomeSlide";
import HomeNew from "../Components/HomeNew/HomeNew";
import HomeCategory from "../Components/HomeCategory/HomeCategory";
import HomeNews from "../Components/HomeNews/HomeNews";
import HomeIntroduce from "../Components/HomeIntroduce/HomeIntroduce";
import HomePopular from "../Components/HomePopular/HomePopular";

const Home = () => {
  return (
    <div>
      <HomeSlide/>
      <HomeNew/>
      <HomeCategory/>
      <HomePopular/>
      <HomeNews/>
      <HomeIntroduce/>
    </div>
  )
}

export default Home
