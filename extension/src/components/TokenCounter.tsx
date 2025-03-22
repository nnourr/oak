import React from "react";

interface TokenCounterProps {
  prompts: number;
  onReset: () => void;
}

const TokenCounter: React.FC<TokenCounterProps> = ({ prompts, onReset }) => {
  console.log("[TokenCounter] Rendering with props", {
    prompts,
  });
  return (
    <div className="token-counter">
      <h2 className="text-base font-medium mb-2">Token Usage</h2>

      <div className="bg-white rounded p-3 shadow-sm mb-4">
        <div className="flex justify-between py-1">
          <span>Total Prompts:</span>
          <span className="font-medium">{prompts.toLocaleString()}</span>
        </div>

        <div className="flex justify-between py-1 mt-1 pt-1 border-t border-gray-200 font-bold">
          <span>Carbon Footprint:</span>
          <span>TODO</span>
        </div>
      </div>

      <button
        className="w-full py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        onClick={() => {
          console.log("[TokenCounter] Reset button clicked");
          onReset();
        }}
      >
        Reset Counters
      </button>
    </div>
  );
};

export default TokenCounter;
