import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <PrimaryButton {...rest}>
        <span>{children}</span>
      </PrimaryButton>
    );
  }
}

const PrimaryButton = styled.button`
  position: relative;
  width: 150px;
  height: 50px;
  position: relative;
  padding: 25px 0px;
  border-radius: 40px;
  text-align: center;
  line-height: 1px;
  font-size: 17px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  color: #333;
  background-color: #fff;
  border: none;
  /* box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); */
  /* transition: all 0.3s ease 0s; */
  outline: none;
  &:hover {
    /* background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px); */
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
`;

export default Button;
