import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import useGoogle from "../hooks/useGoogle";
import useSearch from "../hooks/useSearch";
import useVideos from "../hooks/useVideos";
import Google from "./Google";
import Header from "./Header";
import Route from "./Route";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
  const [results, search] = useSearch("programming");
  const [videos, searchVid] = useVideos("programming");
  const [googleResults, searchGoogle] = useGoogle("music");

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <HashRouter>
        <SearchBar
          onFormSubmit={search}
          onFormSubmitYou={searchVid}
          onFormSubmitGoogle={searchGoogle}
        />
        <Header />

        <Route exact path="/">
          <SearchList results={results} />
        </Route>

        <Route exact path="/youtube">
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
              </div>
            </div>
          </div>
        </Route>

        <Route exact path="/google">
          <Google googleResults={googleResults} />
        </Route>
      </HashRouter>
    </div>
  );
};

export default App;
