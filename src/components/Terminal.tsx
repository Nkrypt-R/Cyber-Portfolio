import { useState, useRef, useEffect } from "react";

interface Command {
  input: string;
  output: string[];
}

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  help     - Show this help message",
    "  about    - Learn about me",
    "  skills   - View my technical skills",
    "  projects - See my projects",
    "  contact  - Get in touch",
    "  clear    - Clear terminal",
    "  social   - View social links",
  ],
  about: [
    "==========================================",
    "   CYBERSECURITY PROFESSIONAL",
    "==========================================",
    "",
    "Specializing in:",
    "  • Penetration Testing",
    "  • Security Analysis",
    "  • Vulnerability Assessment",
    "  • Incident Response",
    "",
    "Passionate about securing digital infrastructure",
    "and staying ahead of emerging threats.",
  ],
  skills: [
    "CORE SYSTEMS ONLINE:",
    "",
    "[████████████] Network Security",
    "[███████████░] Penetration Testing",
    "[████████████] Linux Administration",
    "[██████████░░] Web Application Security",
    "[███████████░] Python/Bash Scripting",
    "[█████████░░░] Cloud Security (AWS/Azure)",
    "[████████████] Cryptography",
  ],
  projects: [
    "CYBER MISSION LOGS:",
    "",
    "1. EXPLOIT TIMELINE",
    "   Automated vulnerability scanner with ML detection",
    "   Status: [ACTIVE]",
    "",
    "2. FIREWALL UP",
    "   Enterprise-grade firewall configuration tool",
    "   Status: [DEPLOYED]",
    "",
    "3. DECRYPTION LAB",
    "   Cryptographic algorithm analysis suite",
    "   Status: [IN PROGRESS]",
  ],
  contact: [
    "PING ME:",
    "",
    "Email: roahith@cybersec.io",
    "LinkedIn: linkedin.com/in/roahith",
    "GitHub: github.com/roahith",
    "",
    "Encryption Key: [REQUEST PGP]",
  ],
  social: [
    "SOCIAL NETWORKS:",
    "",
    "→ GitHub: github.com/roahith",
    "→ LinkedIn: linkedin.com/in/roahith",
    "→ Twitter: @roahith_sec",
    "→ Blog: roahith.dev/blog",
  ],
  clear: [],
};

export const Terminal = () => {
  const [history, setHistory] = useState<Command[]>([
    {
      input: "welcome",
      output: [
        "Nkrypt-R - Cybersecurity Portfolio",
        "Type 'help' for available commands",
        "",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    const output = commands[trimmedCmd] || [
      `Command not found: ${trimmedCmd}`,
      "Type 'help' for available commands",
    ];

    setHistory((prev) => [...prev, { input: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div className="h-full flex flex-col font-mono text-sm">
      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-cyber-cyan/30"
      >
        {history.map((cmd, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 text-cyber-green">
              <span className="text-cyber-cyan">$</span>
              <span>{cmd.input}</span>
            </div>
            <div className="mt-1 text-foreground/80">
              {cmd.output.map((line, i) => (
                <div key={i} className="leading-relaxed">
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-cyber-cyan/30 bg-black/20">
        <span className="text-cyber-cyan">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          placeholder="Type a command..."
          autoFocus
        />
      </form>
    </div>
  );
};
