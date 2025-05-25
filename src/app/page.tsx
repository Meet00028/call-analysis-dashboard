import React from "react";
import MomentsSidebar from "../components/MomentsSidebar";
import QAEvaluationForm from "../components/QAEvaluationForm";
import CallTimeline from "../components/CallTimeline";
import Transcript from "../components/Transcript";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Bar: Call Label and Timeline Controls */}
      <div className="flex items-center justify-between h-12 bg-white border-b px-6 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span role="img" aria-label="call">📞</span> Call
        </div>
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><polygon points="5,3 19,10 5,17" /></svg>
          </button>
          <span className="text-sm font-mono">00:45 / 01:45</span>
          <span className="text-xs border rounded px-2 py-0.5 bg-gray-100">1X</span>
        </div>
      </div>
      {/* Navigation Tabs */}
      <header className="h-12 bg-white border-b flex items-center px-6 shadow-sm z-10">
        <div className="flex gap-8 items-center">
          <span className="font-bold text-lg">Scorecard</span>
          <span className="text-gray-500">Interactions</span>
          <span className="text-gray-500">Leaderboard</span>
          <span className="text-gray-500">Analyze</span>
          <span className="text-gray-500">Moments</span>
          <span className="text-gray-500">Evaluations</span>
          <span className="text-gray-500">Coaching</span>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 flex flex-row gap-4 px-4 py-6 max-w-screen-2xl mx-auto w-full">
        {/* Left Sidebar: Moments/Compliance */}
        <aside className="w-1/4 min-w-[260px] max-w-xs bg-white rounded-lg shadow p-4 h-fit self-start">
          <MomentsSidebar />
        </aside>
        {/* Center: Timeline & Transcript */}
        <section className="flex-1 flex flex-col gap-4">
          {/* Timeline Event Labels */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs text-gray-500 px-2">
              <span>Meaningful Greeting</span>
              <span>Customer Verification</span>
              <span>Balance Mention</span>
              <span>Selective Redaction</span>
              <span>Data Mention</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 min-h-[120px] flex items-center justify-center">
              <CallTimeline />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex-1 min-h-[300px] text-gray-700">
            <Transcript />
          </div>
        </section>
        {/* Right Sidebar: QA Evaluation Form */}
        <aside className="w-1/4 min-w-[260px] max-w-xs bg-white rounded-lg shadow p-4 h-fit self-start">
          <QAEvaluationForm />
        </aside>
      </main>
    </div>
  );
}
