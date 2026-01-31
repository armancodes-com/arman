export const allArticles = [
  {
    slug: "perfectionism-a-path-to-nowhere",
    title: "Perfectionism: A Path to Nowhere",
    publishedAt: "2024-06-17",
    updatedAt: "2024-06-18",
    summary:
      "An honest look at how perfectionism slows progress, fuels anxiety, and keeps developers from shipping meaningful work.",
    author: "Arman Ahmadi",
    keywords: ["perfectionism", "productivity", "mindset", "self-improvement"],
    ogImage: "/articles/test.png",
    ogDescription: "Test description",
    ogTitle: "Test OG Title",
    ogUrl: "https://armancodes.com/articles/perfectionism-a-path-to-nowhere",
    twitterDescription: "Test description",
    twitterTitle: "Test Twitter Title",
    twitterImage: "/articles/test.png",
    shareLink: "/articles/perfectionism-a-path-to-nowhere",
    canonical: "",
    baseUrl: "https://armancodes.com/",
    body: {
      code: `
<article>
  <h1>Perfectionism: A Path to Nowhere</h1>
  <p>This is a <strong>test</strong> MDX document with various elements.</p>
  <pre><code className="language-ts">{\`const x: number = 42;
console.log(x);\`}</code></pre>
  <p>
    Here is an inline code example: <code>npm run test</code> and a{" "}
    <a href="https://example.com">link</a>.
  </p>
  <ul>
    <li>First item</li>
    <li>Second item</li>
  </ul>
  <blockquote>
    <p>"Perfection is the enemy of progress."</p>
  </blockquote>
</article>
      `,
      raw: `# Perfectionism: A Path to Nowhere

This is a **test** MDX document with various elements.

\`\`\`ts
const x: number = 42;
console.log(x);
\`\`\`

Here is an inline code example: \`npm run test\` and a [link](https://example.com).

- First item
- Second item

> "Perfection is the enemy of progress."
`,
    },
    isDraft: false,
    tags: ["Perfectionism"],
    hasSeries: false,
    hasSidebarLinks: false,
    image: "/images/article.png",
    category: "Testing",
    metaDescription: "Test meta description",
    robots: "index,follow",
  },
  {
    slug: "php-vs-golang-developer-perspective",
    title:
      "PHP vs. GoLang: A Developer’s Perspective on Control, Simplicity, and Ecosystem Differences",
    publishedAt: "2024-11-02",
    updatedAt: "2024-11-02",
    summary:
      "A practical comparison of PHP and Go from a working developer's viewpoint, focusing on tooling, performance, and day‑to‑day ergonomics.",
    author: "Arman Ahmadi",
    keywords: [
      "php",
      "golang",
      "backend development",
      "language comparison",
      "performance",
    ],
    ogImage: "/articles/test.png",
    ogDescription: "Test description",
    ogTitle: "Test OG Title",
    ogUrl:
      "https://armancodes.com/articles/php-vs-golang-developer-perspective",
    twitterDescription: "Test description",
    twitterTitle: "Test Twitter Title",
    twitterImage: "/articles/test.png",
    shareLink: "/articles/php-vs-golang-developer-perspective",
    canonical: "",
    baseUrl: "https://armancodes.com/",
    body: {
      code: `
<article>
  <h1>PHP vs. GoLang: A Developer's Perspective</h1>
  <p>This MDX mock includes multiple elements to exercise the renderer.</p>
  <pre><code className="language-go">{\`package main

import "fmt"

func main() {
  fmt.Println("Hello from Go")
}\`}</code></pre>
  <p>
    Compare this with a <code>PHP</code> snippet and visit{" "}
    <a href="https://armancodes.com">the blog</a>.
  </p>
  <ol>
    <li>Control</li>
    <li>Simplicity</li>
    <li>Ecosystem</li>
  </ol>
</article>
      `,
      raw: `# PHP vs. GoLang: A Developer's Perspective

This MDX mock includes multiple elements to exercise the renderer.

\`\`\`go
package main

import "fmt"

func main() {
  fmt.Println("Hello from Go")
}
\`\`\`

Compare this with a \`PHP\` snippet and visit [the blog](https://armancodes.com).

1. Control
2. Simplicity
3. Ecosystem
`,
    },
    isDraft: false,
    tags: ["PHP"],
    hasSeries: false,
    hasSidebarLinks: false,
    image: "/images/article.png",
    category: "Testing",
    metaDescription: "Test meta description",
    robots: "index,follow",
  },
];
