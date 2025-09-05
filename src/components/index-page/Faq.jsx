import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How accurate are the income estimates?",
    answer:
      "Our estimates are based on industry-standard CPM rates, view counts, and engagement metrics. While we can't know exact earnings, our algorithm provides realistic ranges based on publicly available data and YouTube's monetization patterns.",
  },
  {
    question: "What factors determine YouTube income?",
    answer:
      "YouTube income depends on several factors including view count, audience demographics, content category, engagement rate, ad placement, and seasonal trends. Our tool considers all these variables to provide comprehensive estimates.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, our YouTube income estimator is completely free to use. You can analyze as many channels as you want without any limitations or registration requirements.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "We update our data regularly to ensure accuracy. Channel statistics are refreshed multiple times per day, and our algorithm continuously improves based on the latest YouTube monetization trends.",
  },
  {
    question: "Can I analyze my own channel?",
    answer:
      "Many creators use our tool to benchmark their performance against similar channels and understand their earning potential. It's a great way to track your progress and set realistic income goals.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-12 md:py-20" id="faq">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Everything you need to know about YouTube income estimation
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-slate-50 transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                      openItems.includes(index) ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openItems.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 text-slate-600 text-sm md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
