import React from "react";

import Content from "./components/Content";
import Menu from "./components/Menu";
import menuList from "./menuList";

const App = () => {
  return (
    <div className="App">
      <Menu menuList={menuList} />
      <Content />
    </div>
  );
};

export default App;
