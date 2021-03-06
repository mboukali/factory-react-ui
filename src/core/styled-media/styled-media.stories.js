import React from 'react';
import { Container } from '../../components';
import styled from 'styled-components';
import { greaterThan, between, lessThan } from './index';


const StyledBox = styled.div`
    display: block;
    padding: 18px;
    border: 2px solid;
    margin: 1rem auto;
`;

const StyledGreaterThan = styled(StyledBox)`
    border-color: red;
    ${
        props => greaterThan('md')`
            border-color: blue;
        `
    }
`;

const StryledLessThan = styled(StyledBox)`
    border-color: red;
    ${
        props => lessThan('md')`
            border-color: blue;
        `
    }
`

const StryledBetwwen = styled(StyledBox)`
    border-color: red;
    ${
        props => between('md', 'lg')`
            border-color: blue;
        `
    }
`

export const GenerateMedia = () => {

    return <Container>
            <StyledGreaterThan>geatherThan</StyledGreaterThan>
            <StryledLessThan>lessThan</StryledLessThan>
            <StryledBetwwen>between</StryledBetwwen>
        </Container>
}

export default {
    title: 'Core/StyledBox',
};