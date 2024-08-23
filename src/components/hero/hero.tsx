import { Avatar, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { format } from "date-fns";
import { HeroProps } from "./hero.props";
import { useRouter } from "next/router";
import { calculateEstimatedTimeToRead } from "src/helpers/time.format";

const Hero = ({ blogs }: HeroProps) => {
  const router = useRouter();

  return (
    <Box width={"100%"} height={"70vh"}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {blogs.map((item) => (
          <Box
            key={item.id}
            sx={{
              position: "relative",
              width: "100%",
              height: "70vh",
              cursor: "pointer",
            }}
          >
            <Image
              src={item.image.url}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, .6)",
              }}
            />
            <Box
              position={"absolute"}
              color={"white"}
              top={"50%"}
              sx={{
                transform: "translateY(-50%)",
                paddingLeft: { xs: "10px", sm: "50px" },
              }}
            >
              <Typography sx={{ fontSize: { xs: "30px", md: "50px" } }}>
                {item.title}
              </Typography>
              <Typography
                color={"gray"}
                sx={{ fontSize: { xs: "20px", md: "25px" } }}
              >
                {item.excerpt}
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                mt={"20px"}
              >
                <Avatar src={item.author.avatar.url} alt={item.author.name} />
                <Box>
                  <Typography>{item.author.name}</Typography>
                  <Typography>
                    {format(new Date(item.createdAt), "dd MMM, yyyy")} ·{" "}
                    {calculateEstimatedTimeToRead(item.description.text)} min
                    read
                  </Typography>
                </Box>
              </Box>
              <Button variant="contained" sx={{mt: '20px', bgcolor: 'darkblue', textTransform: 'none', color: 'white'}} onClick={() => router.push(`/blog/${item.slug}`)}>See more</Button>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
