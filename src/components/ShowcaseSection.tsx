import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShowcaseSection = () => {
  const showcases = [
    {
      href: "https://raphael.app/",
      image: "https://r2.trys.ai/imgs/1kk9lxwb9-1737207119911.png",
      title: "Raphael AI",
      description: "Create stunning AI-generated images in seconds"
    },
    {
      href: "https://sitesnapper.app/",
      image: "https://r2.trys.ai/imgs/2g3jgkjtf-1736839117330.png", 
      title: "SiteSnapper",
      description: "Capture Any Website in One Click"
    },
    {
      href: "https://seocombine.com/",
      image: "https://r2.trys.ai/imgs/mflhkm6l-1736839653679.png",
      title: "SEO Combine", 
      description: "All SEO Tools Combined in One Place"
    },
    {
      href: "https://trendsbar.net/",
      image: "https://r2.trys.ai/imgs/1redymxtb-1736000525029.png",
      title: "TrendsBar",
      description: "Google Trends Analysis Tool"
    },
    {
      href: "https://deepseekartifacts.com/",
      image: "https://r2.trys.ai/imgs/xoi8kez7-1736839846050.png",
      title: "Deepseek Artifacts",
      description: "Create React Apps Using the World's Leading Open-Source Model"
    }
  ];

  return (
    <section id="showcase" className="py-16">
      <div className="container">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <h2 className="mb-2 text-pretty text-3xl font-bold lg:text-4xl">
            AI SaaS Startups built with ShipAny
          </h2>
          <div className="shrink-0 gap-2 md:flex">
            <Button variant="ghost" size="icon" disabled>
              <ArrowLeft className="size-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex container ml-[calc(theme(container.padding)-20px)] mr-[calc(theme(container.padding))] 2xl:ml-[calc(50vw-700px+theme(container.padding)-20px)] 2xl:mr-[calc(50vw-700px+theme(container.padding))]">
              {showcases.map((showcase, index) => (
                <div key={index} className="min-w-0 shrink-0 grow-0 basis-full max-w-[320px] pl-[20px] lg:max-w-[360px]">
                  <a href={showcase.href} target="_blank" className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6">
                    <div>
                      <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                        <div className="flex-1">
                          <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                            <img 
                              src={showcase.image} 
                              alt={showcase.title} 
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                      {showcase.title}
                    </div>
                    <div className="mb-2 line-clamp-2 text-sm text-muted-foreground md:mb-2 md:text-base lg:mb-2">
                      {showcase.description}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;