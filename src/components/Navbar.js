import React, { useState, useEffect, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { flexbox } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import { sizing } from "@material-ui/system";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "64px !important",
    backgroundColor: theme.myColor.WHITE,
    color: theme.myColor.BLACK,
    fontFamily: "Raleway",
    fontSize: "1.8rem",
    letterSpacing: "0.15rem",
  },
  toolbar: {
    height: "64px",
    padding: "0 15px",
  },
  cursorPointer: {
    cursor: "pointer",
  },

  inputBox: {
    width: "300px",
    border: `1.5px solid #DDDDDD`,
    borderRadius: "20px",
    textDecoration: "none",
  },

  input: {
    width: "250px",
    fontFamily: "Roboto",
    border: "none",
    outline: "none",
    fontSize: "0.85rem",
    textDecoration: "none",
  },

  profile: {
    position: "relative",
  },

  profileDropdown: {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    transform: "translateX(-40%)",
    borderRadius: "8px",
    position: "absolute",
    left: 0,
    backgroundColor: theme.myColor.WHITEDARKER,
    width: "100px",
    fontSize: "0.8rem",
    fontWeight: "700",
    letterSpacing: "0.5px",
    "& li": {
      padding: "2px 1px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& span": {
        marginLeft: "5px",
      },
    },
    "& ul": {
      color: theme.myColor.BLACK,
      cursor: "pointer",
      padding: 0,
      textAlign: "center",
    },
  },
}));

export default function Navbar(props) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", (e) => {
        if (node.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setOpen(false);
      });
    } else {
      document.removeEventListener("mousedown", () => {
        setOpen(!open);
      });
    }
    return () => {
      document.removeEventListener("mousedown", () => {
        setOpen(!open);
      });
    };
  }, [open]);
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar}>
      <ToolBar className={classes.toolbar}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={4 / 5}
          mx="auto"
        >
          <Box
            mr="auto"
            className={classes.cursorPointer}
            onClick={() => {
              alert("Stop clicking other stuffs. Click the goddamn Profile");
            }}
          >
            Zion
          </Box>
          <Box
            display="flex"
            alignItems="center"
            height="35px"
            p="3.5px"
            className={classes.inputBox}
            onClick={() => {
              alert("Stop clicking other stuffs. Click the goddamn Profile");
            }}
          >
            <SearchIcon
              className={classes.cursorPointer}
              style={{ padding: "0 3.5px" }}
            />
            <input
              placeholder="What are you looking for?"
              className={classes.input}
            ></input>
          </Box>
          <Box ml="auto" className={classes.profile} ref={node}>
            <AccountCircleIcon
              className={classes.cursorPointer}
              onClick={() => {
                setOpen(!open);
              }}
            />

            {open && (
              <div className={classes.profileDropdown}>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <SettingsIcon style={{}} />
                    <span style={{ width: "55px", textAlign: "left" }}>
                      Settings
                    </span>
                  </li>
                  <li>
                    <ExitToAppIcon style={{}} />
                    <span style={{ width: "55px", textAlign: "left" }}>
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </Box>
        </Box>
      </ToolBar>
    </AppBar>
  );
}
