const transcript = [
  {
    time: "00:25 min",
    speaker: "Customer",
    tags: ["Customer Verification", "Selective Redaction", "Balance Mention"],
    message: "my SSN is ****-**-**** and my email address is ****@*********"
  },
  {
    time: "00:35 min",
    speaker: "Agent",
    tags: ["Balance Mention", "Selective Redaction"],
    message: "Thanks for verifying, your balance amount is fifty dollars and will be credited to your account ending with **** *** **** **** within five to seven business days"
  },
  {
    time: "00:45 min",
    speaker: "Customer",
    tags: [],
    message: "Thank you for the information"
  },
  {
    time: "01:15 min",
    speaker: "Agent",
    tags: [],
    message: "Is there anything else I can help you with today?"
  },
  {
    time: "01:20 min",
    speaker: "Customer",
    tags: [],
    message: "No, that's all. Thank you."
  }
];

const tagClass = "bg-gray-100 text-gray-800 font-semibold px-2 py-0.5 rounded-full text-xs ml-2";

export default function Transcript() {
  return (
    <div className="space-y-8">
      {transcript.map((line, idx) => (
        <div key={idx} className="flex items-start gap-0">
          {/* Vertical bar */}
          <div className={`w-1 rounded ${line.speaker === "Agent" ? "bg-blue-200" : "bg-green-200"} mt-0 mr-4`} style={{ minHeight: '100%' }} />
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2 mb-1">
              <span className="italic text-gray-400 font-mono text-[16px]">{line.time}</span>
              <span className="italic text-gray-400 font-mono text-[16px]">{line.speaker}</span>
              {line.tags.map((tag) => (
                <span key={tag} className={tagClass}>{tag}</span>
              ))}
            </div>
            <div className="text-[17px] text-gray-900 whitespace-pre-line">
              {line.message}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 