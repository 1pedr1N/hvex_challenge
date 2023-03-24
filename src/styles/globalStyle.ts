import { GlobalStyleComponent, createGlobalStyle } from "styled-components";

export const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter';
    }
    
`;
