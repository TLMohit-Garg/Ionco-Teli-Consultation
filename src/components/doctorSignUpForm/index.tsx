import { Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createDoctorsSchema } from "../../utils/validation";
import CustomTextField from "../customTextField";
import styles from "../../Styles/doctorsSignup.module.css";
import CustomSelect from "../customSelect";
import perInfoData from "../infoDataJSON/userData.json";

export default function DoctorSignup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  }: any = useForm({
    resolver: yupResolver(createDoctorsSchema),
  });
  const handleSignup = (data: any) => {
    alert(JSON.stringify(data));
  };
  return (
    <Grid container xs={12} md={12} sm={12} lg={12} xl={12}>
      <Grid container item xs={6} md={6} sm={6} lg={6} xl={6} sx={{background:"grey"}}>
        leftSide
      </Grid>
      <Grid container item xs={6} md={6} sm={6} lg={6} xl={6} >
        <form onSubmit={handleSubmit(handleSignup)} style={{width:"100%"}}>
          <Grid container item xs={12} md={12} sm={12} lg={12} xl={12} >
            <Typography>Registartion Form</Typography>
          </Grid>
          <Grid container item xs={12} md={12} sm={12} lg={12} xl={12} mt={3}>
          <Grid item xs={6} md={6} sm={6} lg={6} xl={6} >
            <CustomTextField
              error={Boolean(errors.firstName)}
              errorCondition={
                errors.firstName && (
                  <Typography className={styles.errorMsg}>
                    {errors.firstName.message}
                  </Typography>
                )
              }
              control={control}
              name="firstName"
              fullWidth={false}
              className={styles.fieldContainer}
              placeholder="First Name"
              />
          </Grid>
          <Grid item xs={6} md={6} sm={6} lg={6} xl={6} >
          <CustomTextField
              error={Boolean(errors.lastName)}
              errorCondition={
                errors.lastName && (
                  <Typography className={styles.errorMsg}>
                    {errors.lastName.message}
                  </Typography>
                )
              }
              control={control}
              name="lastName"
              fullWidth={false}
              className={styles.fieldContainer}
              placeholder="Last Name"
              />
          </Grid>
          </Grid>

          {/* Second Row start */}
          <Grid container item xs={12} md={12} sm={12} lg={12} xl={12} mt={3}>
          <Grid item xs={6} md={6} sm={6} lg={6} xl={6} >
            <CustomTextField
              error={Boolean(errors.password)}
              errorCondition={
                errors.password && (
                  <Typography className={styles.errorMsg}>
                    {errors.password.message}
                  </Typography>
                )
              }
              control={control}
              name="password"
              fullWidth={false}
              className={styles.fieldContainer}
              placeholder="Password"
              />
          </Grid>
          <Grid item xs={6} md={6} sm={6} lg={6} xl={6} >
          <CustomTextField
              error={Boolean(errors.confirmPassword)}
              errorCondition={
                errors.confirmPassword && (
                  <Typography className={styles.errorMsg}>
                    {errors.confirmPassword.message}
                  </Typography>
                )
              }
              control={control}
              name="confirmPassword"
              fullWidth={false}
              className={styles.fieldContainer}
              placeholder="Confirm Password"
              />
          </Grid>
          </Grid>

          {/* Third Row start */}
          <Grid container item xs={12} md={12} sm={12} lg={12} xl={12} mt={3}>
          <Grid item xs={6} md={6} sm={6} lg={6} xl={6} >
          <CustomSelect
              error={Boolean(errors.nationality)}
              errorCondition={
                errors.nationality && (
                  <Typography className={styles.errorMsg}>
                    {errors.nationality.message}
                  </Typography>
                )
              }
              control={control}
              name="nationality"
              selectData={perInfoData.nationality}
              placeHolder="Select nationality"
              selectFieldCss={styles.selectField}
              />
          </Grid>
          <Grid item xs={6} md={6} sm={6} lg={6} xl={6}>
            <CustomSelect
              error={Boolean(errors.gender)}
              errorCondition={
                errors.gender && (
                  <Typography className={styles.errorMsg}>
                    {errors.gender.message}
                  </Typography>
                )
              }
              control={control}
              name="gender"
              selectData={perInfoData.gender}
              placeHolder="Select Gender"
              selectFieldCss={styles.selectField}
              />
          </Grid>
          </Grid>
          <Grid mt={3}>
          <input type="submit"/>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
