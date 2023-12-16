import React from "react";
import { data } from "../constants/dummyData";
import BasicCard from "../components/Card";

function Home() {
  return (
    <div>
      <div className="d-flex flex-wrap">
        {data.map((elem, i) => (
          <BasicCard key={i} product={elem} />
        ))}
      </div>
    </div>
  );
}

export default Home;
