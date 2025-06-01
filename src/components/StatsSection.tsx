const StatsSection = () => {
  const stats = [
    {
      label: "Trusted by",
      value: "250+",
      description: "Customers"
    },
    {
      label: "Built in", 
      value: "30+",
      description: "Components"
    },
    {
      label: "Ship Fast in",
      value: "5",
      description: "Minutes"
    }
  ];

  return (
    <section id="stats" className="py-16">
      <div className="container flex flex-col items-center gap-4">
        <div className="flex items-center gap-1 text-sm font-semibold text-primary">Stats</div>
        <h2 className="text-center text-3xl font-semibold lg:text-4xl">People Love ShipAny</h2>
        <p className="text-center text-muted-foreground lg:text-lg">for it's easy to use and fast to ship.</p>
        <div className="w-full grid gap-10 md:grid-cols-3 lg:gap-0 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-lg font-semibold text-muted-foreground">{stat.label}</p>
              <p className="pt-2 text-7xl font-semibold lg:pt-4 text-primary">{stat.value}</p>
              <p className="text-xl mt-2 font-normal text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;