import styles from "../../Styles/home.module.css";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [jokes, setJokes] = useState([]);
useEffect(() => {
  axios.get("/api/jokes")
  .then((response) => {
    setJokes(response.data);
  })
  .catch(({error}:any) => {
    console.log("Error");
  });
});
  return (
    <>
      <Grid
        className={styles.completeBannerSectionGroup}
        container
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        mt={12}
        mb={12}
        justifyContent={"center"}
      >
        <Grid
          className={styles.teliConsultationWith}
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          justifyContent={"center"}
        >
          <Grid
            container
            item
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={8}
            justifyContent={"center"}
          >
            Teli Consultation With Our Doctor’s Anywhere, Anytime by Video Call
            {/* </Typography> <Typography component="span" className={styles.headerText}></Typography> */}
          </Grid>
        </Grid>
        <Grid
          className={styles.bannerParatext}
          container
          item
          xl={7}
          lg={7}
          md={7}
          sm={7}
          xs={7}
          mt={3}
          justifyContent={"end"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit
        </Grid>
      </Grid>

      <Grid
        className={styles.completeBannerSectionGroup}
        container
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        mt={12}
        mb={12}
        justifyContent={"center"}
      >
        <Grid
          className={styles.completeBannerSectionGroup}
          container
          item
          xl={7}
          lg={7}
          md={7}
          sm={7}
          xs={7}
          mt={6}
          mb={12}
          justifyContent={"center"}
        >
          left
        </Grid>
        <Grid
          className={styles.rightsideGrid}
          container
          item
          xl={5}
          lg={5}
          md={5}
          sm={5}
          xs={5}
          mt={6}
          mb={12}
          justifyContent={"start"}
        >
          <Grid
            className={styles.headerGrid}
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            mt={6}
          >
            We Provide Best Online Doctor Consultation For You
          </Grid>
          <Grid
           className={styles.paraGrid}
           container
           item
           xl={10}
           lg={10}
           md={10}
           sm={10}
           xs={10}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Grid>
          <Grid className={styles.cardsGrid}
           container
           item
           xl={12}
           lg={12}
           md={12}
           sm={12}
           xs={12}>
            <Grid 
            container
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}>first card</Grid>
            <Grid
             container
             item
             xl={6}
             lg={6}
             md={6}
             sm={6}
             xs={6}
            >{jokes.map((joke, index) => (
              <div key={joke.id}>
                <h1>{jokes.title}</h1>
                <p>{jokes.content}</p>
              </div>
            ))}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
