import React, { useState } from "react";
// Components
import ProjectBox from "../../../ProjectBox/ProjectBox";
// Assets
import { HeaderInfo, Wrapper, Button } from "./styles";
import {data} from "../../../../data"

const Projects = () => {
  const [visible, setVisible] = useState(6);
  const [showSeeMore, setShowSeeMore] = useState(true);
  const [posts, setPosts] = useState(data.projects);

  const handleLoadMore = () => {
    setVisible(visible + 3);
    const postsLength = posts.length;
    const nowShowing = visible + 3;
    if (postsLength <= nowShowing) {
      setShowSeeMore(false);
    }
  };

  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Clients collaborating with Us</h1>
            <p className={"subtitle"}>
            Partnering with us for tailored marketing solutions and exceptional results. Hear from our clients who trust us to drive growth and engagement for their businesses.
            </p>
          </HeaderInfo>
          <div className="row textCenter">

            {posts &&
              posts.slice(0, visible).map(({id,img,title,description,link}) => {
                return(
                  <div key={id} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ProjectBox
                      img={img}
                      title={title}
                      text={description}
                      link={link}
                      action={() => alert("clicked")}
                  />
                </div>
                )
              })}
          </div>
          <div className="row flexCenter">
            {
             showSeeMore && (
              <Button onClick={handleLoadMore}> Загрузить Еще </Button>
             )
            }
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Projects;
