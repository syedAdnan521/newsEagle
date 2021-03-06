import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {
 
  const [progress, setProgress] = useState(0)
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                setProgress={setProgress}
                  pageSize={12}
                  country="in"
                  key="general"
                  category="general"
                  heading="Top - Headlines"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={12}
                  country="in"
                  key="business"
                  category="business"
                  heading="Business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={12}
                  country="in"
                  key="entertainment"
                  category="entertainment"
                  heading="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={12}
                  country="in"
                  key="health"
                  category="health"
                  heading="Health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={12}
                  country="in"
                  key="science"
                  category="science"
                  heading="Science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={12}
                  country="in"
                  key="sports"
                  category="sports"
                  heading="Sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={12}
                  country="in"
                  key="technology"
                  category="technology"
                  heading="Technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  
}

export default App;
