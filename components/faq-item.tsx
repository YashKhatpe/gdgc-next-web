import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Grid, Heading } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

export function FaqItem({ question, answer, className }: FaqItemProps) {
  return (
    <AccordionItem value={question} className={cn("border-b-0", className)}>
      <Heading className="p-2 text-gray-500 bg-green-500 hover:no-underline">
        dolor
      </Heading>
      <Grid className="text-blue-500 text-blue-500">sed</Grid>
    </AccordionItem>
  );
}