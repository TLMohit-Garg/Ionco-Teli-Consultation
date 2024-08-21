/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  useForm,
  Controller,
  useFieldArray,
  SubmitHandler,
} from "react-hook-form";
// import "react-datepicker/dist/react-datepicker.css";
import { FormData } from "../../customDataTypes/datatypes";
// import { customSelectProps } from "../../customDataTypes/datatypes";
// import simulatedApi from "../api/api";
import axios from "axios";


const DoctorSignup: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    // setValue,
    setError,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      price: 1,
      quantity: 1,
      // age: 18,
      // gender: "",
      // address: { city: "", state: "" },
      // hobbies: [{ name: "" }],
      // startDate: new Date(),
      // subscribe: false,
      // referral: "",
    },
  });

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: "hobbies",
  // });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // setError("");
    try {
      const response = await axios.post("/api/products");
      console.log("Success:", response);
      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error: any) {
      console.error("Error:", error);
      setError("root", {
        message: error.message,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: 5 }}
    >
      <div>
        <label>First Name</label>
        <input
          {...register("name", { required: "First Name is required" })}
        />
        {errors.name && (
          <p style={{ color: "orangered" }}>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label>price</label>
        <input
          type="number"
          {...register("price", { required: "price is required" })}
        />
        {errors.price && (
          <p style={{ color: "orangered" }}>{errors.price.message}</p>
        )}
      </div>

      <div>
        <label>quantity</label>
        <input
          type="number"
          {...register("quantity", {
            required: "quantity is required",
            // pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        {errors.quantity && (
          <p style={{ color: "orangered" }}>{errors.quantity.message}</p>
        )}
      </div>

      {/* <div>
        <label>Age</label>
        <input
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "You must be at least 18 years old" },
          })}
        />
        {errors.age && (
          <p style={{ color: "orangered" }}>{errors.age.message}</p>
        )}
      </div>

      <div>
        <label>Gender</label>
        <select {...register("gender", { required: "Gender is required" })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p style={{ color: "orangered" }}>{errors.gender.message}</p>
        )}
      </div>

      <div>
        <label>Address</label>

        <input
          {...register("address.city", { required: "City is required" })}
          placeholder="City"
        />
        {errors.address?.city && (
          <p style={{ color: "orangered" }}>{errors.address.city.message}</p>
        )}

        <input
          {...register("address.state", { required: "State is required" })}
          placeholder="State"
        />
        {errors.address?.state && (
          <p style={{ color: "orangered" }}>{errors.address.state.message}</p>
        )}
      </div>

     

      <div>
        <label>Hobbies</label>
        {fields.map((item, index) => (
          <div key={item.id}>
            <input
              {...register(`hobbies.${index}.name`, {
                required: "Hobby name is required",
              })}
              placeholder="Hobby Name"
            />
            {errors.hobbies?.[index]?.name && (
              <p style={{ color: "orangered" }}>
                {errors.hobbies[index].name.message}
              </p>
            )}

            {fields.length > 1 && (
              <button type="button" onClick={() => remove(index)}>
                Remove Hobby
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => append({ name: "" })}>
          Add Hobby
        </button>
      </div>

      <div>
        <label htmlFor="sub">Subscribe to Newsletter</label>
        <input type="checkbox" id="sub" {...register("subscribe")} />
      </div>

      {getValues("subscribe") && (
        <div>
          <label>Referral Source</label>
          <input
            {...register("referral", {
              required: "Referral source is required if subscribing",
            })}
            placeholder="How did you hear about us?"
          />
          {errors.referral && (
            <p style={{ color: "orangered" }}>{errors.referral.message}</p>
          )}
        </div>
      )} */}

      {errors.root && <p style={{ color: "red" }}>{errors.root.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default DoctorSignup;
