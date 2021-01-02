import * as React from "react";
import { AppBar, Toolbar, Grid, Button } from "@material-ui/core";

export type NavItem = {
  // Text for each nav item should be unique
  // as highlighting the selected nav item is does off
  // the text field
  text: string;
  endpoint: string;
};

const LIGHT_GREEN = "#2fc96c";

export default function CustomAppBar(props: {
  navItems: NavItem[];
  backgroundColor?: string;
  selectedNavItemText?: string;
  logoImg?: string;
  maxLogoWidth?: number;
  rightComp?: React.ReactNode;
  navigateToNavItem?: (navItem: NavItem) => any;
}) {
  return (
    <>
      {/* Render second toolbar below AppBar so that we push UI down enough
        (since fixed position does not impact size of UI) 
        https://material-ui.com/components/app-bar/ */}
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: props.backgroundColor }}>
          <Grid container>
            <Grid container item xs={12} alignItems="center">
              {props.logoImg != null && (
                <Grid item xs={2}>
                  <img
                    src={props.logoImg}
                    style={{ maxWidth: props.maxLogoWidth || 180 }}
                    alt="logo"
                  />
                </Grid>
              )}
              <Grid container item xs={10} justify="flex-end">
                <Grid container item xs={12} spacing={2} alignItems="center">
                  <Grid container item xs={8} spacing={2}>
                    {props.navItems.map((navItem) => (
                      <Grid item key={navItem.text}>
                        <Button
                          color="inherit"
                          style={
                            props.selectedNavItemText === navItem.text
                              ? { backgroundColor: LIGHT_GREEN }
                              : {}
                          }
                          onClick={() => {
                            if (props.navigateToNavItem != null) {
                              props.navigateToNavItem(navItem);
                            }
                          }}
                        >
                          {navItem.text}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                  {props.rightComp != null && (
                    <Grid
                      container
                      item
                      xs={4}
                      style={{
                        justifyContent: "flex-end",
                      }}
                      alignItems="center"
                    >
                      {props.rightComp}
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
