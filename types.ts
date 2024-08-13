export type BlogPost = {
  sys: {
    id: string;
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
