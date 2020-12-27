import * as React from "react";

import { Grid } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

export type SimpleMenuItemProps = {
  title?: string;
  custom?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => any;
};

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function DropdownMenu(props: {
  button: React.ReactNode;
  menuItems: SimpleMenuItemProps[];
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <Grid container justify="space-around">
      <Grid item xs={12}>
        <div onClick={handleClick}>{props.button}</div>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{ style: { borderRadius: 20 } }}
        >
          {props.menuItems.map((item) => (
            <MenuItem
              onClick={() => {
                handleClose();
                if (item.onClick == null) {
                  return;
                }
                item.onClick();
              }}
            >
              {item.icon != null && <ListItemIcon>{item.icon}</ListItemIcon>}
              {(item.title != null || item.custom != null) && (
                <ListItemText primary={item.title || item.custom} />
              )}
            </MenuItem>
          ))}
        </StyledMenu>
      </Grid>
    </Grid>
  );
}
