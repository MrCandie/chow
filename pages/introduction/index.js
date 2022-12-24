import React, { Fragment, useState } from "react";
import AllFavorites from "../../components/introduction/AllFavorites";
import GetMeals from "../../components/introduction/GetMeals";
import ShareMeals from "../../components/introduction/ShareMeals";

export default function Introductions() {
  const [screen, setScreen] = useState(1);
  let displayScreen;
  if (screen === 1) {
    displayScreen = <AllFavorites screen={setScreen} />;
  } else if (screen === 2) {
    displayScreen = <ShareMeals screen={setScreen} />;
  } else if (screen === 3) {
    displayScreen = <GetMeals />;
  }
  return <Fragment>{displayScreen}</Fragment>;
}
