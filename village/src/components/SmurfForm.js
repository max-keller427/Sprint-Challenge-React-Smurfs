import React, { Component } from "react";
import axios from "axios";

import styled from "styled-components";

const ContainerDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 150px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: 1px solid white;
  ::placeholder {
    color: #3b98e4;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: white;
  color: #3b98e4;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  color: white;
  margin-left: 4px;
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", this.state)
      .then(res => {
        this.props.updateSmurfs(res.data);
      })
      .catch(err => console.log(err));
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ContainerDiv>
        <StyledH2>Add A Smurf!</StyledH2>
        <StyledForm onSubmit={this.addSmurf}>
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <StyledButton type="submit">Add to the village</StyledButton>
        </StyledForm>
      </ContainerDiv>
    );
  }
}

export default SmurfForm;
