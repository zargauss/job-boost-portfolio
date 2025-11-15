import { ReactNode } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectLayoutProps {
  children: ReactNode;
}

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  const navigate = useNavigate();

  const handleBackToPortfolio = () => {
    navigate("/");
    // Scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Button 
              variant="ghost" 
              className="mb-6"
              onClick={handleBackToPortfolio}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au portfolio
            </Button>
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProjectLayout;

