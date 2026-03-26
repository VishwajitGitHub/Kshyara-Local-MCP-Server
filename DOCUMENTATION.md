# Kshyara LMCP Server Documentation 📚

## Overview

The Kshyara LMCP Server provides a vast collection of **2500+ Model Context Protocol (MCP) tools** organized into logical categories and batches. These tools are designed for simulation, development, and testing.

## Tool Categories

Kshyara covers a wide range of industries and domains:

- **Logistics:** Route optimization, cold chain monitoring, drone delivery, port status.
- **Automotive:** VIN lookup, fuel efficiency, EV range, maintenance scheduling.
- **Agriculture:** Soil health, crop yield, pest detection, weather impact.
- **Media:** Video compression, SEO audit, script generation, social media planning.
- **Security:** Vulnerability scanning, password audit, firewall config, threat intel.
- **Data Science:** Data cleaning, model training, anomaly detection, visualization.
- **CRM:** Lead scoring, churn prediction, pipeline audit, email automation.
- **Productivity:** Task prioritization, meeting summary, focus timer, goal tracking.
- **Event Planning:** Venue search, guest list, budget audit, catering plan.
- **Personal Finance:** Portfolio rebalancing, asset allocation, market sentiment, tax estimation.
- **Fitness:** Water tracking, step tracking, sleep audit, calorie calculation.
- **Recipe:** Meal planning, ingredient substitution, grocery list, nutritional analysis.
- **Gaming:** Matchmaking, loot box odds, server status, leaderboard audit.
- **Weather:** Forecast, UV index, air quality, severe weather alerts.
- **News:** Top headlines, sentiment analysis, fact check, source audit.
- **Stock:** Real-time prices, dividend yield, PE ratio, technical analysis.
- **Crypto:** Wallet balance, gas fees, NFT floor price, token swap.
- **Language:** Translation, grammar check, sentiment analysis, language practice.
- **Art:** Color palette, font pairing, SVG generation, design tips.
- **Music:** BPM detection, chord progression, playlist gen, lyrics analysis.

## Sample Tools

Here are some examples of tools available in the Kshyara LMCP Server:

| Tool Name | Description | Inputs |
| --- | --- | --- |
| `log_last_mile_sim` | Optimized last-mile delivery | `city` |
| `re_airbnb_calc_sim` | Airbnb ROI calculation | `address` |
| `edu_quiz_gen_sim` | Generate a quiz | `topic` |
| `health_dna_report_sim` | DNA report summary | `report_id` |
| `fin_market_sentiment_sim` | Market sentiment analysis | `sector` |
| `social_viral_predict_sim` | Virality prediction | `content` |
| `legal_will_gen_sim` | Generate a will | `name` |
| `hr_salary_bench_sim` | Salary benchmarking | `role`, `city` |

## How to Use Tools

Kshyara tools are accessed through any MCP-compatible client. Once the server is connected, the client will automatically discover all available tools.

### Example Interaction

**User:** "Can you check the ROI for an Airbnb at 123 Main St, New York?"

**AI Assistant:** (Calls `re_airbnb_calc_sim` with `address: "123 Main St, New York"`)

**Kshyara Server:** (Returns `ROI for 123 Main St, New York: 12% annually. (Simulated)`)

**AI Assistant:** "The estimated ROI for an Airbnb at 123 Main St, New York is 12% annually."

## Integration Explanation

The Kshyara LMCP Server implements the **Model Context Protocol (MCP)**, which is a standard for connecting AI models to external tools and data sources. The server communicates with the client using JSON-RPC over standard input/output (stdio).

## Troubleshooting

### Server Not Found
- Ensure the path to `server.js` in your configuration is correct.
- Ensure Node.js is installed and accessible in your system path.

### Tools Not Appearing
- Restart your MCP client (Claude Desktop, Cursor, etc.).
- Check the server logs for any errors during startup.

### Permission Denied
- Ensure the user running the MCP client has read/execute permissions for the `server.js` file and its directory.

---
*For further assistance, please contact Kshyara support.*
