# Kshyara LMCP Server - Customer How-To Guide

Welcome to the **Kshyara LMCP Server v3.0**! This server provides a massive, production-ready local AI tool engine with over 5,000 explicitly defined tools across various domains (Cloud, AI, Database, Security, etc.).

This guide will walk you through how to obtain your license, configure the server, and connect it to your AI assistants (like Claude Desktop).

---

## 1. Prerequisites

Before running the server, ensure you have the following installed on your system:
* **Node.js** (v18 or higher recommended)
* **npm** (comes with Node.js)

---

## 2. Understanding License Tiers

The Kshyara LMCP Server uses a tiered license system. Your license key determines how many of the 5,000+ tools your AI assistant can access:

* **BASIC Tier:** Access to fundamental tools (Read operations, basic system queries). *This is the default tier if no license key is provided.*
* **PRO Tier:** Access to Basic + Pro tools (Write/Update operations, Docker, Git, etc.).
* **PREMIUM Tier:** Access to Basic + Pro + Premium tools (Delete operations, advanced security, cloud simulators).
* **ENTERPRISE Tier:** Access to ALL 5,000+ tools (Advanced analytics, optimization, full domain access).

---

## 3. How to Get a License Key

To unlock higher tiers, you must obtain a valid license key from the Kshyara vendor/sales team. 

A valid license key will contain the name of your tier. Examples of valid formats:
* `KSHYARA-PRO-987654321`
* `KSHYARA-PREMIUM-ABCDEFG`
* `KSHYARA-ENTERPRISE-ULTIMATE-2026`

---

## 4. How to Run the Server (Standalone)

You can run the server in two modes: **STDIO** (Standard Input/Output, used by MCP clients) and **SSE** (Server-Sent Events, used for web/HTTP integrations).

### Option A: Running in STDIO Mode (Default)
This is the mode you use when connecting directly to an AI client like Claude Desktop.

**Mac/Linux:**
\`\`\`bash
export KSHYARA_LICENSE_KEY="KSHYARA-ENTERPRISE-12345"
node server.js
\`\`\`

**Windows (Command Prompt):**
\`\`\`cmd
set KSHYARA_LICENSE_KEY=KSHYARA-ENTERPRISE-12345
node server.js
\`\`\`

### Option B: Running in SSE Mode (Web/HTTP)
If you want to connect via HTTP or view the status dashboard in your browser, use the `--sse` flag.

\`\`\`bash
export KSHYARA_LICENSE_KEY="KSHYARA-ENTERPRISE-12345"
node server.js --sse
\`\`\`
Once running, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see your active tier and unlocked tool count.

---

## 5. Connecting to Claude Desktop

To use these 5,000+ tools inside Claude, you need to configure Claude Desktop to launch the Kshyara server with your license key.

1. Open your Claude Desktop configuration file:
   * **Mac:** \`~/Library/Application Support/Claude/claude_desktop_config.json\`
   * **Windows:** \`%APPDATA%\\Claude\\claude_desktop_config.json\`
   
2. Add the Kshyara server to your \`mcpServers\` configuration. Make sure to replace \`/path/to/kshyara/server.js\` with the actual absolute path to your \`server.js\` file, and insert your actual license key.

\`\`\`json
{
  "mcpServers": {
    "kshyara-lmcp": {
      "command": "node",
      "args": [
        "/path/to/kshyara/server.js"
      ],
      "env": {
        "KSHYARA_LICENSE_KEY": "KSHYARA-ENTERPRISE-12345"
      }
    }
  }
}
\`\`\`

3. **Restart Claude Desktop.**
4. Look for the "hammer" (tools) icon in Claude. You should now see thousands of tools available for Claude to use!

---

## 6. Troubleshooting

* **"Access Denied: Tool requires ENTERPRISE tier"**
  * *Cause:* Claude tried to use a tool that your current license doesn't allow.
  * *Fix:* Ensure your \`KSHYARA_LICENSE_KEY\` environment variable is set correctly in your \`claude_desktop_config.json\` and that you have purchased the correct tier.
* **Server fails to start or Claude shows an MCP error**
  * *Cause:* Node.js might not be in your system PATH, or the path to \`server.js\` is incorrect.
  * *Fix:* Double-check the absolute path in your config file. You can also try replacing \`"command": "node"\` with the absolute path to your node executable (e.g., \`"/usr/local/bin/node"\`).
* **How do I know how many tools are unlocked?**
  * Run the server in SSE mode (\`node server.js --sse\`) and visit \`http://localhost:3000\`. The dashboard will tell you exactly what tier is active and how many tools are unlocked.
