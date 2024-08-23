import { Box, IconButton, Typography } from "@mui/material";
import { format } from "date-fns";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      padding={"20px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#141414",
        color: "white",
      }}
    >
      <Typography>@ {format(new Date(), 'yyyy')} Blog. All rights reserved</Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <IconButton sx={{ color: 'white' }}>
          <TelegramIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <YouTubeIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
