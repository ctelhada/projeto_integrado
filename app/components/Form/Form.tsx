"use client";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setInput } from "../../redux/breakify-slice";
import { BreakifyButton, FormWrapper } from "./form.styles";

export const Form = () => {
  const [firstName, setFirstName] = useState("Breaking");
  const [lastName, setLastName] = useState("Bad");

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setInput({ firstName, lastName }));
  };

  return (
    <FormWrapper
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="flex gap-4 mt-8"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "2rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
          }}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            style={{
              width: "100%",
              height: "2rem",
              backgroundColor: "white",
              color: "black",
              borderRadius: 6,
            }}
            onChange={function (e) {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
          }}
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            onChange={function (e) {
              setLastName(e.target.value);
            }}
            style={{
              width: "100%",
              height: "2rem",
              backgroundColor: "white",
              borderRadius: 6,
              color: "black",
            }}
            value={lastName}
          />
        </div>
      </div>
      <BreakifyButton type="submit" onClick={handleSubmit}>
        Breakify
      </BreakifyButton>
    </FormWrapper>
  );
};
