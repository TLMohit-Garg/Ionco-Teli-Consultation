import React from 'react';
import { Popover, Grid, TextField, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import {DoctorPopoverProps} from "../../customDataTypes/datatypes"
import styles from '../../Styles/header.module.css';


const DoctorPopover: React.FC<DoctorPopoverProps> = ({ open, anchorEl, handleClose }:DoctorPopoverProps) => {
  return (
    <Popover
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Grid
        container
        className={styles.doctorLoginParentsection}
        sx={{ width: 250 }}
      >
        <Grid className={styles.doctorHeader}>I want to be a part of Doctors</Grid>
        <Grid className={styles.doctorHeader}>My Login area</Grid>
        <Divider className={styles.divider} />
        <Grid className={styles.email}>Telephone number or email</Grid>
        <Grid container justifyContent={'center'}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid className={styles.password}>Password</Grid>
        <Grid container justifyContent={'center'}>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid className={styles.forgetPassword}>
          Have you forgotten your password?
        </Grid>
        <Grid container justifyContent={'center'} className={styles.loginBtn}>
          <Button variant="outlined" size="large" fullWidth>
            Login
          </Button>
        </Grid>
        <Grid container justifyContent={'center'}>
          <Link to="/doctorSignup" onClick={handleClose}>
            <Button variant="text">Register</Button>
          </Link>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default DoctorPopover;
