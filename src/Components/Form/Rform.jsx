import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Rform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    reset,
  } = useForm({
    defaultValues: {},
  });

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const registerRules = {
    startDate: { required: "start date is required" },
    endDate: { required: "end date is required" },
  };

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__title">
        <h2>Send your request</h2>
      </div>
      <div className="form__firstRow">
        <div className="firstRow__radio">
          <span>Choose a way</span>
          <div className="radioButtons">
            <input
              type="radio"
              id="outward"
              name="trip"
              value="outward"
              {...register("trip", {
                required: true,
              })}
            />
            <label htmlFor="outward">Outward</label>

            <input
              type="radio"
              id="roundTrip"
              name="trip"
              value="roundTrip"
              {...register("trip", { required: true })}
            />
            <label for="roundTrtip">Round Trip</label>
          </div>
          {errors.trip && <p>trip type is required</p>}
        </div>
        <div className="firstRow__routes">
          <div className="firstRow__outRoute">
            <label htmlFor="outwardRoute">Outward route</label>
            <select
              id="outwardRoute"
              {...register("outwardRoute", { required: true })}
            >
              <option value="algiers">Algiers</option>
              <option value="paris">Paris</option>
            </select>
            {errors.outwardRoute && "Outward route is required"}
          </div>

          <div className="firstRow__returnRoute">
            <label htmlFor="returnRoute">Return route</label>
            <select
              id="returnRoute"
              {...register("returnRoute", { required: true })}
            >
              <option value="algiers">Algiers</option>
              <option value="paris">Paris</option>
            </select>
            {errors.outwardRoute && <p>Return route is required</p>}
          </div>
        </div>
        <div className="firstRow__dates">
          <div className="firstRow__depDate">
            <label htmlFor="departureDate">Departure Date</label>
            <Controller
              control={control}
              name="startDate"
              rules={registerRules.startDate}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <DatePicker
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  selectsStart
                  minDate={new Date()}
                  startDate={startDate}
                  endDate={endDate}
                  className="inputDeparture"
                />
              )}
            />

            {errors.startDate && <p>{errors.startDate.message}</p>}
          </div>

          <div className="firstRow__returnDate">
            <label htmlFor="return">Return Date</label>

            <Controller
              control={control}
              name="endDate"
              rules={registerRules.endDate}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <DatePicker
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  selectsEnd
                  minDate={startDate || new Date()}
                  startDate={startDate}
                  endDate={endDate}
                />
              )}
            />
            {errors.endDate && <p>{errors.endDate.message}</p>}
          </div>
        </div>
      </div>
      <div className="form__secondRow">
        <div className="seconRow__fullName">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            {...register("fullName", { required: true, maxLength: 50 })}
          />
          {errors.fullName && <p>Please enter your full name</p>}
        </div>
        <div className="seconRow__number">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            {...register("phone", {
              required: true,
              pattern: {
                value: /^[2-9]\d{2}-\d{3}-\d{4}$/i,
                message: "Enter a valid phone number",
              },
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div className="seconRow__email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/*  <div className="seconRow__adults">
          <label htmlFor="adults">Adults</label>
          <select {...register("adults")}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div className="seconRow__children">
          <label htmlFor="children">Children</label>
          <select {...register("children")}>
            <option value={0}>0</option>

            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div> */}

        <div className="secondRow__submit">
          <label>submit</label>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </div>
      <div className="form__thirdRow">
        {/* <div className="ThirdRow__flight">
          <label htmlFor="flight">Flight</label>
          <input
            type="text"
            name="flight"
            id="flight"
            {...register("flight")}
          />
        </div> */}

        {/* <div className="ThirdRow__comment">
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            name="comment"
            id="comment"
            {...register("comment", { maxLength: 50 })}
          />
        </div> */}
        {/*  <div className="ThirdRow__submit">
          <input type="submit" />
        </div> */}
      </div>
    </form>
  );
}

export default Rform;
