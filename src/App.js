import "./App.css";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "unity/PlayerBuild.loader.js",
    dataUrl: "unity/PlayerBuild.data",
    frameworkUrl: "unity/PlayerBuild.framework.js",
    codeUrl: "unity/PlayerBuild.wasm",
  });

  return (
    <div className="App">
      <div className="game-container">
        <Unity className="game" unityProvider={unityProvider} />
      </div>
    </div>
  );
}

export default App;
