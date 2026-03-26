# Setup Guide 🚀

This guide provides detailed instructions for setting up and configuring the **Kshyara LMCP Server**.

## 1. Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

---

## 2. Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kshyara/lmcp-server.git
   cd lmcp-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## 3. License Configuration

The Kshyara LMCP Server requires a valid license key to operate. This key is passed via the `KSHYARA_LICENSE_KEY` environment variable.

### Setting the License Key (Terminal)

**Mac/Linux:**
```bash
export KSHYARA_LICENSE_KEY="KSHYARA-ENTERPRISE-12345"
```

**Windows (Command Prompt):**
```cmd
set KSHYARA_LICENSE_KEY=KSHYARA-ENTERPRISE-12345
```

**Windows (PowerShell):**
```powershell
$env:KSHYARA_LICENSE_KEY="KSHYARA-ENTERPRISE-12345"
```

---

## 4. Connecting to AI Clients

### Claude Desktop

1. Open your Claude Desktop configuration file:
   - **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

2. Add the Kshyara server to the `mcpServers` object:
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

3. **Restart Claude Desktop.**

### Cursor

1. Open Cursor and go to **Settings** > **Features** > **MCP**.
2. Click **+ Add New MCP Server**.
3. Name: `Kshyara`
4. Type: `command`
5. Command: `node /path/to/kshyara-lmcp-server/server.js`
6. **Important:** Since Cursor does not easily support setting environment variables for MCP commands, you may need to wrap the command in a shell script or use a tool like `cross-env`.

---

## 5. Running the Server Standalone

You can run the server in two modes:

### STDIO Mode (Default)
Used for direct communication with AI clients.
```bash
npm start
```

### SSE Mode (Web/HTTP)
Used for web integrations or viewing the status dashboard.
```bash
npm run sse
```
Once running, visit `http://localhost:3000` to see the server status and unlocked tool count.

---

## 6. Support

If you encounter any issues, please contact our support team at support@kshyara.com.

---
*Built with ❤️ by Kshyara*
