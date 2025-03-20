import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

export default function MyAccordion({ className } : { className?: string }) {
  return (
    <div className={className}>
        <Accordion type="single" collapsible className="w-full max-w-[400px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It ddfdfdfffdfd to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  );
}