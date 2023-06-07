import ConnectionsComponent from "components/ConnectionsComponent";
import CoursesComponent from "components/CoursesComponent";
import IndividualPost from "components/IndividualPost";
import PostElement from "components/PostElement";
import { FeedsResponseInterface } from "interfaces/feeds";
import React from "react";
import { handleAxiosError } from "services/api/handleAxiosError";
import { getFeedsService } from "services/endpoints/user";

const Home = () => {
  const [feeds, setFeeds] = React.useState<FeedsResponseInterface[]>([]);
  const onGettingFeeds = () => {
    getFeedsService()
      .then((res) => {
        setFeeds(res.data.posts);
      })
      .catch((error) => {
        handleAxiosError(error);
      });
  };

  React.useEffect(() => {
    onGettingFeeds();
  }, []);

  return (
    <div className="home-layout">
      <div>
        <PostElement />

        {feeds.map((feed, index) => 
          <IndividualPost feedsResponseInterface={feed} key={feed.uid + index} />
        )}
      </div>
      <div className="min-h-[40vh] bg-[#ffffff] p-6 rounded-md">
        <CoursesComponent />
        <div className="mt-8">
          <ConnectionsComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
