import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleNavChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/ask");
        break;
      case 2:
        router.push("/notifications");
        break;
      case 3:
        router.push("/profile");
        break;
      default:
        router.push("/");
        break;
    }
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels value={value} onChange={handleNavChange}>
        <BottomNavigationAction label="Feed" icon={<AllInclusiveIcon />} />
        <BottomNavigationAction label="Ask" icon={<AddCircleOutlineIcon />} />
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsIcon />}
        />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default Nav;
