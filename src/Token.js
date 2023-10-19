import { useEffect, useState } from "react";

function Token() {
  const getParam = (name) => {
    return new URL(window.location.href).searchParams.get(name) || "";
  };
  const [param, setParam] = useState("");

  useEffect(() => {
    setParam(getParam("token"));
  }, []);
  return <div>{param}</div>;
}

export default Token;
