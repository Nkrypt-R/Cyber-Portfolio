import { ExternalLink, Github, Lock } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EXPLOIT TIMELINE",
    description: "Automated vulnerability scanner with machine learning threat detection",
    status: "ACTIVE",
    tags: ["Python", "ML", "Security"],
    statusColor: "text-cyber-green",
  },
  {
    id: 2,
    title: "FIREWALL UP",
    description: "Enterprise-grade firewall configuration and management tool",
    status: "DEPLOYED",
    tags: ["Go", "Networking", "DevOps"],
    statusColor: "text-cyber-cyan",
  },
  {
    id: 3,
    title: "DECRYPTION LAB",
    description: "Cryptographic algorithm analysis and educational suite",
    status: "IN PROGRESS",
    tags: ["C++", "Cryptography", "Research"],
    statusColor: "text-cyber-purple",
  },
  {
    id: 4,
    title: "SECURE SHELL",
    description: "Hardened SSH implementation with advanced authentication",
    status: "RESEARCH",
    tags: ["Rust", "Security", "Protocol"],
    statusColor: "text-cyber-pink",
  },
];

export const ProjectsWindow = () => {
  return (
    <div className="p-6 space-y-4 h-full overflow-y-auto">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-glow-cyan font-mono">CYBER MISSION LOGS</h2>
        <p className="text-sm text-muted-foreground font-mono">
          Classified projects and security operations
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="glass-intense rounded-lg p-4 space-y-3 cyber-border hover:bg-white/5 transition-all duration-300 group"
            style={{
              animation: `fade-in 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-mono font-bold text-cyber-cyan group-hover:text-glow-cyan transition-all">
                  {project.title}
                </h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className={`text-xs font-mono ${project.statusColor} whitespace-nowrap`}>
                [{project.status}]
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono glass rounded border border-cyber-cyan/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <button className="flex items-center gap-1 px-3 py-1 text-xs font-mono bg-cyber-cyan/10 hover:bg-cyber-cyan/20 text-cyber-cyan rounded transition-colors">
                <Github className="w-3 h-3" />
                CODE
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-xs font-mono bg-cyber-purple/10 hover:bg-cyber-purple/20 text-cyber-purple rounded transition-colors">
                <ExternalLink className="w-3 h-3" />
                DEMO
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-xs font-mono bg-cyber-pink/10 hover:bg-cyber-pink/20 text-cyber-pink rounded transition-colors">
                <Lock className="w-3 h-3" />
                DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="glass-intense rounded p-3 text-xs font-mono text-muted-foreground text-center">
        <span className="text-cyber-green">[!]</span> More projects available on request
      </div>
    </div>
  );
};
