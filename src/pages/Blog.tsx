import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import diyRepairsImg from "@/assets/blog/diy-repairs.jpg";
import foundationProblemsImg from "@/assets/blog/foundation-problems.jpg";
import repairCostsImg from "@/assets/blog/repair-costs.jpg";
import seasonalMaintenanceImg from "@/assets/blog/seasonal-maintenance.jpg";
import repairVsReplaceImg from "@/assets/blog/repair-vs-replace.jpg";
import warrantyInsuranceImg from "@/assets/blog/warranty-insurance.jpg";
import commonRepairsImg from "@/assets/blog/common-repairs.jpg";
import chooseContractorImg from "@/assets/blog/choose-contractor.jpg";
import emergencyRepairsImg from "@/assets/blog/emergency-repairs.jpg";
import homeValueRoiImg from "@/assets/blog/home-value-roi.jpg";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const articles = [
    {
      id: 1,
      title: "10 Home Repairs You Should Never DIY",
      description: "Some repairs require professional expertise. Learn which projects to leave to the experts to avoid costly mistakes and safety hazards.",
      category: "Home Repairs",
      readingTime: "5 min",
      image: diyRepairsImg
    },
    {
      id: 2,
      title: "How to Identify Foundation Problems Before They Become Catastrophic",
      description: "Early detection can save thousands. Discover the warning signs of foundation issues and when to call a professional.",
      category: "Structural",
      readingTime: "7 min",
      image: foundationProblemsImg
    },
    {
      id: 3,
      title: "The True Cost of Delaying Home Repairs: A Breakdown",
      description: "Understanding how small problems become expensive disasters. Real examples of repair costs over time.",
      category: "Home Maintenance",
      readingTime: "4 min",
      image: repairCostsImg
    },
    {
      id: 4,
      title: "Seasonal Home Maintenance Checklist for Every Homeowner",
      description: "Stay ahead of problems with our comprehensive seasonal maintenance guide for Florida homes.",
      category: "Home Maintenance",
      readingTime: "6 min",
      image: seasonalMaintenanceImg
    },
    {
      id: 5,
      title: "When to Repair vs. Replace: A Guide for Major Home Systems",
      description: "Making smart decisions about your HVAC, roof, appliances, and more. Cost comparisons and lifespan expectations.",
      category: "Home Systems",
      readingTime: "8 min",
      image: repairVsReplaceImg
    },
    {
      id: 6,
      title: "Understanding Home Warranty vs. Homeowners Insurance",
      description: "Know what's covered and what's not. Essential information every homeowner needs.",
      category: "Insurance",
      readingTime: "5 min",
      image: warrantyInsuranceImg
    },
    {
      id: 7,
      title: "The Most Common Home Repairs and How to Prevent Them",
      description: "Prevention is cheaper than repair. Learn how to avoid the most frequent home issues.",
      category: "Home Maintenance",
      readingTime: "6 min",
      image: commonRepairsImg
    },
    {
      id: 8,
      title: "How to Choose a Contractor: Red Flags and Green Lights",
      description: "Protect yourself from scams and ensure quality work. What to look for when hiring professionals.",
      category: "Tips & Advice",
      readingTime: "5 min",
      image: chooseContractorImg
    },
    {
      id: 9,
      title: "Emergency Home Repairs: What to Do Before Help Arrives",
      description: "Quick actions that can minimize damage during plumbing leaks, power outages, and other emergencies.",
      category: "Emergency",
      readingTime: "4 min",
      image: emergencyRepairsImg
    },
    {
      id: 10,
      title: "Increasing Home Value: Which Repairs Give the Best ROI?",
      description: "Smart investments for homeowners. Which repairs and improvements offer the highest return.",
      category: "Home Value",
      readingTime: "6 min",
      image: homeValueRoiImg
    }
  ];

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(articles.map(article => article.category)));
    return ["All", ...uniqueCategories];
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") {
      return articles;
    }
    return articles.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Home Repairs": "bg-primary/10 text-primary border-primary/20",
      "Structural": "bg-destructive/10 text-destructive border-destructive/20",
      "Home Maintenance": "bg-secondary/10 text-secondary-foreground border-secondary/20",
      "Home Systems": "bg-accent text-accent-foreground border-accent/20",
      "Insurance": "bg-muted text-foreground border-border",
      "Tips & Advice": "bg-primary/10 text-primary border-primary/20",
      "Emergency": "bg-destructive/10 text-destructive border-destructive/20",
      "Home Value": "bg-secondary/10 text-secondary-foreground border-secondary/20"
    };
    return colors[category] || "bg-muted text-foreground border-border";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Tips</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert advice on home maintenance, repairs, and improvements
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 border-b bg-muted/30">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Card 
                  key={article.id} 
                  className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-background/95 backdrop-blur">
                      Coming Soon
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className={getCategoryColor(article.category)}>
                        {article.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readingTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;