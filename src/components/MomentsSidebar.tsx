import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function MomentsSidebar() {
  return (
    <div>
      <div className="font-semibold mb-2">Moments</div>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="compliance">
          <AccordionTrigger>
            <span className="font-semibold">Compliance</span>
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="multiple" className="pl-4">
              <AccordionItem value="selective-redaction">
                <AccordionTrigger className="text-sm font-medium">Selective Redaction <span className="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">Found</span></AccordionTrigger>
                <AccordionContent>
                  <div className="text-xs text-blue-600 cursor-pointer hover:underline pl-2">Snippet 00:25 min</div>
                  <div className="text-xs text-blue-600 cursor-pointer hover:underline pl-2">Snippet 00:35 min</div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="qa-advance-moments">
          <AccordionTrigger>
            <span className="font-semibold">QA Advance Moments</span>
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="multiple" className="pl-4">
              <AccordionItem value="balance-mentions">
                <AccordionTrigger className="text-sm font-medium">Balance Mentions <span className="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">Found</span></AccordionTrigger>
                <AccordionContent>
                  <div className="text-xs text-blue-600 cursor-pointer hover:underline pl-2">Snippet 00:35 min</div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="timeline-mentions">
                <AccordionTrigger className="text-sm font-medium">Timeline Mentions <span className="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">Found</span></AccordionTrigger>
                <AccordionContent>
                  <div className="text-xs text-blue-600 cursor-pointer hover:underline pl-2">Snippet 00:35 min</div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="hold-time-violation">
          <AccordionTrigger>
            <span className="font-semibold">Hold Time Validation</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-xs text-gray-400 pl-4">No data</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="customer-complaints">
          <AccordionTrigger>
            <span className="font-semibold">Customer Complaints</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-xs text-gray-400 pl-4">No data</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
} 