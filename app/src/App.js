import React from "react";

function App() {
  React.useEffect(() => {
    const href = window.location.href;
    const origin = window.location.origin;

    const path = href.replace(origin, "").replace(/\/$/, "");

    switch (path) {
      case "/":
        window.location.assign("https://jarrett.gohxiangzheng.com/");
        break;

      case "/personal-website/#/projects/mobile-app-project":
        window.location.assign(
          "https://jarrett.gohxiangzheng.com/projects/mobile-app-project"
        );
        break;

      default:
        window.location.assign("https://jarrett.gohxiangzheng.com/");
        break;
    }
  }, []);
}

export default App;
