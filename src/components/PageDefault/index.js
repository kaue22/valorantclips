import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';


const Main = styled.main`
    background-color  :var(--black);
    color: var(--white);
<<<<<<< HEAD
    flex: 1;
=======
    flex:1;
>>>>>>> master
    padding-top:50px;
    padding-left:5%;
    padding-right:5%;
`;

function PageDefault({ children }) {
    return (
<<<<<<< HEAD
        <>
=======
        <div>
>>>>>>> master
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
<<<<<<< HEAD
        </>
=======
        </div>
>>>>>>> master
    );
}

export default PageDefault;