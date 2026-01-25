import React, { useState } from 'react';
import SEO from '../components/SEO';
import { AnimatedButton } from '../components/ui/animated-button';

const FAQPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What are prefab homes?",
          answer: "Prefab homes are houses that are manufactured in a factory setting and then transported to the building site for assembly. They offer superior quality control, faster construction times, and often better energy efficiency compared to traditional on-site construction."
        },
        {
          question: "How long does it take to build a prefab home?",
          answer: "Our prefab homes typically take 6-8 weeks to manufacture in our factory, with on-site assembly completed in just 3-5 days. The total timeline from order to move-in is usually 10-12 weeks, depending on site preparation and customization requirements."
        },
        {
          question: "Are prefab homes as durable as traditional homes?",
          answer: "Yes, our prefab homes are built to the same or higher standards as traditional homes. They're constructed using advanced materials like SIPs (Structural Insulated Panels) and are designed to meet or exceed all UK building codes and standards."
        },
        {
          question: "Can I customize my prefab home?",
          answer: "Absolutely! We offer extensive customization options including layout modifications, finish selections, energy upgrades, and smart home integrations. Our design team works with you to create a home that perfectly fits your needs and preferences."
        }
      ]
    },
    {
      title: "Design & Construction",
      faqs: [
        {
          question: "What is SIP construction?",
          answer: "SIP (Structural Insulated Panel) construction uses panels made of an insulating foam core sandwiched between two structural boards. This creates incredibly strong, energy-efficient walls that provide superior insulation and faster assembly times."
        },
        {
          question: "What house types do you offer?",
          answer: "We offer five main house types: Modular Home (flexible, expandable designs), Nordy (Scandinavian-inspired minimalist), Smart (advanced home automation), Modern (contemporary aesthetics), and Modern-B (bold architectural elements)."
        },
        {
          question: "Do you provide architectural services?",
          answer: "Yes, we have an in-house team of architects and designers who work with you to create custom designs or modify our existing models to meet your specific requirements and site conditions."
        },
        {
          question: "What's included in a turnkey package?",
          answer: "Our turnkey packages include complete structural shell, premium insulation, triple-glazed windows, mechanical ventilation, fitted kitchen, bathroom suites, flooring, smart home systems, and professional installation with commissioning."
        }
      ]
    },
    {
      title: "Energy Efficiency",
      faqs: [
        {
          question: "What energy rating do your homes achieve?",
          answer: "All our homes are designed to be highly energy efficient and many are Passive House certified. This means extremely low energy consumption for heating and cooling, resulting in minimal utility bills."
        },
        {
          question: "How much can I save on energy bills?",
          answer: "Our clients typically report 50-90% savings on heating and cooling costs compared to traditional homes. Annual energy costs are often as low as £400-600 for a complete home."
        },
        {
          question: "Do you offer solar panel integration?",
          answer: "Yes, all our homes are pre-wired for solar panel installation. We can include solar panels, battery storage, and EV charging stations as part of your energy package."
        },
        {
          question: "What heating systems do you use?",
          answer: "We primarily use air-source heat pumps with underfloor heating systems, combined with mechanical ventilation with heat recovery (MVHR) for optimal comfort and efficiency."
        }
      ]
    },
    {
      title: "Pricing & Process",
      faqs: [
        {
          question: "What's the price range for your homes?",
          answer: "Our homes start from £275,000 for Modular Home designs and go up to £395,000+ for larger Nordy models. Final pricing depends on size, customization, site conditions, and finish selections."
        },
        {
          question: "What's included in the base price?",
          answer: "Base prices include the complete structural package, standard finishes, basic mechanical systems, and standard assembly. Site preparation, utilities connections, and premium upgrades are additional."
        },
        {
          question: "Do you offer financing options?",
          answer: "We work with several financing partners to help make your prefab home affordable. We can connect you with lenders who specialize in prefab construction loans and mortgages."
        },
        {
          question: "What's the payment schedule?",
          answer: "Typically, we require a 10% deposit to begin design, 40% at manufacturing start, 40% at delivery, and 10% upon completion. Payment schedules can be customized based on your financing arrangements."
        }
      ]
    },
    {
      title: "Installation & Warranty",
      faqs: [
        {
          question: "Do you handle site preparation?",
          answer: "We can coordinate site preparation including foundation work, utilities connections, and access roads. We work with trusted local contractors to ensure everything is ready for your home's arrival."
        },
        {
          question: "What warranty do you provide?",
          answer: "We provide a comprehensive 10-year structural warranty, 2-year warranty on mechanical systems, and 1-year warranty on finishes. Extended warranty options are available for additional peace of mind."
        },
        {
          question: "What happens if there's an issue after installation?",
          answer: "We provide comprehensive after-sales support including a dedicated customer service team, maintenance guidance, and prompt response to any warranty issues that may arise."
        },
        {
          question: "Do you service areas outside the UK?",
          answer: "Currently, we focus on the UK market to ensure the highest quality service and support. We're exploring expansion opportunities and may serve additional markets in the future."
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Get answers to common questions about prefab homes, construction process, energy efficiency, pricing, warranties, and more."
        url="/faq"
      />
      <div className="bg-white">
      <div className="pt-20">
        {/* Hero Section */}
      <section 
        className="py-20 bg-gray-900 relative overflow-hidden"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        
        <div className="w-full px-4 sm:px-5 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-thin">FREQUENTLY ASKED QUESTIONS</div>
            <h1 className="text-5xl md:text-6xl font-heading font-thin text-white mb-6 leading-tight">
              Everything You Need to Know
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-body font-normal">
              Find answers to the most common questions about our prefab homes, 
              construction process, and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="w-full">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-thin text-gray-800 mb-8 pb-4 border-b border-gray-200">
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between rounded-lg"
                        >
                          <span className="font-thin text-gray-800">{faq.question}</span>
                          <svg
                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                              openFAQ === globalIndex ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {openFAQ === globalIndex && (
                          <div className="px-6 py-4 bg-white border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pt-8 md:pt-20 pb-20 bg-gray-50">
        <div className="w-full px-4 sm:px-5">
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our expert team is here to help. Get in touch for personalized answers 
              and guidance on your prefab home project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                asLink={true}
                href="/contact"
                variant="yellow"
                className="px-8 py-3 font-thin text-sm sm:text-base md:text-lg w-full sm:w-auto text-center"
              >
                Contact Our Experts
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href="tel:+447495788669"
                variant="white"
                className="px-8 py-3 font-thin text-sm sm:text-base md:text-lg"
              >
                Call +44 7495788669
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
  );
};

export default FAQPage;