import React, { useEffect, useState } from "react";

import BasicCard from "../components/Card";
import axios from "axios";
import { Spinner } from "react-bootstrap";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3001/api/v1/products");
      console.log(response);
      setData(response.data);
      setLoading(false);
    })();
    
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="d-flex flex-wrap">
          {data.map((elem, i) => (
            <BasicCard key={i} product={elem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
