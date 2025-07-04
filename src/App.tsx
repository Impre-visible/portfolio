import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Mail, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  name: string
  description: string
  image: string | null
  stars: number
  githubUrl: string
  liveUrl: string | null
  tech: string[],
  license: string
}


export default function Component() {
  const projects: Project[] = [
    {
      id: 0,
      name: "Chocolate",
      description: "Chocolate is a free and Open Source media manager.",
      image: "https://user-images.githubusercontent.com/69050895/185436929-c80736b3-07ce-434b-ba96-d753c8e9f83c.png",
      stars: 442,
      githubUrl: "https://github.com/ChocolateApp/Chocolate",
      liveUrl: null,
      tech: ["React", "Python", "Flask", "Docker"],
      license: "GPL-3.0",
    },
    {
      id: 5,
      name: "invoicerr",
      description: "Invoicerr is a freelance-focused invoicing app that lets you create quotes, generate invoices, track payments, and collect secure signatures.",
      image: "https://private-user-images.githubusercontent.com/69050895/460251389-18e8af88-cf02-4e35-975a-d57f58d062c6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE2MTMwNTksIm5iZiI6MTc1MTYxMjc1OSwicGF0aCI6Ii82OTA1MDg5NS80NjAyNTEzODktMThlOGFmODgtY2YwMi00ZTM1LTk3NWEtZDU3ZjU4ZDA2MmM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzA0VDA3MDU1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwOTZjNjYwOWE5MDBkYjQ1YTgyYjI4ZWJmMmY1NDQwYzc5NTcwNTk2ODgxMmEyMmYxZGU5YzA0MmE3MjZhOGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.xHD6uFbigRompjtkVCYsoqslVsKsmENE7zn3qL4Zpfc",
      stars: 94,
      githubUrl: "https://github.com/Impre-visible/invoicerr",
      liveUrl: null,
      tech: ["TypeScript", "React", "Tailwind CSS", "shadcn/ui"],
      license: "AGPL-3.0",
    },
    {
      id: 1,
      name: "Pomodoro-CLI",
      description: "A simple CLI tool to manage and start pomodoro sessions",
      image: null,
      stars: 1,
      githubUrl: "https://github.com/Impre-visible/Pomodoro-CLI",
      liveUrl: null,
      tech: ["Rust", "Serde", "notify-rust"],
      license: "CC BY-SA 4.0",
    },
    {
      id: 2,
      name: "minerr",
      description: "A web application to easily create and manage minecraft servers.",
      image: null,
      stars: 1,
      githubUrl: "https://github.com/Impre-visible/minerr",
      liveUrl: null,
      tech: ["TypeScript", "React", "NestJS", "Prisma", "Docker"],
      license: "AGPL-3.0",
    },
    {
      id: 3,
      name: "resume",
      description: "Convert your Reactive Resume into a website.",
      image: null,
      stars: 1,
      githubUrl: "https://github.com/Impre-visible/resume",
      liveUrl: "https://cv.chevrier.dev",
      tech: ["TypeScript", "React", "Express", "Tailwind CSS"],
      license: "MIT",
    },
    {
      id: 4,
      name: "tartar",
      description: "A web application to rate and compare tartar dishes from different restaurants.",
      image: null,
      stars: 1,
      githubUrl: "https://github.com/Impre-visible/tartar",
      liveUrl: "https://tartar.chevrier.dev",
      tech: ["TypeScript", "React", "NestJS", "Prisma", "Docker", "Google Places API"],
      license: "AGPL-3.0",
    }
  ]


  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b border-white/20 px-6 py-4">
        <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xl font-bold">
            {"romeo_chevrier()"}
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-gray-300 transition-colors">
              about
            </a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">
              projects
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">{">"} about()</h1>
              <div className="text-xl text-gray-300">independent developer</div>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>// Développeur freelance spécialisé en application web</p>
              <p>
                Je crée des applications web performantes, pour moi, mes clients et la communauté. Passionné par le code propre et les nouvelles technologies.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["TypeScript", "React", "Angular", "NestJS", "Rust", "Python"].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                asChild
              >
                <a href="https://github.com/Impre-visible" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <a href="mailto:romeo@chevrier.dev" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-86 border-2 border-white/30 rounded-lg bg-black p-4 font-mono text-xs overflow-hidden">
                <div className="text-green-400 mb-1">romeo@dev:~$ whoami</div>
                <div className="text-white mb-1">Full-Stack Developer</div>
                <div className="text-green-400 mb-1">romeo@dev:~$ tree skills/</div>
                <div className="text-white">skills/</div>
                <div className="text-white">├─ typescript/</div>
                <div className="text-white">|  ├─ react.tsx</div>
                <div className="text-white">|  ├─ angular.component.ts</div>
                <div className="text-white">|  └─ nestjs.ts</div>
                <div className="text-white">├─ rust/</div>
                <div className="text-white">|  ├─ diesel.rs</div>
                <div className="text-white">|  └─ rocket.rs</div>
                <div className="text-white">├─ python/</div>
                <div className="text-white">|  └─ flask.py</div>
                <div className="text-white">└─ other.tar.gz</div>
                <div className="text-green-400 mb-1">romeo@dev:~$ cat status.txt</div>
                <div className="text-white mb-1">Available for hire: <span className="text-orange-400">Short Term</span></div>
                <div className="text-green-400">
                  romeo@dev:~$ <span className="terminal-cursor">_</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black border-2 border-white px-4 py-2 text-sm">
                {"{ terminal_mode: true }"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{">"} selected_projects[]</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Voici quelques-uns de mes projets récents. Chacun d'eux reflète mon engagement envers la qualité du code et
              l'innovation technologique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-transparent border-white/30 text-white hover:border-white/60 transition-all duration-300 group justify-between"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 font-mono group-hover:text-gray-300 transition-colors">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-sm">{project.description}</CardDescription>
                    </div>
                    <div className="ml-4 bg-black/80 px-2 py-1 rounded flex items-center gap-1 text-sm border border-white/20">
                      <Star className="w-3 h-3 fill-white" />
                      {project.stars}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-transparent border-white/30 text-white text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xs text-gray-400">License: {project.license}</div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black flex-1"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{">"} get_in_touch()</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider à concrétiser vos idées avec du
            code de qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a href="mailto:romeo@chevrier.dev" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5 mr-2" />
                romeo@chevrier.dev
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a href="https://github.com/Impre-visible" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                @Impre-visible
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>{"// Built with React, Tailwind CSS & shadcn/ui"}</p>
          <p className="mt-2">© {new Date().getFullYear()} Romeo Chevrier</p>
        </div>
      </footer>
    </div>
  )
}
