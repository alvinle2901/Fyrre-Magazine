export async function getNews(): Promise<string[]> {
  const res = await fetch(
    'https://raw.githubusercontent.com/alvinle2901/Fyrre-Magazine/main/src/data/news.json',
  );

  if (!res.ok) {
    throw new Error('Failed to fetch news data');
  }

  return res.json();
}
