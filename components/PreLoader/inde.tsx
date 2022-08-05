import * as React from "react";

interface PreLoaderProps {}

const PreLoader: React.FC<PreLoaderProps> = () => {
  return (
    <div className="pre-loader">
      <div className="ball one" />
      <div className="ball two" />
      <div className="ball three" />
    </div>
  );
};

export default PreLoader;
