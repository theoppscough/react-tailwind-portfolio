import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fitness & Nutrition Tracker",
    description:
      "Developed a web application using React and Firebase to help users log meals, monitor macros, and visualize weight trends over time. Focused on intuitive UX and wellness tracking.",
    image: "/projects/fitness-tracker.png",
    tags: ["React", "Firebase", "Tailwind CSS", "HealthTech"],
    demoUrl: "https://your-live-demo-url.com", // Replace with actual URL
    githubUrl: "https://github.com/theoppscough/ist363/tree/main/project3",
  },
  {
    id: 2,
    title: "AI-Powered React-to-Swift Translator",
    description:
      "During my internship, I created an AI tool using Claude 3 and AWS Titan that automatically translated React components into Swift UI code — reducing manual conversion time by 8+ hours per feature.",
    image: "/projects/translator.png",
    tags: ["AI", "Claude 3", "AWS Titan", "React", "Swift"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Education Equity Visualization (Syracuse University)",
    description:
      "Led a data visualization project using R and ggplot2 to analyze how race, parental education, and income affect academic outcomes. Presented findings at Syracuse iSchool’s Data Showcase.",
    image: "/projects/education-data.png",
    tags: ["R", "ggplot2", "Data Equity", "Public Education"],
    demoUrl: "",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Inclusive Demographics Dashboard (ASU STEER Lab)",
    description:
      "Designed an interactive Tableau dashboard highlighting student demographic inclusivity metrics. Presented as part of a research poster at Arizona State University's symposium.",
    image: "/REUPosterPIC.png",
    tags: ["Tableau", "Data Visualization", "Inclusion", "Education"],
    demoUrl: "/REUPoster.pdf",
    githubUrl: "https://labs.engineering.asu.edu/steer/",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/theoppscough/"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};