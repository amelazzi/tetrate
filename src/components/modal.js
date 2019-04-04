import React from "react"
import Modal from "styled-react-modal"

import styled from "styled-components"
import { bleu } from "../styles/colors";
import { Link } from "gatsby";

const MenuIcon = styled.img`
    display: none;
    width: 4rem;
    height: 2.5rem;
    margin-left: 24rem !important;
    :hover{
        cursor: pointer;
    }
    @media (max-width: 76.7em) {
		display: block;
    }
`;

const StyledModal = Modal.styled`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${bleu};
    padding: 2rem;
    padding-top: 4rem;
    opacity: ${props => props.opacity};

    img{
        margin-top: 1rem;
        width: 3.2rem;
        margin-left: 92%;
        :hover{
            cursor: pointer;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white !important;
    text-transform: uppercase;
    margin: 0.75rem 0rem !important;
    padding: 0 !important;
    font-weight: 500;
`;

const HomeLink = styled(StyledLink)`
    margin-top: -1rem !important;
`;
const StyledH1 = styled.h1`
    font-size: 1.6rem;
    color: #afdbee;
    text-transform: uppercase;
    margin: 0.75rem 0rem;
    font-weight: 500;
    margin-bottom: 1rem !important;
`;

const SubLink = styled(StyledLink)`
    margin-left: 3rem !important;
`;

class FancyModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      opacity: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
  }

  toggleModal(e) {
    this.setState({ isOpen: !this.state.isOpen });
  }

  afterOpen() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    });
  }

  beforeClose() {
    return new Promise(resolve => {
      this.setState({ opacity: 0 });
      setTimeout(resolve, 200);
    });
  }

  render() {
    return (
      <>
        <MenuIcon src={require("../images/menu-icon.png")} onClick={this.toggleModal} alt="menu"/>
        <StyledModal
          isOpen={this.state.isOpen}
          afterOpen={this.afterOpen}
          beforeClose={this.beforeClose}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
          opacity={this.state.opacity}
          backgroundProps={{ opacity: this.state.opacity }}
        >
            <img src={require("../images/close-icon.png")} onClick={this.toggleModal} alt="close" />
          <HomeLink to='/'> Home </HomeLink>
          <StyledH1> Community </StyledH1>
                <SubLink to='/apache-skywalking'> APACHE SKYWALKING </SubLink>
                <SubLink to='/getenvoy'> GETENVOY </SubLink>
                <SubLink to='/tetrate-cloud-map'> TETRATE ISTIO CLOUD MAP OPERATOR</SubLink>
                <SubLink to='/tetrateq'> TETRATE Q </SubLink>
          <StyledLink to='/resources'> Resources </StyledLink>
          <StyledLink to='/blog'> Blog </StyledLink>
          <StyledH1 > About Us </StyledH1>
                <SubLink to='/team'> Team </SubLink>
                <SubLink to='/news'> News</SubLink>
                <SubLink to='/careers'> CAREERS </SubLink>
          <StyledLink to='/contact'> Contact </StyledLink>
        </StyledModal>
      </>
    );
  }
}

export default FancyModalButton