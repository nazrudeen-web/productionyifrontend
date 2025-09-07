import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import {
  publishedDate,
  getReadableTopicsAll,
  toTitleCase,
} from "@/utils/helper";

export default function ChannelFAQ({ data }) {
  const [openItems, setOpenItems] = useState([0]);

  const formatUSD = (amount) => {
    if (amount < 1000000) {
      return (
        "$" +
        new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(amount)
      );
    } else {
      const millionAmount = amount / 1000000;
      const rounded = Math.round(millionAmount * 10) / 10;
      return (
        "$" +
        (Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(1)) +
        " million"
      );
    }
  };

  const countryName = new Intl.DisplayNames(["en"], { type: "region" }).of(
    data.country
  );

  const faqs = [
    {
      question: `How much does ${toTitleCase(data.title)} earn each month?`,
      answer: `The monthly income of ${toTitleCase(
        data.title
      )} depends on several factors, including ad revenue, viewer location, CPM rates, and sponsorship deals. Based on average views, the estimated monthly earnings are ${formatUSD(
        data.monthlyIncome
      )}.`,
    },
    {
      question: `What type of content does ${toTitleCase(data.title)} create?`,
      answer: `${toTitleCase(
        data.title
      )} focuses on content related to ${getReadableTopicsAll(
        data.topicCategories
      )}. The channel's style and topics may evolve over time to keep things fresh and engaging for its audience.`,
    },
    {
      question: `Where is ${toTitleCase(data.title)} based?`,
      answer: `This channel is registered in ${countryName} and has a global reach, connecting with viewers from all around the world.`,
    },
    {
      question: `When was ${toTitleCase(data.title)} started on YouTube?`,
      answer: `${toTitleCase(
        data.title
      )} launched the channel on ${publishedDate(
        data.publishedAt
      )} and has steadily grown since then.`,
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

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Card>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
          <HelpCircle className="h-5 w-5" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm sm:text-base leading-relaxed">
        {faqs.map((faq, index) => (
          <Collapsible
            key={index}
            open={openItems.includes(index)}
            onOpenChange={() => toggleItem(index)}
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-slate-200 p-4 text-left hover:bg-slate-50">
              <span className="font-medium text-slate-900">{faq.question}</span>
              <ChevronDown
                className={`h-4 w-4 text-slate-500 transition-transform ${
                  openItems.includes(index) ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-4">
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
}
