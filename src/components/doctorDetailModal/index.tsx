import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
// import styles from "src/Styles/EmployeDetailsModel.module.css";
import {
  Divider,
  Typography,
  Card,
  CardContent,
  colors,
  TextareaAutosize,
} from "@mui/material";
import FullScreenDialog from "../sliderModal";
import doctorimage from "../../assets/Individual-doctor.jpg";
import styles from "../../Styles/doctorSlider.module.css";
// import moment from "moment";
// import { useAppSelector } from "src/store/hooks";
// import { RootState } from "src/store/store";
// import EmployeeChangePassword from "./EmployeeChangePassword";
// import EmployeePersonalInformation from "./EmployeePersonalInformation";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CustomTextField from "../customTextField";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { consultationBookingSchema } from "../../utils/validation";
import CustomSelect from "../customSelect";
import perInfoData from "./data.json";
import PhoneInput from "../phoneInput";
import InputField from "../TextField";
import { Toast } from "../ToastMessage";
import IconLabelButtons from "../CustomButton/Button";
// import { blue } from "@mui/material/colors";

const DoctorDetailsModal = ({
  onClick,
  open,
  onClose,
  employeeDetails,
}: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const { userInfo }: any = useAppSelector(
  //     (state: RootState) => state.userSlice
  //   );

  const [selectedFile, setSelectedFile] = useState<any>();
  console.log("selectedFile", selectedFile);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  }: any = useForm({ resolver: yupResolver(consultationBookingSchema) });

  const [employee, setEmployee] = useState<any>(employeeDetails);
  const isActive = employee?.status === "ACTIVE";

  useEffect(() => {
    if (employeeDetails) {
      setEmployee(employeeDetails);
    }
  }, [employeeDetails]);

  const employeeType = employee?.employeeType;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const uploadFile = async (evt: any) => {
    try {
      const allowedFormats = ["jpeg", "jpg", "png", "svg", "pdf", "webp"];
      const file = evt.target.files[0];
      if (!file) {
        return;
      }
      const fileFormat = file.name.split(".").pop().toLowerCase();
      if (!allowedFormats.includes(fileFormat)) {
        Toast(
          "error",
          "Invalid file format. Please upload only JPEG, JPG, PNG, SVG, PDF, or WEBP files."
        );
        return;
      }
      const newFormData = new FormData();
      newFormData.append("file", evt.target.files[0]);
      newFormData.append("hostname", "localhost");
      setSelectedFile(newFormData);
    } catch (error) {
      console.error("Error uploading the file:", error);
    }
  };
  return (
    <>
      <FullScreenDialog
        onClick={onClick}
        open={open}
        direction="left"
        onClose={onClose}
        className={styles.mainSection}
        dialogClassName={styles.employeeDetailsDialog}
        PaperProps={{
          className: styles.profileMainWrapper,
        }}
        content={
          <Grid className={styles.modalContent}>
            <Grid
              container
              xs={12}
              md={12}
              sm={12}
              lg={12}
              xl={12}
              justifyContent={"space-between"}
            >
              <Grid
                item
                container
                md={6}
                sm={6}
                lg={6}
                xl={6}
                className={styles.arrow}
                justifyContent={"center"}
              >
                <Typography className={styles.textDoctor}>
                  Doctor Profile
                </Typography>
              </Grid>
              <Grid
                container
                item
                md={6}
                sm={8}
                xs={6}
                xl={6}
                justifyContent={"end"}
                className={styles.closeIcon}
              >
                <CloseIcon className={styles.closeIcon} onClick={onClose} />
              </Grid>
              <Divider className={styles.divider} />
            </Grid>

            <Grid
              container
              xs={12}
              md={12}
              sm={12}
              lg={12}
              xl={12}
              className={styles.userProfileSection}
            >
              {/* left Container starts here*/}
              <Grid
                container
                item
                xs={6}
                md={6}
                sm={6}
                lg={6}
                xl={6}
                className={styles.leftContainer}
                justifyContent={"center"}
              >
                <Grid
                  container
                  item
                  xs={12}
                  md={12}
                  sm={12}
                  lg={12}
                  xl={12}
                  justifyContent={"center"}
                >
                  <img src={doctorimage} className={styles.imageDoctor} />
                </Grid>
                <Grid
                  container
                  item
                  xs={10}
                  md={10}
                  sm={10}
                  lg={10}
                  xl={10}
                  justifyContent={"center"}
                  className={styles.infoContainer}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    md={12}
                    sm={12}
                    lg={12}
                    xl={12}
                    justifyContent={"center"}
                  >
                    <Typography className={styles.doctorName}>
                      Dr. David Wilson
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
                    justifyContent={"center"}
                  >
                    <Typography className={styles.doctorDescription}>
                      Experienced orthopedic surgeon specializing in joint
                      replacement surgeries. Experienced orthopedic surgeon
                      specializing in joint replacement surgeries.
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
                    justifyContent={"center"}
                  >
                    <Typography className={styles.consultationDone}>
                      <CheckCircleIcon
                        sx={{ fontSize: "28px", margin: "5px, 9px, 5px, 12px" }}
                      />{" "}
                      120 Consultaion done
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
                    justifyContent={"center"}
                  >
                    <Typography className={styles.consultationCharges}>
                      <MonetizationOnIcon
                        sx={{ fontSize: "28px", marginRight: "12px" }}
                      />{" "}
                      13 Hourly Charges
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* left Container ends here*/}

              {/* right Container starts here*/}
              <Grid
                container
                item
                xs={6}
                md={6}
                sm={6}
                lg={6}
                xl={6}
                className={styles.rightContainer}
                justifyContent={"center"}
              >
                <Card className={styles.bookingContainer}>
                  <CardContent>
                    <Typography className={styles.text}>
                      Book Consultation Now
                    </Typography>
                    <Divider className={styles.formdivider} />
                    <Grid
                      container
                      item
                      className={styles.fullNameContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <CustomTextField
                        error={Boolean(errors.fullName)}
                        errorCondition={
                          errors.fullName && (
                            <Typography className={styles.errorMsg}>
                              {errors.fullName.message}
                            </Typography>
                          )
                        }
                        control={control}
                        name="fullName"
                        fullWidth={true}
                        className={styles.fieldContainer}
                        placeholder="Full Name"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      className={styles.emailContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
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
                        placeholder="Email Address"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      className={styles.nationalityContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
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
                        fullWidth={true}
                        className={styles.customSelect}
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      className={styles.timezoneContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <CustomSelect
                        error={Boolean(errors.timezone)}
                        errorCondition={
                          errors.timezone && (
                            <Typography className={styles.errorMsg}>
                              {errors.timezone.message}
                            </Typography>
                          )
                        }
                        control={control}
                        name="timezone"
                        selectData={perInfoData.timezone}
                        placeHolder="Select your timezone"
                        selectFieldCss={styles.selectField}
                        fullWidth={true}
                        className={styles.customSelect}
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      className={styles.timezoneContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <PhoneInput
                        name="phone"
                        control={control}
                        error={Boolean(errors?.phone)}
                        containerClass={styles.containerPhn}
                        inputClass={`${styles.inputPhn} ${
                          Boolean(errors?.phone) ? styles.errorBorder : ""
                        }`}
                        placeholder="+91-8050656794"
                        helperText={errors?.phone?.message}
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      className={styles.timezoneContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <CustomSelect
                        error={Boolean(errors.cancertype)}
                        errorCondition={
                          errors.cancertype && (
                            <Typography className={styles.errorMsg}>
                              {errors.cancertype.message}
                            </Typography>
                          )
                        }
                        control={control}
                        name="cancertype"
                        selectData={perInfoData.cancertype}
                        placeHolder="Select your cancer type"
                        selectFieldCss={styles.selectField}
                        fullWidth={true}
                        className={styles.customSelect}
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      className={styles.timezoneContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Typography className={styles.inputHeading}>
                        Upload File (
                        <span style={{ fontWeight: "normal" }}>
                          Jpeg, Jpg, Png, SVG, Pdf, Webp
                        </span>
                        )
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      item
                      className={styles.timezoneContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <InputField
                        type="file"
                        size="medium"
                        // label="Upload Document"
                        className={styles.uploadFile}
                        error={errors.documentName !== undefined}
                        helperText={
                          errors.documentName ? "Please upload a document" : ""
                        }
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => uploadFile(event)}
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      className={styles.timezoneContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Typography className={styles.inputHeading}>
                        Reason for Consultation
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      item
                      className={styles.timezoneContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Controller
                        control={control}
                        name="description"
                        defaultValue=""
                        rules={{
                          required: true,
                          maxLength: 60,
                          pattern: /^[a-zA-Z ]*$/,
                        }}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <TextareaAutosize
                              minRows={8}
                              maxRows={10}
                              {...field}
                              className={styles.textArea}
                            />

                            {error && (
                              <Typography
                                color="error"
                                className={styles.errorMsg}
                                sx={{ fontSize: "12px" }}
                              >
                                Please enter a description (max 60 characters)
                              </Typography>
                            )}
                          </>
                        )}
                      />
                    </Grid>
                    <Grid container
                      item
                      className={styles.submitButtonContainer}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      justifyContent={"center"}
                      >
                        <IconLabelButtons 
                        name={"Book Consultation"}
                        type="submit"
                        variant="contained"
                        className={styles.buttons}
                        />
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              {/* right Container ends here*/}
            </Grid>
          </Grid>
        }
      />
    </>
  );
};

export default DoctorDetailsModal;
