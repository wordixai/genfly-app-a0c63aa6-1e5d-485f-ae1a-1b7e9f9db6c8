import { Zap, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center">
          <a href="#pricing" className="mx-auto mb-3 inline-flex items-center gap-3 rounded-full border px-2 py-1 text-sm">
            <Badge className="border-transparent bg-primary text-primary-foreground hover:bg-primary/80">2025</Badge>
            🎉 Happy New Year
          </a>
          <h1 className="mx-auto mb-3 mt-4 max-w-4xl text-balance text-4xl font-bold lg:mb-7 lg:text-7xl">
            <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">Ship Any</span> AI Startups in hours, not days
          </h1>
          <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
            ShipAny is a NextJS boilerplate for building AI SaaS startups.<br />
            Ship Fast with a variety of templates and components.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="w-full h-11 px-8">
              Get Started
              <Zap className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full h-11 px-8">
              Read Document
              <BookOpen className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <p className="mt-8 text-md text-muted-foreground">🎁 $100 off for the first 1000 customers</p>
          
          <div className="mx-auto mt-8 flex w-fit flex-col items-center gap-2 sm:flex-row">
            <span className="mx-4 inline-flex items-center -space-x-2">
              {[22, 23, 24, 25, 26, 27].map((num) => (
                <span key={num} className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                  <img className="aspect-square h-full w-full" alt="user" src={`https://shipany.ai/imgs/users/${num}.png`} />
                </span>
              ))}
            </span>
            <div className="flex flex-col items-center gap-1 md:items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-left font-medium text-muted-foreground">from 250+ happy users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;