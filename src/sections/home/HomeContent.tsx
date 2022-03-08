import {
  Button,
  Container,
  Link as MuiLink,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

import useStyles from "./HomeContent.styles";

const articleHref =
  "https://dev.to/deckstar/gatsby-js-how-to-solve-fouc-when-using-tss-react-and-material-ui-v5-465f";

const HomeContent = () => {
  const { classes } = useStyles();

  return (
    <Container component="main" className={classes.mainContainer}>
      <Typography variant="h1" className={classes.title}>
        TSS and Gatsby
      </Typography>

      <Typography>Welcome! 🙂</Typography>

      <Typography>
        This is an example of how to use{" "}
        <MuiLink href="https://docs.tss-react.dev" target="_blank">
          tss-react
        </MuiLink>{" "}
        with{" "}
        <MuiLink href="https://www.gatsbyjs.com" target="_blank">
          Gatsby JS
        </MuiLink>{" "}
        and{" "}
        <MuiLink href="https://mui.com" target="_blank">
          Material UI
        </MuiLink>
        .
      </Typography>

      <div className={classes.centeredContainer}>
        <Paper className={classes.paper}>
          <Typography>
            For a step-by-step walk-through on how to implement tss-react to
            your Gatsby site, please consult{" "}
            <MuiLink href={articleHref} target="_blank">
              this article
            </MuiLink>
            .
          </Typography>

          <MuiLink href={articleHref} target="_blank" underline="none">
            <Button variant="contained" className={classes.buttonLink}>
              Link to article
            </Button>
          </MuiLink>
        </Paper>
      </div>

      <div className={classes.centeredContainer}>
        <Typography component="h2" variant="h4">
          Good luck and have fun! 😉
        </Typography>
      </div>
    </Container>
  );
};

export default HomeContent;
