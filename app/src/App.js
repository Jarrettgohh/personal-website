import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const AllRoutes = () => {
    window.location.assign("https://jarrett.gohxiangzheng.com/");
    return null;
  };

  const MobileAppProject = () => {
    window.location.assign(
      "https://jarrett.gohxiangzheng.com/projects/mobile-app-project"
    );
    return null;
  };

  const OnePABadmintonCourtsFinder = () => {
    window.location.assign(
      "https://jarrett.gohxiangzheng.com/projects/onepa-badminton-courts-finder-automation"
    );
    return null;
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/projects/mobile-app-project"
          element={<MobileAppProject />}
        />

        <Route
          path="/projects/onepa-badminton-courts-finder"
          element={<OnePABadmintonCourtsFinder />}
        />

        <Route path="*" element={<AllRoutes />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
