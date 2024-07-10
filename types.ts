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
