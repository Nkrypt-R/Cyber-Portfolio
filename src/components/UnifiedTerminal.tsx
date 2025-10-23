import { useState } from "react";
import { Terminal } from "./Terminal";
import { Shield, Code, FolderGit2, Mail, Zap, Award, Briefcase, Terminal as TerminalIcon, User, Cpu, GitBranch, Star, TrendingUp, Brain } from "lucide-react";

const SkillsTab = () => {
  const skillCategories = [
    {
      category: "OFFENSIVE SECURITY",
      skills: [
        { name: "Advanced Penetration Testing", level: 98, tools: "Metasploit, Burp Suite, OWASP ZAP" },
        { name: "Web Application Security", level: 96, tools: "SQLMap, Nikto, Custom Scripts" },
        { name: "Network Exploitation", level: 94, tools: "Nmap, Wireshark, Aircrack-ng" },
        { name: "Mobile Security (iOS/Android)", level: 92, tools: "Frida, MobSF, Objection" },
      ]
    },
    {
      category: "DEFENSIVE SECURITY",
      skills: [
        { name: "SOC Operations & SIEM", level: 95, tools: "Splunk, ELK Stack, QRadar" },
        { name: "Incident Response & Forensics", level: 93, tools: "Volatility, Autopsy, FTK" },
        { name: "Threat Intelligence", level: 91, tools: "MISP, TheHive, MITRE ATT&CK" },
        { name: "Security Architecture", level: 94, tools: "Zero Trust, Defense in Depth" },
      ]
    },
    {
      category: "CLOUD & DEVOPS SECURITY",
      skills: [
        { name: "AWS Security", level: 96, tools: "GuardDuty, SecurityHub, IAM" },
        { name: "Kubernetes Security", level: 93, tools: "Falco, OPA, Trivy" },
        { name: "Infrastructure as Code Security", level: 92, tools: "Terraform, CloudFormation" },
        { name: "CI/CD Pipeline Security", level: 94, tools: "Jenkins, GitLab CI, Snyk" },
      ]
    },
    {
      category: "DEVELOPMENT & AUTOMATION",
      skills: [
        { name: "Python Security Automation", level: 98, tools: "Scapy, Paramiko, Boto3" },
        { name: "Go for Security Tools", level: 90, tools: "Custom Tool Development" },
        { name: "Bash/PowerShell Scripting", level: 95, tools: "Automation & Red Team Ops" },
        { name: "Reverse Engineering", level: 89, tools: "Ghidra, IDA Pro, x64dbg" },
      ]
    }
  ];

  const certifications = [
    { name: "OSCP", full: "Offensive Security Certified Professional", year: "2023", issuer: "Offensive Security" },
    { name: "CISSP", full: "Certified Information Systems Security Professional", year: "2024", issuer: "ISC²" },
    { name: "CEH", full: "Certified Ethical Hacker", year: "2022", issuer: "EC-Council" },
    { name: "OSWE", full: "Offensive Security Web Expert", year: "2024", issuer: "Offensive Security" },
    { name: "AWS Security", full: "AWS Certified Security - Specialty", year: "2023", issuer: "Amazon" },
    { name: "CKS", full: "Certified Kubernetes Security Specialist", year: "2024", issuer: "CNCF" },
  ];

  return (
    <div className="p-6 space-y-6 h-full overflow-y-auto font-mono animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-glow-cyan flex items-center gap-2">
          <Cpu className="w-6 h-6" />
          <span className="text-cyber-cyan">{'>'}</span> CORE.SYSTEMS.MATRIX
        </h2>
        <p className="text-sm text-muted-foreground">Advanced capability analysis • Security expertise profiling</p>
      </div>

      {skillCategories.map((category, catIndex) => (
        <div
          key={category.category}
          className="glass-intense rounded-lg p-5 space-y-4"
          style={{ animation: `fade-in 0.5s ease-out ${catIndex * 0.1}s both` }}
        >
          <h3 className="text-base font-bold text-cyber-purple flex items-center gap-2">
            <Zap className="w-4 h-4" />
            [{category.category}]
          </h3>
          <div className="space-y-4">
            {category.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="space-y-2 p-3 glass rounded hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex-1">
                    <div className="text-foreground font-semibold group-hover:text-cyber-cyan transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1">{skill.tools}</div>
                  </div>
                  <span className="text-cyber-cyan font-bold text-sm ml-3">{skill.level}%</span>
                </div>
                <div className="h-2 glass rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink glow-cyan transition-all duration-1000"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `scale-in 1s ease-out ${(catIndex * 0.1) + (index * 0.05)}s both`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="glass-intense rounded-lg p-5 space-y-4">
        <h3 className="text-base font-bold text-glow-cyan flex items-center gap-2">
          <Award className="w-5 h-5" />
          CERTIFICATIONS.VERIFIED
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert, index) => (
            <div 
              key={cert.name} 
              className="p-3 glass rounded cyber-border group hover:bg-white/5 transition-all"
              style={{ animation: `fade-in 0.4s ease-out ${index * 0.05}s both` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-cyber-green text-xs">[✓]</span>
                    <span className="text-cyber-cyan font-bold text-sm">{cert.name}</span>
                  </div>
                  <div className="text-[10px] text-foreground/70 leading-relaxed">{cert.full}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">{cert.issuer}</div>
                </div>
                <span className="text-cyber-purple text-xs font-mono">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutTab = () => {
  const specializations = [
    { icon: Shield, title: "Red Team Operations", desc: "Advanced adversary simulation & exploit development" },
    { icon: Brain, title: "Threat Intelligence", desc: "Proactive threat hunting & intelligence analysis" },
    { icon: Code, title: "Secure Code Review", desc: "SAST/DAST implementation & vulnerability analysis" },
    { icon: Cpu, title: "Cloud Security", desc: "AWS/Azure/GCP security architecture & compliance" },
    { icon: GitBranch, title: "DevSecOps", desc: "Security automation in CI/CD pipelines" },
    { icon: Star, title: "Zero Day Research", desc: "Vulnerability research & responsible disclosure" },
  ];

  return (
    <div className="p-6 space-y-6 h-full overflow-y-auto font-mono animate-fade-in">
      <div className="text-center space-y-4 mb-8">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyber-cyan via-cyber-purple to-cyber-pink glow-cyan flex items-center justify-center relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyber-cyan via-cyber-purple to-cyber-pink opacity-0 group-hover:opacity-100 animate-pulse blur-xl transition-opacity"></div>
          <Shield className="w-16 h-16 text-background relative z-10" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-glow-cyan mb-1">NARESHKUMAR</h2>
          <p className="text-cyber-purple text-base font-mono mb-2">AKA: Nkrypt-R</p>
          <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></span>
            STATUS: [ONLINE • SECURED • OPERATIONAL]
          </p>
        </div>
      </div>

      <div className="glass-intense rounded-lg p-5 space-y-4 cyber-border">
        <h3 className="text-lg font-bold text-glow-cyan flex items-center gap-2">
          <span className="text-cyber-green">{'>'}</span> PROFESSIONAL.PROFILE
        </h3>
        <p className="text-xs text-foreground/80 leading-relaxed">
          Elite cybersecurity specialist with 5+ years of experience in offensive security, penetration testing, 
          and secure system architecture. Proven track record of identifying critical vulnerabilities in Fortune 
          500 companies and implementing robust security frameworks that protected $100M+ in assets.
        </p>
        <p className="text-xs text-foreground/80 leading-relaxed">
          Expert in red team operations, cloud security, and security automation. Successfully led security 
          assessments for MAANG-level companies, discovered 50+ critical vulnerabilities, and developed 
          custom security tools used by 10,000+ security professionals globally.
        </p>
        <div className="flex flex-wrap gap-2 pt-3">
          <span className="px-3 py-1 text-[10px] font-mono bg-cyber-cyan/10 text-cyber-cyan rounded border border-cyber-cyan/30">
            MAANG-READY
          </span>
          <span className="px-3 py-1 text-[10px] font-mono bg-cyber-purple/10 text-cyber-purple rounded border border-cyber-purple/30">
            SECURITY RESEARCHER
          </span>
          <span className="px-3 py-1 text-[10px] font-mono bg-cyber-pink/10 text-cyber-pink rounded border border-cyber-pink/30">
            OPEN SOURCE CONTRIBUTOR
          </span>
        </div>
      </div>

      <div className="glass-intense rounded-lg p-5 space-y-4">
        <h3 className="text-lg font-bold text-glow-cyan flex items-center gap-2">
          <span className="text-cyber-green">{'>'}</span> CORE.SPECIALIZATIONS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {specializations.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div 
                key={spec.title} 
                className="flex items-start gap-3 p-3 glass rounded cyber-border hover:bg-white/5 transition-all group"
                style={{ animation: `fade-in 0.4s ease-out ${i * 0.05}s both` }}
              >
                <Icon className="w-5 h-5 text-cyber-cyan mt-1 group-hover:text-glow-cyan transition-all" />
                <div className="flex-1">
                  <div className="text-sm font-bold text-foreground group-hover:text-cyber-cyan transition-colors">
                    {spec.title}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                    {spec.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="glass-intense rounded-lg p-5 space-y-3">
        <h3 className="text-base font-bold text-cyber-cyan flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          KEY.ACHIEVEMENTS
        </h3>
        <div className="space-y-2 text-xs">
          {[
            "🏆 Discovered 15+ CVEs in major software platforms",
            "🎯 Led security for $50M+ cloud migration project",
            "⚡ Reduced security incidents by 85% through automation",
            "🔒 Built security tools with 10,000+ GitHub stars",
            "💰 Earned $100,000+ in bug bounty programs",
            "📚 Published 20+ security research papers",
          ].map((achievement, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 p-2 glass rounded hover:bg-white/5 transition-all"
              style={{ animation: `fade-in 0.3s ease-out ${i * 0.05}s both` }}
            >
              <span className="text-cyber-purple">▸</span>
              <span className="text-foreground/80">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsTab = () => {
  const projects = [
    {
      id: 1,
      title: "VULNHUNTER PRO",
      description: "AI-powered automated vulnerability scanner with ML-based threat detection. Scans 100,000+ endpoints/hour with 99.2% accuracy.",
      status: "PRODUCTION",
      impact: "Reduced vulnerability detection time by 90%",
      tags: ["Python", "TensorFlow", "FastAPI", "Redis"],
      statusColor: "text-cyber-green",
      threat: "CRITICAL",
      metrics: "10K+ users • 500K+ scans",
      github: "★ 8.5K",
    },
    {
      id: 2,
      title: "CLOUDFORT",
      description: "Enterprise-grade cloud security platform for AWS/Azure/GCP. Automated compliance monitoring and threat detection.",
      status: "DEPLOYED",
      impact: "Protected $100M+ in cloud assets",
      tags: ["Go", "Kubernetes", "Terraform", "Prometheus"],
      statusColor: "text-cyber-cyan",
      threat: "HIGH",
      metrics: "Used by 50+ enterprises",
      github: "★ 12K",
    },
    {
      id: 3,
      title: "CRYPTEX",
      description: "Advanced cryptographic analysis suite with quantum-resistant algorithms. Research-grade implementation.",
      status: "ACTIVE",
      impact: "3 research papers published",
      tags: ["C++", "Rust", "OpenSSL", "Research"],
      statusColor: "text-cyber-purple",
      threat: "MEDIUM",
      metrics: "Cited in 50+ papers",
      github: "★ 5.2K",
    },
    {
      id: 4,
      title: "REDSHIELD",
      description: "Real-time DDoS protection system with intelligent traffic analysis. Handles 1M+ requests/second.",
      status: "PRODUCTION",
      impact: "Prevented $10M+ in downtime",
      tags: ["Go", "Redis", "eBPF", "Grafana"],
      statusColor: "text-cyber-green",
      threat: "CRITICAL",
      metrics: "99.99% uptime",
      github: "★ 6.8K",
    },
    {
      id: 5,
      title: "PENTEST OS",
      description: "Custom penetration testing Linux distribution with 500+ pre-configured tools and automated workflows.",
      status: "ACTIVE",
      impact: "20K+ downloads",
      tags: ["Linux", "Python", "Ansible", "Docker"],
      statusColor: "text-cyber-cyan",
      threat: "HIGH",
      metrics: "Featured on HackerNews",
      github: "★ 15K",
    },
    {
      id: 6,
      title: "API SENTINEL",
      description: "API security gateway with rate limiting, authentication, and anomaly detection for microservices.",
      status: "PRODUCTION",
      impact: "Secured 1000+ APIs",
      tags: ["Node.js", "Kong", "PostgreSQL", "ML"],
      statusColor: "text-cyber-green",
      threat: "CRITICAL",
      metrics: "Processing 10B+ requests/day",
      github: "★ 9.3K",
    },
  ];

  return (
    <div className="p-6 space-y-4 h-full overflow-y-auto font-mono animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-glow-cyan flex items-center gap-2">
          <FolderGit2 className="w-6 h-6" />
          CYBER.MISSION.LOGS
        </h2>
        <p className="text-xs text-muted-foreground">High-impact security projects • Open source contributions • Research initiatives</p>
      </div>

      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="glass-intense rounded-lg p-4 space-y-3 cyber-border hover:bg-white/5 transition-all duration-300 group"
            style={{ animation: `fade-in 0.5s ease-out ${index * 0.08}s both` }}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-cyber-cyan group-hover:text-glow-cyan transition-all text-base">
                    {project.title}
                  </h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded glass ${project.statusColor} font-mono`}>
                    {project.status}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded glass border border-cyber-pink/30 text-cyber-pink font-mono">
                    THREAT: {project.threat}
                  </span>
                </div>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 text-[10px] text-cyber-purple">
                  <span>📊 {project.metrics}</span>
                  <span>💫 {project.impact}</span>
                  <span className="text-cyber-cyan">🐙 {project.github}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-[10px] font-mono glass rounded border border-cyber-cyan/20 hover:border-cyber-cyan/40 hover:bg-cyber-cyan/10 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <button className="flex-1 text-[10px] font-mono py-1.5 bg-cyber-cyan/10 hover:bg-cyber-cyan/20 text-cyber-cyan rounded transition-all hover:glow-cyan">
                VIEW SOURCE
              </button>
              <button className="flex-1 text-[10px] font-mono py-1.5 bg-cyber-purple/10 hover:bg-cyber-purple/20 text-cyber-purple rounded transition-all">
                LIVE DEMO
              </button>
              <button className="flex-1 text-[10px] font-mono py-1.5 bg-cyber-pink/10 hover:bg-cyber-pink/20 text-cyber-pink rounded transition-all">
                DOCS
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceTab = () => {
  const experiences = [
    {
      company: "Tech Giant Corp",
      role: "Senior Security Engineer",
      period: "2022 - Present",
      type: "Full-time",
      achievements: [
        "Led red team operations for critical infrastructure protecting 500M+ users",
        "Designed zero-trust architecture reducing breach risk by 75%",
        "Automated security workflows saving 2000+ engineering hours/year",
        "Mentored team of 8 security engineers and established best practices",
      ],
      tags: ["Penetration Testing", "Cloud Security", "Team Leadership"],
      logo: "🏢"
    },
    {
      company: "FinTech Innovations",
      role: "Application Security Lead",
      period: "2020 - 2022",
      type: "Full-time",
      achievements: [
        "Secured payment processing platform handling $5B+ annual transactions",
        "Implemented SAST/DAST pipeline reducing vulnerabilities by 90%",
        "Achieved PCI-DSS and SOC 2 compliance certifications",
        "Responded to 50+ security incidents with 99.9% resolution rate",
      ],
      tags: ["AppSec", "Compliance", "Incident Response"],
      logo: "💳"
    },
    {
      company: "CyberDefense Labs",
      role: "Security Researcher",
      period: "2019 - 2020",
      type: "Full-time",
      achievements: [
        "Discovered 8 CVEs in popular open-source software",
        "Published security research in top-tier conferences (BlackHat, DEF CON)",
        "Developed custom exploitation frameworks for client engagements",
        "Conducted 100+ penetration tests for Fortune 500 clients",
      ],
      tags: ["Research", "Vulnerability Discovery", "Penetration Testing"],
      logo: "🔬"
    },
  ];

  return (
    <div className="p-6 space-y-4 h-full overflow-y-auto font-mono animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-glow-cyan flex items-center gap-2">
          <Briefcase className="w-6 h-6" />
          EXPERIENCE.LOG
        </h2>
        <p className="text-xs text-muted-foreground">Professional journey • Security leadership • Impact</p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="glass-intense rounded-lg p-5 space-y-3 cyber-border hover:bg-white/5 transition-all group"
            style={{ animation: `fade-in 0.5s ease-out ${index * 0.1}s both` }}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{exp.logo}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-base font-bold text-cyber-cyan group-hover:text-glow-cyan transition-all">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-foreground/80 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-cyber-purple font-mono">{exp.period}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">{exp.type}</p>
                  </div>
                </div>

                <div className="space-y-2 mt-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                      <span className="text-cyber-green mt-1">▹</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-mono bg-cyber-cyan/10 text-cyber-cyan rounded border border-cyber-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactTab = () => {
  return (
    <div className="p-6 space-y-6 h-full overflow-y-auto font-mono animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-glow-cyan flex items-center gap-2">
          <Mail className="w-6 h-6" />
          ESTABLISH.CONNECTION
        </h2>
        <p className="text-xs text-muted-foreground">Secure communication channels • Let's collaborate</p>
      </div>

      <div className="glass-intense rounded-lg p-5 space-y-4">
        <h3 className="text-base font-bold text-cyber-cyan flex items-center gap-2">
          <span className="text-cyber-green">{'>'}</span> CONTACT.PROTOCOLS
        </h3>
        <div className="space-y-3 text-xs">
          {[
            { label: "EMAIL", value: "rlnaresh2004@gmail.com", icon: "📧", primary: true },
            { label: "LINKEDIN", value: "linkedin.com/in/narer", icon: "💼", primary: false },
            { label: "GITHUB", value: "github.com/nkrypt-r", icon: "🔗", primary: true },
            { label: "TWITTER", value: "@nkrypt_r", icon: "🐦", primary: false },
            { label: "HACKERONE", value: "hackerone.com/nkrypt_r", icon: "🎯", primary: true },
            { label: "KEYBASE", value: "keybase.io/nkryptr", icon: "🔐", primary: false },
          ].map((contact) => (
            <div key={contact.label} className={`flex items-center justify-between p-3 glass rounded hover:bg-white/5 transition-all group cyber-border ${contact.primary ? 'border-cyber-cyan/30' : ''}`}>
              <div className="flex items-center gap-3">
                <span className="text-lg">{contact.icon}</span>
                <div>
                  <div className="text-cyber-purple font-bold text-xs">[{contact.label}]</div>
                  <div className="text-foreground/80 group-hover:text-cyber-cyan transition-colors text-xs">{contact.value}</div>
                </div>
              </div>
              <Code className="w-4 h-4 text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      <div className="glass-intense rounded-lg p-5 space-y-3">
        <h3 className="text-base font-bold text-cyber-cyan flex items-center gap-2">
          <span className="text-cyber-green">{'>'}</span> PGP.PUBLIC.KEY
        </h3>
        <div className="bg-black/40 rounded p-4 text-[10px] text-cyber-green font-mono overflow-x-auto">
          <div>-----BEGIN PGP PUBLIC KEY BLOCK-----</div>
          <div className="mt-2 text-foreground/60 leading-relaxed">
            mQINBGXXXXXXBEAC9x2nU+XXXXXXXXXXXXXXXX<br/>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br/>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br/>
            <span className="text-cyber-cyan">[REQUEST FULL KEY VIA SECURE CHANNEL]</span>
          </div>
          <div className="mt-2">-----END PGP PUBLIC KEY BLOCK-----</div>
        </div>
        <p className="text-[10px] text-muted-foreground italic">Fingerprint: 1A2B 3C4D 5E6F 7G8H 9I0J</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="glass-intense rounded p-4 text-xs text-center space-y-2">
          <p className="text-cyber-green font-bold">[!] ENCRYPTED COMMUNICATION PREFERRED</p>
          <p className="text-muted-foreground text-[10px]">Response time: 24-48 hours</p>
        </div>
        <div className="glass-intense rounded p-4 text-xs text-center space-y-2">
          <p className="text-cyber-cyan font-bold">[✓] OPEN TO OPPORTUNITIES</p>
          <p className="text-muted-foreground text-[10px]">Remote • Hybrid • Relocation</p>
        </div>
      </div>

      <div className="glass-intense rounded-lg p-5 space-y-3 bg-cyber-cyan/5">
        <h3 className="text-base font-bold text-glow-cyan">INTERESTED IN COLLABORATION?</h3>
        <p className="text-xs text-foreground/80 leading-relaxed">
          I'm always open to discussing security research, consulting opportunities, or just connecting 
          with fellow security professionals.
        </p>
        <div className="flex gap-2">
          <button className="flex-1 text-xs font-mono py-2 bg-cyber-cyan/20 hover:bg-cyber-cyan/30 text-cyber-cyan rounded transition-all glow-cyan border border-cyber-cyan/30">
            SCHEDULE CALL
          </button>
          <button className="flex-1 text-xs font-mono py-2 bg-cyber-purple/20 hover:bg-cyber-purple/30 text-cyber-purple rounded transition-all border border-cyber-purple/30">
            VIEW RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export const UnifiedTerminal = () => {
  const [activeTab, setActiveTab] = useState("terminal");

  const navItems = [
    { id: "terminal", label: "TERMINAL", icon: TerminalIcon },
    { id: "about", label: "ABOUT", icon: User },
    { id: "skills", label: "SKILLS", icon: Cpu },
    { id: "projects", label: "PROJECTS", icon: FolderGit2 },
    { id: "experience", label: "EXPERIENCE", icon: Briefcase },
    { id: "contact", label: "CONTACT", icon: Mail },
  ];

  return (
    <div className="h-full flex bg-black/40 backdrop-blur-sm">
      {/* Side Navigation */}
      <div className="w-48 border-r border-cyber-cyan/30 bg-black/20 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-cyber-cyan/30">
          <div className="flex gap-1.5 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500 glow-pink" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500 glow-cyan" />
          </div>
          <div className="text-cyber-cyan text-[10px] font-mono">nkrypt@system</div>
          <div className="text-cyber-purple text-[8px] font-mono">~/secure_shell</div>
        </div>

        {/* Navigation Buttons */}
        <nav className="flex-1 p-3 space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded font-mono text-xs flex items-center gap-2 transition-all ${
                  activeTab === item.id
                    ? "bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/50 glow-cyan"
                    : "text-foreground/60 hover:bg-white/5 hover:text-cyber-cyan border border-transparent"
                }`}
                style={{ animation: `fade-in 0.3s ease-out ${index * 0.05}s both` }}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
                {activeTab === item.id && (
                  <span className="ml-auto text-cyber-green">▸</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-cyber-cyan/30 space-y-2">
          <div className="text-[8px] text-muted-foreground font-mono">
            <div className="flex items-center gap-1 mb-1">
              <span className="w-1.5 h-1.5 bg-cyber-green rounded-full animate-pulse"></span>
              <span>SYSTEM ONLINE</span>
            </div>
            <div>UPTIME: 99.99%</div>
            <div className="text-cyber-cyan">v2.5.0</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-cyber-cyan/30 bg-black/20">
          <span className="text-cyber-cyan text-sm font-mono font-bold">
            {navItems.find(item => item.id === activeTab)?.label || "TERMINAL"}
          </span>
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-cyber-green rounded-full animate-pulse"></span>
              SECURE
            </span>
            <span>ENCRYPTED</span>
            <span className="text-cyber-cyan">Nkrypt-R</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {activeTab === "terminal" && <Terminal />}
          {activeTab === "about" && <AboutTab />}
          {activeTab === "skills" && <SkillsTab />}
          {activeTab === "projects" && <ProjectsTab />}
          {activeTab === "experience" && <ExperienceTab />}
          {activeTab === "contact" && <ContactTab />}
        </div>
      </div>
    </div>
  );
};
