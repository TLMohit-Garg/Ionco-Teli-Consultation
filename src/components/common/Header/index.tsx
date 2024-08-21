import React from "react";
import { Grid, Typography } from "@mui/material";
import ioncoLogo from "../../../assets/IoncoSolutionsLogo.png";
import IconLabelButtons from "../../CustomButton/Button";
import stethoscope from "../../../assets/SythethoScope.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "@mui/material/Divider";
import styles from "../../../Styles/header.module.css";
import { Link } from "react-router-dom";
import DoctorPopover from "../../doctorPopover";
import PatientPopover from "../../patientPopover";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [showpopover, setShowpopover] =
    React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Patient popover
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Doctor popover
  const openPopover = Boolean(showpopover);
  const idLogin = openPopover ? "simple" : undefined;
  const handleloginPopover = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowpopover(e.currentTarget);
  };
  const closePopover = () => {
    setShowpopover(null);
  };

  return (
    <>
      <Grid container spacing={3} className={styles.parentGrid}>
        <Grid container item xs={4} md={4} sm={4} lg={4} xl={4}>
          <Grid
            item
            container
            xs={12}
            md={6}
            sm={12}
            lg={4}
            xl={4}
            justifyContent="center"
            alignItems="center"
            className={styles.imageStack}
          >
            <Link to="/home">
              <img src={ioncoLogo} alt="logo" className={styles.logo} />
            </Link>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            sm={12}
            lg={8}
            xl={8}
            justifyContent="left"
            alignItems="center"
            className={styles.logoText}
          >
            {/* <Typography className={styles.logoTextspan} >IONCO<span style={{color:"#10A0BD"}}>TELI</span>CONSULTATION</Typography> */}
            IONCO<span className={styles.innerlogoText}>TELI</span>CONSULTATION
          </Grid>
        </Grid>
        <Grid container item xs={4} md={4} sm={4} lg={5} xl={5}>
          <Grid
            item
            container
            xs={12}
            md={6}
            sm={12}
            lg={7}
            xl={7}
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconLabelButtons
              onClick={handleloginPopover}
              name="I'm a Doctor"
              className={styles.IconLabelButtons}
              icon={
                <img
                  src={stethoscope}
                  alt="stethoscope"
                  className={styles.stethoscope}
                />
              }
              endIcon={<ArrowDropDownIcon />}
              variant="outlined"
              aria-describedby={idLogin}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            sm={12}
            lg={5}
            xl={5}
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconLabelButtons
              onClick={handleClick}
              name="I'm a Patient"
              className={styles.IconLabelButtons}
              icon={<PersonIcon style={{ fontSize: 30, color: "#10A0BD" }} />}
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              aria-describedby={id}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          md={3}
          sm={3}
          lg={3}
          xl={3}
          className={styles.headerPhoneSection}
        >
          <Grid
            container
            item
            xs={6}
            md={6}
            sm={12}
            lg={5}
            xl={5}
            justifyContent="flex-end"
            alignItems="center"
            className={styles.PhoneSectionheader}
          >
            <LocalPhoneIcon
              className={styles.PhoneIcon}
              sx={{ fontSize: 32, padding: 1 }}
            />
          </Grid>
          <Grid
            container
            item
            xs={6}
            md={6}
            sm={12}
            lg={7}
            xl={7}
            justifyContent="center"
            alignItems="center"
            className={styles.phoneTextSection}
          >
            <Grid
              container
              item
              xs={12}
              md={12}
              sm={12}
              lg={12}
              xl={12}
              justifyContent="center"
            >
              <Typography className={styles.phoneText}>
                +91-8050656794
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={12}
              sm={12}
              lg={12}
              xl={12}
              justifyContent="center"
            >
              <Typography className={styles.phoneTextSec}>
                +91-8050656794
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={styles.divider} />
      </Grid>

      {/* Popover  */}
      <PatientPopover
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
      <DoctorPopover
        open={openPopover}
        anchorEl={showpopover}
        handleClose={closePopover}
      />
    </>
  );
}

export default Header;
