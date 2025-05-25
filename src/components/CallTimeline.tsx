import React from "react";

const steps = [
  { label: "Meaningful Greeting" },
  { label: "Customer Verification" },
  { label: "Selective Redaction" },
  { label: "Data Mention" },
];

const StepBox = ({ label, isLast }: { label: string; isLast: boolean }) => (
  <div className="flex items-center">
    <div className="bg-white border rounded-lg px-6 py-3 shadow-sm flex flex-col items-center min-w-[170px]">
      <div className="font-medium text-sm mb-1">{label}</div>
      <div className="flex gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-gray-300" /> Agent
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-gray-300" /> Customer
        </div>
      </div>
    </div>
    {!isLast && <div className="h-1 w-8 bg-gray-200 mx-2" />}
  </div>
);

export default function CallTimeline() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Stepper */}
      <div className="flex items-center justify-center w-full">
        {steps.map((step, i) => (
          <StepBox key={step.label} label={step.label} isLast={i === steps.length - 1} />
        ))}
      </div>
      {/* Play button + Progress bar */}
      <div className="w-full flex items-center mt-4 px-2">
        {/* Play Button */}
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 border border-gray-300 mr-3 hover:bg-gray-200">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" className="text-gray-700"><polygon points="6,4 16,10 6,16" /></svg>
        </button>
        <span className="text-xs text-gray-500 font-mono mr-2">00:45</span>
        <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
          <div className="absolute left-0 top-0 h-2 bg-black rounded-full" style={{ width: '40%' }} />
        </div>
        <span className="text-xs text-gray-500 font-mono ml-2">01:45</span>
        <span className="ml-4 text-xs border rounded px-2 py-0.5 bg-gray-100">1X</span>
      </div>
    </div>
  );
} 