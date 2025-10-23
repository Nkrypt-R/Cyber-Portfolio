import { Shield, Code, Terminal, Lock } from "lucide-react";

const skills = [
  { name: "Penetration Testing", level: 95, icon: <Shield className="w-4 h-4" /> },
  { name: "Network Security", level: 90, icon: <Lock className="w-4 h-4" /> },
  { name: "Web Security", level: 85, icon: <Code className="w-4 h-4" /> },
  { name: "Linux/Bash", level: 92, icon: <Terminal className="w-4 h-4" /> },
];

export const AboutWindow = () => {
  return (
    <div className="p-6 space-y-6 h-full overflow-y-auto">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyber-cyan via-cyber-purple to-cyber-pink glow-cyan flex items-center justify-center">
          <Shield className="w-12 h-12 text-background" />
        </div>
        <h2 className="text-2xl font-bold text-glow-cyan font-mono">NARESHKUMAR</h2>
        <p className="text-cyber-purple font-mono">CYBERSECURITY SPECIALIST</p>
      </div>

      {/* Bio */}
      <div className="glass-intense rounded-lg p-4 space-y-2">
        <h3 className="text-lg font-mono text-cyber-cyan flex items-center gap-2">
          <span className="text-cyber-green">{'>'}</span> ABOUT.ME
        </h3>
        <p className="text-sm text-foreground/80 leading-relaxed">
          Cybersecurity professional specializing in penetration testing, vulnerability assessment, 
          and secure system architecture. Passionate about identifying and mitigating security threats 
          before they become vulnerabilities.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        <h3 className="text-lg font-mono text-cyber-cyan flex items-center gap-2">
          <span className="text-cyber-green">{'>'}</span> CORE.SYSTEMS
        </h3>
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-cyber-purple">{skill.icon}</span>
                {skill.name}
              </div>
              <span className="text-cyber-cyan">{skill.level}%</span>
            </div>
            <div className="h-2 glass rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple glow-cyan transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="glass-intense rounded-lg p-4 space-y-2">
        <h3 className="text-lg font-mono text-cyber-cyan flex items-center gap-2">
          <span className="text-cyber-green">{'>'}</span> CERTIFICATIONS
        </h3>
        <div className="space-y-1 text-sm font-mono">
          <div className="flex items-center gap-2">
            <span className="text-cyber-green">[✓]</span>
            <span className="text-foreground/80">Offensive Security Certified Professional (OSCP)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyber-green">[✓]</span>
            <span className="text-foreground/80">Certified Ethical Hacker (CEH)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyber-green">[✓]</span>
            <span className="text-foreground/80">CompTIA Security+</span>
          </div>
        </div>
      </div>
    </div>
  );
};
