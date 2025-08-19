import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import * as crypto from "crypto";

// ------------------------------------------------------------------
// Firebase Admin Initialization
// ------------------------------------------------------------------
if (!admin.apps.length) {
  if (!process.env.GOOGLE_SERVICES_BASE64) {
    throw new Error(
      "Missing GOOGLE_SERVICES_BASE64 environment variable. " +
        "Please provide your Firebase service account credentials as base64."
    );
  }
  const serviceAccount = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICES_BASE64, "base64").toString("utf8")
  );
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
function generateShortId(length = 6) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}

// ------------------------------------------------------------------
// Cloud Functions
// ------------------------------------------------------------------

/**
 * POST /shorten
 * Body: { longUrl: string }
 * Returns: { shortId: string, shortUrl: string }
 */
export const shorten = onRequest(async (req, res) => {
  // CORS
  res.set("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { longUrl } = req.body;
  if (!longUrl || !/^https?:\/\//i.test(longUrl)) {
    res.status(400).json({ error: "Invalid URL format" });
    return;
  }

  const shortId = generateShortId();
  await db.collection("urls").doc(shortId).set({
    longUrl,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    clicks: 0,
  });

  const shortUrl = `${req.protocol}://${req.get("host")}/redirect/${shortId}`;
  res.json({ shortId, shortUrl });
});

/**
 * GET /redirect/<shortId>
 * Redirects to the original long URL and increments click count.
 */
export const redirect = onRequest(async (req, res) => {
  // v2 uses req.params[0] when the pattern is "redirect/**"
  const shortId = req.params[0];
  if (!shortId) {
    res.status(404).send("URL not found");
    return;
  }

  const doc = await db.collection("urls").doc(shortId).get();
  if (!doc.exists) {
    res.status(404).send("URL not found");
    return;
  }

  const { longUrl } = doc.data();
  await doc.ref.update({ clicks: admin.firestore.FieldValue.increment(1) });

  res.redirect(301, longUrl);
});
