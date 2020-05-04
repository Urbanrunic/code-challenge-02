import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";
import styled from "styled-components";

import { useSignUpForm } from "../../hooks/useSignupForm";

const StyledContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default function Signup() {
  const signupSubmit = () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           NPI Number: ${inputs.npiNumber}
           Address: ${inputs.buisnessAddress}
           Telephone Number: ${inputs.telephoneNumber}
           Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    signupSubmit
  );

  return (
    <form onSubmit={handleSubmit}>
      <StyledContainer>
        <FormControl>
          <InputLabel htmlFor="first-name">First Name</InputLabel>
          <Input
            id="first-name"
            type="text"
            onChange={handleInputChange}
            value={inputs.firstName}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="last-name">Last Name</InputLabel>
          <Input
            id="last-name"
            type="text"
            onChange={handleInputChange}
            value={inputs.lastName}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="npi-number">NPI Number</InputLabel>
          <Input
            id="npi-number"
            type="text"
            onChange={handleInputChange}
            value={inputs.npiNumber}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="business-address">Business Address</InputLabel>
          <Input
            id="business-address"
            type="text"
            onChange={handleInputChange}
            value={inputs.businessAddress}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="telephone-number">Telephone Number</InputLabel>
          <Input
            id="telephone-number"
            type="text"
            onChange={handleInputChange}
            value={inputs.telephoneNumber}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            type="text"
            onChange={handleInputChange}
            value={inputs.email}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <Button type="submit">Sign Up</Button>
      </StyledContainer>
    </form>
  );
}
