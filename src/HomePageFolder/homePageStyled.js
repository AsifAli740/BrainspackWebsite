import styled from "styled-components"
import {Box} from "@mui/material"

export const MainContainer = styled(Box)(()=>({
    width:"100%",
    height:"auto",
    // backgroundColor:"red"

}))
export const Navbar = styled(Box)(()=>({
    width:"100%",
    height:"47px",
    // backgroundColor:"#ddd",
    display:"flex",
    borderBottom: "1px solid #ddd",


}))
export const NavbarTopLeft = styled(Box)(()=>({
    width:"86%",
    height:"inherit",
    backgroundColor:"blue"

}))
export const NavbarTopRight = styled(Box)(()=>({
    width:"14%",
    height:"inherit",
    backgroundColor:"purple"

}))
