import React, { Fragment } from "react";
import FilterBar from "../features/FilterBar";
import Gallery from "./../components/Gallery";

const HomePage = () => {
  return (
    <Fragment>
      <FilterBar>
        <Gallery />
      </FilterBar>
    </Fragment>
  );
};

export default HomePage;
