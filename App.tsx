import React, { Fragment } from "react";
import { Home } from "./src/screens/Home";
import { StatusBar } from "react-native";
export default function App(): React.ReactElement {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Home />
    </Fragment>
  );
}
