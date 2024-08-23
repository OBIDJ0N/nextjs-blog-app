import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { Fragment } from "react";
import { SidebarProps } from "./sidebar.props";
import { useRouter } from "next/router";

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
  const router = useRouter();

  return (
    <Box sx={{ width: { xs: "100%", md: "30%" } }}>
      <Box
        position={"sticky"}
        top={"100px"}
        sx={{ transition: "all .3s ease" }}
      >
        <Box padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}>
          <Typography variant="h5">Latest Blog</Typography>
          <Box display={"flex"} flexDirection={"column"} mt={"20px"}>
            {latestBlogs.map((item) => (
              <Box
                key={item.id}
                mt={"20px"}
                sx={{ cursor: "pointer" }}
                onClick={() => router.push(`/blog/${item.slug}`)}
              >
                <Box display={"flex"} gap={"20px"} alignItems={"center"}>
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                    <Typography variant="body1">{item.title}</Typography>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                      <Avatar
                        src={item.author.avatar.url}
                        alt={item.author.name}
                      />
                      <Box>
                        <Typography variant="body2">
                          {item.author.name}
                        </Typography>
                        <Typography sx={{ opacity: ".6" }}>
                          {format(new Date(item.createdAt), "dd MMM, yyyy")}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ mt: "20px", backgroundColor: "gray" }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          padding={"20px"}
          border={"1px solid gray"}
          borderRadius={"8px"}
          mt={"20px"}
        >
          <Typography variant="h5">Category</Typography>
          <Box display={"flex"} flexDirection={"column"} mt={"20px"}>
            {categories.map((nav) => (
              <Fragment key={nav.slug}>
                <Button
                  onClick={() => router.push(`/category/${nav.slug}`)}
                  fullWidth
                  sx={{ justifyContent: "flex-start", height: "50px" }}
                >
                  {nav.label}
                </Button>
                <Divider sx={{ backgroundColor: "gray" }} />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;