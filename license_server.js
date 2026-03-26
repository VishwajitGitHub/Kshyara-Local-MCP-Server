import express from 'express';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const app = express();
const PORT = 4000;
const DB_FILE = path.join(process.cwd(), 'licenses.json');

app.use(express.json());

// Initialize database if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({
    "KSHYARA-ENTERPRISE-DEBUG": { "valid": true, "tier": "enterprise", "owner": "admin" }
  }, null, 2));
}

// Helper to read DB
const readDB = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));

// Helper to write DB
const writeDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

/**
 * @api {get} /validate Validate a license key
 * Used by server.js to check if the user has a valid license.
 */
app.get('/validate', (req, res) => {
  const { key } = req.query;
  const db = readDB();

  if (db[key]) {
    console.log(`[VALIDATE] Key: ${key} | Status: VALID | Tier: ${db[key].tier}`);
    return res.json(db[key]);
  }

  console.log(`[VALIDATE] Key: ${key} | Status: INVALID`);
  return res.json({ valid: false });
});

/**
 * @api {post} /issue Issue a new license key
 * Used by you (the owner) to create keys for customers.
 */
app.post('/issue', (req, res) => {
  const { tier, owner, secret } = req.body;

  // Simple security check for issuing keys
  if (secret !== 'KSHYARA_ADMIN_SECRET') {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  if (!['basic', 'pro', 'premium', 'enterprise'].includes(tier)) {
    return res.status(400).json({ error: 'Invalid tier' });
  }

  const randomPart = crypto.randomBytes(4).toString('hex').toUpperCase();
  const newKey = `KSHYARA-${tier.toUpperCase()}-${randomPart}`;
  
  const db = readDB();
  db[newKey] = { valid: true, tier, owner, issuedAt: new Date().toISOString() };
  writeDB(db);

  console.log(`[ISSUE] New Key: ${newKey} | Owner: ${owner} | Tier: ${tier}`);
  res.json({ key: newKey, tier, owner });
});

app.listen(PORT, () => {
  console.log(`\n🔐 Kshyara License Server running on http://localhost:${PORT}`);
  console.log(`Use this server to validate and issue license keys.\n`);
});
