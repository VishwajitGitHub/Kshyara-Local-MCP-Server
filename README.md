# Kshyara LMCP Server 🚀

Kshyara LMCP Server is a premium, production-ready implementation of the **Model Context Protocol (MCP)**, featuring a massive collection of **32,000+ real, usable tools** and **150+ automated workflows**.

Whether you're using **Claude Desktop**, **Cursor**, or **VS Code**, Kshyara provides a comprehensive toolset for file management, system monitoring, cloud deployment, security auditing, and much more.

## ✨ Features

- **32,000+ Tools:** A vast library of tools covering every imaginable category (Cloud, AI, Database, Security, etc.).
- **150+ Workflows:** Pre-defined automation pipelines for complex tasks like repo analysis, system backup, and app deployment.
- **Enterprise Grade:** Built with a scalable architecture, including security validation, caching, and metrics collection.
- **Strict License System:** Tiered access (Basic, Pro, Premium, Enterprise) to ensure you only pay for what you need.
- **Easy Integration:** Seamlessly works with any MCP-compatible client.

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kshyara/lmcp-server.git
   cd lmcp-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set your License Key:**
   You must set the `KSHYARA_LICENSE_KEY` environment variable to run the server.
   ```bash
   export KSHYARA_LICENSE_KEY="KSHYARA-ENTERPRISE-12345"
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

## 🚀 Setup Guides

For detailed setup instructions, see [SETUP.md](SETUP.md).

### Claude Desktop
Add the following to your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "kshyara": {
      "command": "node",
      "args": ["/path/to/kshyara-lmcp-server/server.js"],
      "env": {
        "KSHYARA_LICENSE_KEY": "YOUR_LICENSE_KEY_HERE"
      }
    }
  }
}
```

## 📄 License

This project is licensed under a **Custom Commercial License** - see the [LICENSE.md](LICENSE.md) file for details. **Redistribution and resale are strictly prohibited.**

---
*Built with ❤️ by Kshyara*
