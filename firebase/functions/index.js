import "dotenv/config.js";
import crypto from "crypto";
import admin from "firebase-admin";
import * as v2 from "firebase-functions/v2";
import { initializeApp } from "firebase-admin/app";
import { FieldValue } from "firebase-admin/firestore";

// ------------------------------------------------------------------
// Firebase Admin Initialization
// ------------------------------------------------------------------
if (!process.env.GOOGLE_SERVICES_BASE64) {
  throw new Error(
    "Missing GOOGLE_SERVICES_BASE64 environment variable. " +
      "Please provide your Firebase service account credentials as base64."
  );
}
const serviceAccount = JSON.parse(
  Buffer.from(process.env.GOOGLE_SERVICES_BASE64, "base64").toString("utf8")
);
initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

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

// HTTP function to create a short URL
export const shorten = v2.https.onRequest(async (req, res) => {
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

  // Check for the long URL in the request body
  if (!req.body.longUrl) {
    res.status(400).send("Long URL is required.");
    return;
  }

  const { longUrl } = req.body;
  const shortId = generateShortId();

  try {
    // Save the long URL with the short ID as the document ID
    await db.collection("urls").doc(shortId).set({
      longUrl,
      clicks: 0,
      createdAt: FieldValue.serverTimestamp(),
    });

    // Send the shortened URL back to the frontend
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const shortUrl = `${protocol}://${host}/${shortId}`;

    res.status(201).send({ shortUrl });
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).send("An error occurred.");
  }
});

// HTTP function to redirect to the long URL
export const redirect = v2.https.onRequest(async (req, res) => {
  // Get the short ID from the URL path
  console.log({ shortId: req.path.slice(1) });
  const shortId = req.path.slice(1);

  if (!shortId) {
    res.status(404).send("Short URL not found.");
    return;
  }

  try {
    // Get the document from Firestore using the short ID
    const urlDoc = await db.collection("urls").doc(shortId).get();

    if (!urlDoc.exists) {
      res.status(404).send("Short URL not found.");
      return;
    }

    const { longUrl } = urlDoc.data();
    await urlDoc.ref.update({ clicks: FieldValue.increment(1) });

    // Redirect the user to the long URL
    res.redirect(301, longUrl);
  } catch (error) {
    console.error("Error redirecting:", error);
    res.status(500).send("An error occurred.");
  }
});

/**
 * POST /shorten
 * Body: { longUrl: string }
 * Returns: { shortId: string, shortUrl: string }
 */
// export const shorten = v2.https.onRequest(async (req, res) => {
//   // CORS
//   res.set("Access-Control-Allow-Origin", "*");
//   if (req.method === "OPTIONS") {
//     res.set("Access-Control-Allow-Methods", "POST");
//     res.set("Access-Control-Allow-Headers", "Content-Type");
//     res.status(204).send("");
//     return;
//   }

//   if (req.method !== "POST") {
//     res.status(405).send("Method Not Allowed");
//     return;
//   }

//   const { longUrl } = req.body;
//   if (!longUrl || !/^https?:\/\//i.test(longUrl)) {
//     res.status(400).json({ error: "Invalid URL format" });
//     return;
//   }

//   const shortId = generateShortId();
//   await db.collection("urls").doc(shortId).set({
//     longUrl,
//     createdAt: FieldValue.serverTimestamp(),
//     clicks: 0,
//   });

//   const shortUrl = `${req.protocol}://${req.get("host")}/redirect/${shortId}`;
//   res.json({ shortId, shortUrl });
// });

// http://127.0.0.1:5001/linka-588ff/us-central1/redirect/7f72fe worked!
/**
 * GET /redirect/<shortId>
 * Redirects to the original long URL and increments click count.
 */
// export const redirect = v2.https.onRequest(async (req, res) => {
//   const shortId = req.params[0];
//   if (!shortId) {
//     res.status(404).send("URL not found");
//     return;
//   }

//   const doc = await db.collection("urls").doc(shortId).get();
//   if (!doc.exists) {
//     res.status(404).send("URL not found");
//     return;
//   }

//   const { longUrl } = doc.data();
//   await doc.ref.update({ clicks: FieldValue.increment(1) });

//   res.redirect(301, longUrl);
// });
