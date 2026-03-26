#!/bin/bash

# Kshyara LMCP Server Installation Script 🛠️

echo "🚀 Starting Kshyara LMCP Server installation..."

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Error: Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ Error: npm is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Print next steps
echo "✅ Installation complete!"
echo ""
echo "🚀 Next Steps:"
echo "1. Start the server: npm start"
echo "2. Configure your MCP client (Claude Desktop, Cursor, VS Code)"
echo "3. Refer to README.md and DOCUMENTATION.md for more details"
echo ""
echo "---"
echo "*Built with ❤️ by Kshyara*"
