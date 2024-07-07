import RSS from "rss";
import { allArticles } from "contentlayer/generated";

export async function GET() {
  // creating an RSS instance
  const feed = new RSS({
    title: "Arman Ahmadi - Backend Engineer",
    description: `Hey there! This is where I share my journey through software engineering, personal anecdotes, and articles covering a wide range of topics.`,
    site_url: "https://armancodes.com",
    feed_url: "http://armancodes.com/feed.xml",
    image_url: `https://armancodes.com/images/white-logo.svg`,
    managingEditor: "Arman Ahmadi",
    webMaster: "Arman Ahmadi",
    generator: "RSS for Node and Next.js",
    copyright: `Copyright ${new Date().getFullYear().toString()}, Arman Ahmadi`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  if (allArticles) {
    allArticles.map((article) => {
      feed.item({
        title: article.title,
        description: article.summary,
        url: `${article.baseUrl}/articles/${article.slug}`,
        categories: article.tags || [],
        author: article.author,
        date: article.publishedAt,
      });
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Conntent-Type": "application/xml; charset=utf-8",
    },
  });
}
