import { BrainCircuit, Briefcase, Code, Database, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Creative Technologist & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I'm a recent graduate in Information Management & Technology 
              from Syracuse University with a passion for building tech 
              solutions that support health, equity, and innovation. 
            </p>

            <p className="text-muted-foreground">
                From developing a nutrition-tracking web app with React and 
                Firebase, to creating a React-to-Swift AI tool during my 
                SWE internship, I bring technical versatility and a 
                user-centered mindset to every project.
</p>

            <p className="text-muted-foreground">
                My work spans frontend development, AI automation, and 
                data storytelling — driven by a desire to build meaningful 
                tools that help people thrive.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Resume.docx.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">

                  <h4 className="font-semibold text-lg">Data Visualization</h4>
                    <p className="text-muted-foreground">
                    Translating complex data into clear insights using R, 
                    ggplot2, Tableau, and design best practices — showcased in 
                    academic and applied research.
                    </p>


                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">

                  <h4 className="font-semibold text-lg">AI & Automation</h4>
                    <p className="text-muted-foreground">
                    Built internal tools with Claude 3 and AWS Titan to 
                    automate code conversion and boost developer efficiency 
                    during my internship.
                    </p>


                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">

                  <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                    Creating scalable, responsive apps using React, Firebase, and 
                    Tailwind — with a focus on user experience and accessibility.
                    </p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};