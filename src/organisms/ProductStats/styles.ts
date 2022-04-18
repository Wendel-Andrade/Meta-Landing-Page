import styled from "styled-components";

export const Container = styled.div`
    text-align: right;
    position: relative;
    bottom: 20px;
    width: 50%;
    img {
        position: relative;
        margin-left: 130px;
        animation: animatedMainImage 7s linear infinite;
    }
  
    
    @keyframes animatedMainImage {
        0% {
            bottom: 0px;
        }
        50% {
            bottom: 120px;
        }
        100% {
            bottom: 0px;
        }
    }

`;