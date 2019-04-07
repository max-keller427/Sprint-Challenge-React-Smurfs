import React, { Component } from "react";

import Smurf from "./Smurf";
import styled from "styled-components";

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-bottom: 50px;
`;
const NoPadding = styled.ul`
  padding: 0;
  margin: 0;
`;
class Smurfs extends Component {
  render() {
    return (
      <ListDiv>
        <h1>Smurf Village</h1>
        <NoPadding>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </NoPadding>
      </ListDiv>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
