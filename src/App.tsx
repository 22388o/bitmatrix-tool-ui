import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreateIssueTool } from "./pages/CreateIssueTool/CreateIssueTool";
import { LdkTool } from "./pages/LdkTool/LdkTool";
import { PoolGenerateTool } from "./pages/PoolGenerateTool/PoolGenerateTool";

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PoolGenerateTool} />
        <Route exact path="/createissue" component={CreateIssueTool} />
        <Route exact path="/ldk" component={LdkTool} />
      </Switch>
    </Router>
  );
};
export default App;
