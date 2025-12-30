interface Post {
  frontmatter: Frontmatter;
  file: string;
  url: string;
}

interface Frontmatter {
  layout: string;
  title: string;
  pubDate: Date;
  description: string;
  author: string;
  image: Image;
  tags: string[];
}

interface Image {
  url: string;
  alt: string;
}
