import { useState } from "react";
import { ChevronDown, Zap, Sparkles, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BenefitsSection = () => {
  const benefits = [
    {
      id: "framework",
      icon: <Zap className="size-5 shrink-0 lg:size-6" />,
      title: "Complete Framework",
      content: "Built on Next.js with authentication, payments, and AI integration - everything works out of the box.",
      image: "https://shipany.ai/imgs/features/11.png",
      alt: "Complete Framework"
    },
    {
      id: "templates",
      icon: <Sparkles className="size-5 shrink-0 lg:size-6" />,
      title: "Rich Templates Library",
      content: "Access to dozens of production-ready templates for various AI SaaS use cases.",
      image: "https://shipany.ai/imgs/features/12.png",
      alt: "Rich Templates Library"
    },
    {
      id: "guidance",
      icon: <Code className="size-5 shrink-0 lg:size-6" />,
      title: "Technical Guidance",
      content: "Comprehensive documentation and support to help you build and deploy successfully.",
      image: "https://shipany.ai/imgs/features/13.png",
      alt: "Technical Guidance"
    }
  ];

  return (
    <section id="benefit" className="py-32">
      <div className="container">
        <div className="mx-auto grid gap-20 lg:grid-cols-2">
          <div>
            <Badge className="text-foreground mb-4">Benefits</Badge>
            <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-4xl">Why Choose ShipAny</h2>
            <p className="mb-4 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              Get everything you need to launch your AI startup - from ready-to-use templates to technical support.
            </p>
            <Accordion type="single" defaultValue="framework" className="w-full">
              {benefits.map((benefit) => (
                <AccordionItem key={benefit.id} value={benefit.id} className="border-b-0 border-secondary">
                  <AccordionTrigger className="text-left data-[state=closed]:text-muted-foreground">
                    <div className="flex items-center justify-between gap-2">
                      <p className="flex size-9 items-center justify-center rounded-lg bg-muted">
                        {benefit.icon}
                      </p>
                      <span className="font-medium lg:text-lg">{benefit.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground lg:text-base">
                    {benefit.content}
                    <div className="mt-8 h-px bg-muted">
                      <div className="h-px animate-pulse bg-primary" style={{ animationDuration: '5000ms' }}></div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="h-full flex items-center justify-center">
            <div className="relative">
              <img 
                src={benefits[0].image} 
                alt={benefits[0].alt} 
                className="max-h-auto w-full object-cover lg:max-h-none rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;