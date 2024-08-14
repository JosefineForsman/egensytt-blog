import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import { BlogPostsProps, BlogPost } from "../types";
// import { useState } from "react";
import InstagramGrid from "./InstagramGrid";
import { useMediaQuery, Theme } from "@mui/material";
import SearchBar from "./SearchBar";

const SideMenu = ({ blogPosts }: BlogPostsProps) => {
  const categories = [
    "Barnkläder",
    "Damkläder",
    "Återvunnet",
    "Inredning",
    "Sytips",
    "Tutorials",
    "Virkat",
  ];
  // Implement to select a category and filter the blogposts based on the category.
  //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: { xs: matches ? "none" : "block" },
        position: "absolute",
        left: 10,
        top: 180,
        margin: "20px",
        bgcolor: "#FFFFFF",
        padding: 2,
      }}>
      <SearchBar />
      <Typography
        sx={{
          color: "#151864",
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: 1,
        }}>
        Kategorier
      </Typography>
      <List
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
        }}>
        {categories.map((category, index) => (
          <ListItem
            button
            key={index}
            sx={{
              borderBottom: "1px solid rgba(21, 24, 100, 0.1)",
              color: "#151864",
              paddingLeft: 1,
              marginBottom: 2.5,
            }}
            // onClick={() => setSelectedCategory(category)}
          >
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
      <InstagramGrid />
    </Box>
  );
};

export default SideMenu;
