import React from "react";
import "./styles/NotFoundStyles.css";

const NotFoundScreen = () => {
  return (
    <main>
      <img src="./images/not_found.svg" alt="404" />
      <h1>Something went wrong ...</h1>
      <a href="http://localhost:3000/">
        <button class="btn btn-cta">
          <span>Go back</span>
        </button>
      </a>
    </main>
  );
};

export default NotFoundScreen;
