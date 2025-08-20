const BASE = import.meta.env.VITE_FUNCTIONS_BASE;

export async function shorten(longUrl: string) {
  console.log(longUrl);
  const res = await fetch(`${BASE}/shorten`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ longUrl }),
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<{ shortId: string; shortUrl: string }>;
}
