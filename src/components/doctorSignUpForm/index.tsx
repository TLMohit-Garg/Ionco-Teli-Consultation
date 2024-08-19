import { Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createDoctorsSchema } from "../../utils/validation";
import CustomTextField from "../customTextField";
import styles from "../../Styles/doctorsSignup.module.css";
import CustomSelect from "../customSelect";
import perInfoData from "../infoDataJSON/userData.json";
import PhoneInput from "../phoneInput";
import IconLabelButtons from "../CustomButton/Button";

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
    <Grid container xs={12} md={12} sm={12} lg={12} xl={12} justifyContent={"space-evenly"}>
      <Grid
        container
        item
        xs={5}
        md={5}
        sm={5}
        lg={5}
        xl={5}
        sx={{ background: "lightGrey" }}
      >
        leftSide
      </Grid>
      <Grid container item xs={5} md={5} sm={5} lg={5} xl={5} className={styles.parentContainer}>
        <form onSubmit={handleSubmit(handleSignup)} style={{ width: "100%" }}>
          <Grid container item xs={12} md={12} sm={12} lg={12} xl={12}>
            <Typography>Registration Form</Typography>
          </Grid>
          <Grid container item xs={12} md={12} sm={12} lg={12} xl={12} mt={3} justifyContent={"space-between"}>
            <Grid container item xs={12} md={5} sm={12} lg={5} xl={5} >
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
                fullWidth={true}
                className={styles.fieldContainer}
                placeholder="First Name"
              />
            </Grid>
            <Grid container item xs={12} md={5} sm={12} lg={5} xl={5}>
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
                fullWidth={true}
                className={styles.fieldContainer}
                placeholder="Last Name"
              />
            </Grid>
          </Grid>

          {/* Second Row start */}
          <Grid container item xs={12} md={12} sm={12} lg={12} xl={12} mt={3} justifyContent={"space-between"}>
            <Grid container item xs={12} md={5} sm={12} lg={5} xl={5}>
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
                fullWidth={true}
                className={styles.fieldContainer}
                placeholder="Password"
              />
            </Grid>
            <Grid container item xs={12} md={5} sm={12} lg={5} xl={5}>
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
                fullWidth={true}
                className={styles.fieldContainer}
                placeholder="Confirm Password"
              />
            </Grid>
          </Grid>

          {/* Third Row start */}
          <Grid container item xs={12} md={12} sm={12} lg={12} xl={12} mt={3} justifyContent={"space-between"}>
            <Grid container item xs={12} md={5} sm={12} lg={5} xl={5}>
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
            <Grid container item xs={12} md={5} sm={12} lg={5} xl={5}>
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
                // fullWidth={true}
                // sx={{width:"100%"}}
              />
            </Grid>
          </Grid>

          {/* Fourth Row start */}
          <Grid container item xs={12} md={12} sm={12} lg={12} xl={12} mt={3} justifyContent={"space-between"}>
            <Grid container item xs={12} md={5} sm={12} lg={5} xl={5}>
              <CustomTextField
                error={Boolean(errors.email)}
                errorCondition={
                  errors.email && (
                    <Typography className={styles.errorMsg}>
                      {errors.email.message}
                    </Typography>
                  )
                }
                control={control}
                name="email"
                fullWidth={true}
                className={styles.fieldContainer}
                placeholder="Email"
              />
            </Grid>
            <Grid container item xs={12} md={5} sm={12} lg={5} xl={5}>
              <CustomTextField
                error={Boolean(errors.age)}
                errorCondition={
                  errors.age && (
                    <Typography className={styles.errorMsg}>
                      {errors.age.message}
                    </Typography>
                  )
                }
                control={control}
                name="age"
                fullWidth={true}
                className={styles.fieldContainer}
                placeholder="Age"
              />
            </Grid>
          </Grid>

          {/* Fifth Row start */}
          <Grid container item xs={12} md={12} sm={12} lg={12} xl={12} mt={3} justifyContent={"space-between"} className={styles.phoneContainer}>
            <Grid item xs={6} md={6} sm={6} lg={6} xl={6}>
            <PhoneInput
            control={control}
            name="phone"
            error={Boolean(errors?.phone)}
            containerClass={styles.containerPhn}
            inputClass={`${styles.inputPhn} ${Boolean(errors?.phone) ? styles.errorBorder : ""}`}
            placeholder="+91-8050656794"
            helperText={errors?.phone?.message}
            />
            </Grid>
            
          </Grid>
          <Grid mt={3} container justifyContent={"flex-end"}>
            <IconLabelButtons
            name="CREATE MY ACCOUNT"
            className={styles.submitBtn}
            type="submit"
            />
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
