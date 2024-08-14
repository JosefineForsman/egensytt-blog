export type BlogPost = {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    slug: string;
    materialsAndTools: string[];
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    title: string;
    excerpt: string;
    metadata: {
      tags: Array<{
        sys: {
          id: string;
        };
      }>;
    };
  };
};
export type BlogPostsProps = {
  blogPosts: BlogPost[];
};
export type Post = {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
};
