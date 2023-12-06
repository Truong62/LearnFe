import React from 'react';
import styled from "styled-components"


const StyledCard = styled.div`
    position: relative;
    width: 400px;

`;
const CardImage = styled.div`
    height: 400px ;
    width: 100%;
    border-radius: 8px;
`;
const CardImg = styled.img`
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;
const CardContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: #ffff;
    z-index: 10;
    width: calc(100% - 36px);
    border-radius: 20px;
    padding: 20px;
    bottom: 0;
`;
const CArdTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    column-gap: 12px;
`
const CArduser = styled.div`
    display: flex;
    align-items: center;
`
const USerAva = styled.img`
    width: 30px;
    height: 30;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
`
const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CardTitle = styled.h3`
   color: black;
   font-size: 18px;
   font-weight: 400;
`
const CardValue = styled.span`
   color: black;
   font-size: 18px;
   font-weight: bold;
   background: linear-gradient(86.88deg,#7d6aff 1.38%,#ffb86c 64.35%,#fc2872 119.91%);
   color: transparent;
   -webkit-background-clip: text;
   background-clip: text;
`
const UserNames = styled.span`
    color: #333;
    font-weight: 300;
    font-size: 16px;
`
const Card = () => {
    return (
        <StyledCard>
            <CardImage>
                <CardImg src="https://cdn.dribbble.com/users/2400293/screenshots/16199819/media/da37d2697adeab224a21b8b85a0ed225.png?resize=1000x750&vertical=center" alt="" />
            </CardImage>
            <CardContent>
                <CArdTop>
                    <CArduser>
                        <USerAva src="https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1200x900" alt="" />
                        <UserNames>@NNT</UserNames>
                    </CArduser>
                    <div>
                        256
                    </div>
                </CArdTop>
                <CardFooter>
                    <CardTitle>MINECRAFT</CardTitle>
                    <CardValue>12.000 $</CardValue>
                </CardFooter>
            </CardContent>
        </StyledCard>
    );
};

export default Card;