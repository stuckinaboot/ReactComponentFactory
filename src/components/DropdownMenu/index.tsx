import * as React from "react";

import {
  ListItemIcon,
  MenuItem,
  ListItemText,
  Button,
  ClickAwayListener,
  Grow,
  Popper,
  MenuList,
  Box,
} from "@material-ui/core";

export type SimpleMenuItemProps = {
  title?: string;
  custom?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => any;
};

// Some code from example https://material-ui.com/components/menus/
export default function DropdownMenu(props: {
  buttonContents: React.ReactNode;
  menuItems: SimpleMenuItemProps[];
}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div style={{ display: "flex" }}>
      {/* NOTE: we intentionally use Button and not IconButton 
      because using IconButton caused style issues in components outside this module, which
      seems to be a MUI bug. So sticking to Button for now. */}
      <Button ref={anchorRef} onClick={handleToggle}>
        {props.buttonContents}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
              backgroundColor: "green",
            }}
          >
            {/* NOTE: we use Box rather than Paper here
             as Paper causes a weird bug where clicking the button to
             grow the menu causes some Material-UI (MUI) styles of unrelated components
             that are outside of this module to change. Assuming this is
             a bug with MUI for now so sticking with Box for now */}
            <Box
              style={{
                border: "1px solid #f3f3f3",
                borderRadius: 20,
                boxShadow: "0px 0px 2px",
                backgroundColor: "#fafafa",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  {props.menuItems.map((item) => (
                    <MenuItem
                      onClick={(e) => {
                        handleClose(e);
                        if (item.onClick == null) {
                          return;
                        }
                        item.onClick();
                      }}
                    >
                      {item.icon != null && (
                        <ListItemIcon>{item.icon}</ListItemIcon>
                      )}
                      {(item.title != null || item.custom != null) && (
                        <ListItemText primary={item.title || item.custom} />
                      )}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Box>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
