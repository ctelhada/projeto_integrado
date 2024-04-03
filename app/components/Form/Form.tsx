"use client";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setInput } from "../../redux/breakify-slice";
import { BreakifyButton, FormWrapper } from "./form.styles";

export const Form = () => {
  const [firstName, setFirstName] = useState("Don't keep them waitintg!");

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setInput({ firstName }));
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
          padding: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="firstName" style={{ margin: "1rem" }}>
            Type your target profile here!
          </label>
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
      </div>
      <BreakifyButton type="submit" onClick={handleSubmit}>
        Hit it off!
      </BreakifyButton>
    </FormWrapper>
  );
};
