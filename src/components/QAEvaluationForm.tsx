import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function QAEvaluationForm() {
  return (
    <div className="space-y-4">
      {/* Customer Authentication */}
      <Card className="w-full shadow-sm rounded-xl">
        <CardHeader>
          <CardTitle className="text-base flex justify-between items-center font-bold">
            <span>Customer Authentication</span>
            <span className="text-xs text-gray-500 font-normal">10 pts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-sm">
          <div className="bg-gray-50 rounded px-3 py-2">Authentication process completed successfully</div>
          <div className="bg-gray-50 rounded px-3 py-2">Customer verified using SSN and email</div>
          <div className="bg-gray-50 rounded px-3 py-2">All required fields validated</div>
        </CardContent>
      </Card>
      {/* Process Adherence */}
      <Card className="w-full shadow-sm rounded-xl border border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-base flex justify-between items-center font-bold">
            <span>Process Adherence</span>
            <span className="text-xs text-gray-500 font-normal">40 pts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {/* Question 1 */}
          <div className="bg-white rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span>Did the agent share the correct balance amount?</span>
              <span className="text-xs text-gray-400 ml-2">Autofail • 5 Points</span>
            </div>
            <RadioGroup defaultValue="yes" className="flex flex-col gap-2 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="q1-yes" />
                <label htmlFor="q1-yes" className="text-sm">Yes</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="q1-no" />
                <label htmlFor="q1-no" className="text-sm">No</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="na" id="q1-na" />
                <label htmlFor="q1-na" className="text-sm">N/A</label>
              </div>
            </RadioGroup>
          </div>
          {/* Question 2 */}
          <div className="bg-white rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span>Did the agent share the correct timelines with the customer?</span>
              <span className="text-xs text-gray-400 ml-2">Autofail • 5 Points</span>
            </div>
            <RadioGroup defaultValue="yes" className="flex flex-col gap-2 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="q2-yes" />
                <label htmlFor="q2-yes" className="text-sm">Yes</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="q2-no" />
                <label htmlFor="q2-no" className="text-sm">No</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="na" id="q2-na" />
                <label htmlFor="q2-na" className="text-sm">N/A</label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
      {/* Communication Skills */}
      <Card className="w-full shadow-sm rounded-xl">
        <CardHeader>
          <CardTitle className="text-base flex justify-between items-center font-bold">
            <span>Communication Skills</span>
            <span className="text-xs text-gray-500 font-normal">25 pts</span>
          </CardTitle>
        </CardHeader>
      </Card>
      {/* Problem Resolution */}
      <Card className="w-full shadow-sm rounded-xl">
        <CardHeader>
          <CardTitle className="text-base flex justify-between items-center font-bold">
            <span>Problem Resolution</span>
            <span className="text-xs text-gray-500 font-normal">15 pts</span>
          </CardTitle>
        </CardHeader>
      </Card>
      {/* Call Closure */}
      <Card className="w-full shadow-sm rounded-xl">
        <CardHeader>
          <CardTitle className="text-base flex justify-between items-center font-bold">
            <span>Call Closure</span>
            <span className="text-xs text-gray-500 font-normal">10 pts</span>
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
} 