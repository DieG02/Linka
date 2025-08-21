export async function shorten(longUrl: string) {
  const res = await fetch(`/api/shorten`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ longUrl }),
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<{ shortUrl: string }>;
}
