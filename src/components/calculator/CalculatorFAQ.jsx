import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function CalculatorFAQ() {
  const faqs = [
    {
      question: "How accurate are these calculations?",
      answer:
        "Our calculations are based on industry averages and real YouTube data. Results may vary based on content quality, audience engagement, and market conditions. Use these as estimates for planning purposes.",
    },
    {
      question: "What factors affect YouTube earnings the most?",
      answer:
        "The biggest factors are your niche (CPM rates), audience location, engagement rate, and monetization diversity. High-value niches like finance and technology typically earn more per view.",
    },
    {
      question: "How long does it really take to reach these goals?",
      answer:
        "Growth timelines vary significantly. Consistent creators with quality content typically see meaningful growth within 6-12 months, but reaching substantial income levels often takes 1-3 years of dedicated effort.",
    },
    {
      question: "Should I focus on views or subscribers?",
      answer:
        "Both matter, but engagement and watch time are more important than raw numbers. Focus on creating content that keeps viewers watching and encourages interaction.",
    },
    {
      question: "What's the best upload frequency?",
      answer:
        "Consistency matters more than frequency. Whether it's 1 video per week or 5, stick to a schedule your audience can rely on. Quality should never be sacrificed for quantity.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-white border-b border-slate-200 mt-12">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-left">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
