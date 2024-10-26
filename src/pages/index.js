import React from "react";

function HomePage() {
  React.useEffect(() => {
    if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
      window.location.href = "/docs/intro/";
    } else {
      window.location.href = "https://sales-and-dungeons.app";
    }
  }, []);

  return null;
}

export default HomePage;
