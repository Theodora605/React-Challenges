import { useState, lazy, Component, Suspense } from "react";
import "./LazyLoadExample.css";

const LazyLoadExampleContent = lazy(() =>
  delayForDemo(import("./LazyLoadExampleContent.tsx"))
);

// Add a fixed delay so you can see the loading state
// Typically, just lazy( () => import(...) ) does the trick
function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export const LazyLoadExample = () => {
  return (
    <div>
      <h1>News Feed</h1>
      <div className="content-pane">
        <Suspense fallback={<p>Loading</p>}>
          <LazyLoadExampleContent />
        </Suspense>
      </div>
    </div>
  );
};
