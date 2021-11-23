import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

function PricingScreen() {
  const [data, setData] = React.useState([]);

  const handlePlanClicked = (tier) => {
    alert("handleSignUpClicked title " + tier.title);
  };

  React.useEffect(() => {
    fetch("/api/plans")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <React.Fragment>
      <Container disableGutters component="main" sx={{ pt: 6, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Choose a plan
        </Typography>
      </Container>

      <Container maxWidth="md" component="main">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
          }}
        >
          {data.map((tier) => (
            <Grid item key={tier.title} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /month
                    </Typography>
                  </Box>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                    }}
                  >
                    {tier.details.map((item) => (
                      <Box
                        style={{ display: "flex", alignItems: "center" }}
                        key={item[0]}
                      >
                        {item[1] ? (
                          <DoneIcon style={{ color: "green" }} />
                        ) : (
                          <CloseIcon />
                        )}
                        <Typography
                          style={{ marginLeft: "8px" }}
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={item[0]}
                        >
                          {item[0]}
                        </Typography>
                      </Box>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    onClick={() => handlePlanClicked(tier)}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default PricingScreen;
