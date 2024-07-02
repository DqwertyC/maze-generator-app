import "./App.css";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const [className, setClassName] = React.useState("game-narrow");

  const { height, width } = useWindowDimensions();

  const { unityProvider } = useUnityContext({
    loaderUrl: "unity/PlayerBuild.loader.js",
    dataUrl: "unity/PlayerBuild.data",
    frameworkUrl: "unity/PlayerBuild.framework.js",
    codeUrl: "unity/PlayerBuild.wasm",
  });

  React.useEffect(() => {
    const aspect = height / width;
    if (aspect > 1.2) setClassName("game-narrow");
    else setClassName("game-wide");
  }, [width, height]);

  return (
    <div className="App">
      <Unity className={className} unityProvider={unityProvider} />
    </div>
  );
}

export default App;
