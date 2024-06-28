# Armancodes

This is a personal portfolio for Arman Ahmadi as a back-end engineer. You can check it out here: [armancodes.com](https://armancodes.com).

## Installation

To install the project, run this command after you have cloned it.

```bash
npm install
```

## Run the Project

To run the project locally, you can use this command:

```bash
npm run dev
```

## Tests

You can run these scripts to see the project testing status

```bash
# run all tests once
npm run test
# run all tests in watch mode
npm run test:watch
# run all tests' coverage once
npm run test:coverage
# run all tests' coverage in watch mode
npm run test:coverage-watch
```

## Storybook

Components have used storybook for documentation. To see documents and how components work, you can run this script:

```bash
npm run storybook
```

# How to The project Works?

We have used MDX and `contentlayer` for writing articles and each article is a `.mdx` file. For example, to create a new blog simply create a file in `/src/content`. Such as `sample-article.mdx`.

## How to write an article?

For each blog, there should be a heading section containing some crucial data about the article. Just pay attention that these data should be between

```
---
---
```

otherwise, it won't be taken into account.

### Title

To add a title to our blog, we simply need to add:

```mdx
---
title: "What is Decorator Design Pattern?"
---
```

### Summary

```mdx
---
title: "What is Decorator Design Pattern?"
summary: "In software engineering, software design patterns are common solutions for common problems."
---
```

### publishedAt / updatedAt

The `publishedAt` prop will set when the article content was actually published for the first time. But `updatedAt` tells when was the last time the articles has got some updates.

```mdx
---
title: "What is Decorator Design Pattern?"
summary: "In software engineering, software design patterns are common solutions for common problems."
publishedAt: "2023-11-28"
updatedAt: "2024-11-28"
---
```

### Tags

Each article is elaborating about some topics. You can set those topics here with `tags` props which is an array of strings to be visible at the end of the article content.

```mdx
---
title: "What is Decorator Design Pattern?"
summary: "In software engineering, software design patterns are common solutions for common problems."
publishedAt: "2023-11-28"
updatedAt: "2024-11-28"
tags: ["PHP", "Design Pattern", "Software Engineering", "OOP"]
---
```

### Articles relevant to each other like series

Some articles may have part 1 or part 2, or they may be relevant to each other. You can make this happen by setting `hasSereis` prop to `true`. By default, this props is set to `false`.

```mdx
---
title: "What is Decorator Design Pattern?"
summary: "In software engineering, software design patterns are common solutions for common problems."
publishedAt: "2023-11-28"
updatedAt: "2024-11-28"
tags: ["PHP", "Design Pattern", "Software Engineering", "OOP"]
hasSeries: false
---
```

### Sidebar links

An article may have some headings that we want to have them on the right side of the web page. To have thos links that a user can click on them and navigate to different parts of the article, you can easily provide those links in an array. Pay attention that those links should exist in the articles content as headings. Otherwise they cannot be linked properly.

```mdx
---
title: "What is Decorator Design Pattern?"
summary: "In software engineering, software design patterns are common solutions for common problems."
publishedAt: "2023-11-28"
updatedAt: "2024-11-28"
tags: ["PHP", "Design Pattern", "Software Engineering", "OOP"]
hasSeries: false
sidebarLinks:
  ["what is the design pattern", "problem", "solution decorator design pattern"]
---
```

As you can see in the above example, we only want two sidebar links. These two headings do exist within the content body, so we can have them here and they will get linked automatically.
Do not set a link heading which does not exist in the article content.

### Main Image

Every article may have a hero image which makes users fall into its content and read more of the article. You can set that image using the `image` prop like this:

```mdx
---
title: "What is Decorator Design Pattern?"
summary: "In software engineering, software design patterns are common solutions for common problems."
publishedAt: "2023-11-28"
updatedAt: "2024-11-28"
tags: ["PHP", "Design Pattern", "Software Engineering", "OOP"]
hasSeries: false
sidebarLinks:
  ["what is the design pattern", "problem", "solution decorator design pattern"]
image: "/the-path-to-image.jpg"
---
```

### SEO

Now, it is time to elaborate on SEO for articles. SEO is an important aspect of every web page nowadays. These are the SEO tags that we can have inside of articles to boost them in search engines:

```mdx
---
ogTitle: "Perfectionism: A Path to Nowhere"
ogType: "website"
ogUrl: "https://armancodes.com/articles/perfectionism-a-path-to-nowhere"
ogImage: "https://armancodes.com/articles/2-perfectionism-a-path-to-nowhere/perfectionism-a-path-to-nowhere.jpg"
twitterImage: "https://armancodes.com/articles/2-perfectionism-a-path-to-nowhere/perfectionism-a-path-to-nowhere.jpg"
twitterUrl: "https://armancodes.com/articles/perfectionism-a-path-to-nowhere"
twitterTitle: "Perfectionism: A Path to Nowhere"
keywords:
  [
    "Overcoming perfectionism",
    "How to stop being a perfectionist",
    "Dangers of perfectionism",
    "Benefits of imperfection",
  ]
author: "Arman Ahmadi"
---
```
