import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/imgs/logo-donut_1.svg";
// import icon from "../../../assets/imgs/cart-icon.svg";

export default function NavBar() {
  const Nav = styled.div`
    background: pink;
    padding: 13px 5%;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 2.5%;
  `;
  return (
    <Nav>
      <Link to={"/donuts-3D-landingpage/"}>
        <img src={logo} width={"40px"} />
      </Link>
      <Link to={"/donuts-3D-landingpage/"}>Home</Link>
      <Link to={"/donuts-3D-landingpage/menu"}>Your Donut</Link>
      {/* <Link to={"/donuts-3D-landingpage/cart"} style={{ marginLeft: "auto" }}>
        <img src={icon} width={"30px"} />
      </Link> */}
    </Nav>
  );
}
