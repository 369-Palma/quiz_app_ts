import styled, { createGlobalStyle } from "styled-components";
import sfondoNatura from "./assets/images/sfondoNatura.webp";

/* background-image: url(${sfondo}); */
export const GLobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body{
  background-image: url(${sfondoNatura});
    background-size: cover;
    margin:0;
    padding:0 20px;
    display:flex;
    justify-content:center;
    align-items:center;
}

*{
    box-sizing: borderbox;
    font-family: "Noto", sans-serif;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
    font-size: 1.3em;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0 0 20px 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold";
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px, 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #b9f7ff3d);
    border: 2px solid #8bc34a;
    dox-shadow: 0px, 5px, 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .next {
  }
  .start {
    max-width: 200px;
  }
`;
