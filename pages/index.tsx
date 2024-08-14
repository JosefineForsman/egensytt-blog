import BlogPostCard from "@/components/BlogPostCard";
import { Grid, Box, Typography } from "@mui/material";
import { createClient } from "contentful";
import { BlogPostsProps } from "@/types";
import SideMenu from "@/components/SideMenu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      blogPosts: res.items,
    },
  };
}
export default function BlogPosts({ blogPosts }: BlogPostsProps) {
  console.log(blogPosts);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu blogPosts={blogPosts} />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: isSmallScreen ? "0px" : "60px",
        }}>
        <Typography
          sx={{
            color: "#151864",
            fontSize: "24px",
            fontWeight: "bold",
            margin: "30px",
          }}>
          Senaste blogg inläggen
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Grid container spacing={3} sx={{ maxWidth: 1000 }}>
            {blogPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.sys.id}>
                <BlogPostCard blogPosts={post} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
