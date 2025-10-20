import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock } from "lucide-react";

const Blog = () => {
  const [email, setEmail] = useState("");

  const articles = [
    {
      id: 1,
      title: "10 Home Repairs You Should Never DIY",
      description: "Some repairs require professional expertise. Learn which projects to leave to the experts to avoid costly mistakes and safety hazards.",
      category: "Home Repairs",
      readingTime: "5 min",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "How to Identify Foundation Problems Before They Become Catastrophic",
      description: "Early detection can save thousands. Discover the warning signs of foundation issues and when to call a professional.",
      category: "Structural",
      readingTime: "7 min",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "The True Cost of Delaying Home Repairs: A Breakdown",
      description: "Understanding how small problems become expensive disasters. Real examples of repair costs over time.",
      category: "Home Maintenance",
      readingTime: "4 min",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Seasonal Home Maintenance Checklist for Every Homeowner",
      description: "Stay ahead of problems with our comprehensive seasonal maintenance guide for Florida homes.",
      category: "Home Maintenance",
      readingTime: "6 min",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "When to Repair vs. Replace: A Guide for Major Home Systems",
      description: "Making smart decisions about your HVAC, roof, appliances, and more. Cost comparisons and lifespan expectations.",
      category: "Home Systems",
      readingTime: "8 min",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Understanding Home Warranty vs. Homeowners Insurance",
      description: "Know what's covered and what's not. Essential information every homeowner needs.",
      category: "Insurance",
      readingTime: "5 min",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "The Most Common Home Repairs and How to Prevent Them",
      description: "Prevention is cheaper than repair. Learn how to avoid the most frequent home issues.",
      category: "Home Maintenance",
      readingTime: "6 min",
      image: "/placeholder.svg"
    },
    {
      id: 8,
      title: "How to Choose a Contractor: Red Flags and Green Lights",
      description: "Protect yourself from scams and ensure quality work. What to look for when hiring professionals.",
      category: "Tips & Advice",
      readingTime: "5 min",
      image: "/placeholder.svg"
    },
    {
      id: 9,
      title: "Emergency Home Repairs: What to Do Before Help Arrives",
      description: "Quick actions that can minimize damage during plumbing leaks, power outages, and other emergencies.",
      category: "Emergency",
      readingTime: "4 min",
      image: "/placeholder.svg"
    },
    {
      id: 10,
      title: "Increasing Home Value: Which Repairs Give the Best ROI?",
      description: "Smart investments for homeowners. Which repairs and improvements offer the highest return.",
      category: "Home Value",
      readingTime: "6 min",
      image: "/placeholder.svg"
    }
  ];

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
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

        {/* Blog Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
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

        {/* Newsletter Section */}
        <section className="bg-muted/50 py-16 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get monthly home maintenance tips and exclusive offers
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;