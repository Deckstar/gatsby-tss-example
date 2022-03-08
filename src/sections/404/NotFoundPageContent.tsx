import { Container, Theme, Typography } from "@mui/material";
import { Link } from "gatsby";
import * as React from "react";

import { makeStyles } from "../../theme/themes";

const useStyles = makeStyles()((theme: Theme) => ({
  pageStyles: {
    padding: theme.spacing(24),
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  },
  headingStyles: {
    marginBottom: theme.spacing(16),
    maxWidth: theme.breakpoints.values.sm,
  },
  paragraphStyles: {
    marginBottom: theme.spacing(12),
  },
  codeStyles: {
    color: theme.palette.primary.main,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    fontSize: "1.25rem",
    borderRadius: theme.spacing(1),
  },
}));

const NotFoundPageContent = () => {
  const { classes } = useStyles();

  return (
    <Container component="main" className={classes.pageStyles}>
      <Typography variant="h1" className={classes.headingStyles}>
        Page not found
      </Typography>
      <Typography className={classes.paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <code>
            <br />
            Try creating a page in{" "}
            <code className={classes.codeStyles}>src/pages/</code>.
            <br />
          </code>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </Typography>
    </Container>
  );
};

export default NotFoundPageContent;
