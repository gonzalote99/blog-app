import React from "react";
import PostList from './PostList';

const App = () => {
  return (
    <div className="ui grid container">
     <img className="ui centered large image" src={"https://raw.githubusercontent.com/sameem420/JSONBlogs/a14b7ebb3e8e0154ba0a42d9a81383a73ca10432/src/assets/images/blogging.svg"} alt="Blogging" />
     <div className="ui horizontal segments">
       <PostList />
       </div>
    </div>
  );
}

export default App;