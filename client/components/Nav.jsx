import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Nav = ({ value, setValue }) => {
  return (
    <BottomNavigation
      showLabels
      value={value ?? 0}
      onChange={(event, newValue) => {
        // setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Jobs" icon={<WorkIcon />} />
      <BottomNavigationAction label="Saved" icon={<BookmarkIcon />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
};

export default Nav;
