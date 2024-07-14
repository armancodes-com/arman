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

# How to The Project Works?

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

The `publishedAt` prop will be set when the article content is published for the first time. But `updatedAt` tells when was the last time the articles got some updates.

```mdx
---
title: "What is Decorator Design Pattern?"
summary: "In software engineering, software design patterns are common solutions for common problems."
publishedAt: "2023-11-28"
updatedAt: "2024-11-28"
---
```

### Tags

Each article elaborates on some topics. You can set those topics here with `tags` props which is an array of strings to be visible at the end of the article content.

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

Some articles may have part 1 or part 2, or they may be relevant to each other. You can make this happen by setting `hasSereis` prop to `true`. By default, this prop is set to `false`.

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

An article may have some headings that we want to have on the right side of the web page. To have those links that a user can click on them and navigate to different parts of the article, you can easily provide those links in an array. Pay attention that those links should exist in the article's content as headings. Otherwise, they cannot be linked properly.

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

# What if articles are related to each other?

## articles Series feature

To link articles to each other, you need to pass these props to all articles that are linked together or complete a series of articles with the same topic. By passing `hasSeries` props and setting it to `true`, the `ArticlesSeries` component will be shown to the user. The `blogSeriesLinks` prop is used to show the list of links to the user, like the image below:
![Article series](http://armancodes.com/images/article-series.png)

```mdx
hasSeries: true // default is false
blogSeriesLinks:
[
{
title: "What is Decorator Design Pattern?",
link: "/articles/what-is-decorator-design-pattern",
isCurrent: true,
episode: 1,
},
{ title: "Perfectionism: A Path to Nowhere", episode: 2 },
]
```

Remember that the series links should be in any order you want them to be shown in the list. Please set the episode props as if the user clicks on the link of that article, we want to tell the user that the current article's episode is in the series.

If any of the articles in the series is not yet ready to be published or read, just remove `link` prop from it. In this case, the article's link will be disabled when shown to the user.

## Articles Main Category

If you want to set a main category for your articles and show it in the list of articles, just pass the `category` prop to your articles. It is a string.

```mdx
category: "sample category"
```
