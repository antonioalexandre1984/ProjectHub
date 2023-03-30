import styled from 'styled-components';

export const Container = styled.div`

`;

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    text-align: center;
    box-shadow: 5px 5px 10px 2px rgba(95,95,95,0.24);
    border-radius: 10px;
    gap: 15px;
    background: #2b3566;
    margin-bottom: 5rem;
    margin-top: 3rem;
    border: 1px solid #fff;
    width: 300px;
    height: 350px;
    line-height: 1.5rem;
`;

export const CardItemImage = styled.div`
img {
    margin-top: -90px;
    border: 4px solid #644aff;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom:20px;
}

`;

export const CardItemTitle = styled.div`
display: flex;
justify-content: center;
h3 {
    margin-top: -1rem;
    font-size: 2rem;
    font-weight: 500;
    padding: 20px 25px;
    border-radius: 4px;
    color:#fff;
    Padding:10px;
    background-color:#644aff;
}`;

export const CardItemInfo = styled.div`
margin-top: -30px;
line-height: 2rem;
color: #fff;

h4{
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 15px;
    color:#4ed8c7;
}

h3{
    font-size: 1.2rem;
}

`;

export const CarItemUserName = styled.div`
margin-top: 30px;
font-size: 1.5rem;
line-height: 2rem;
color: #fff;
padding: 1px 20px;
border-radius: 6px;
background-color: #9da5d1;
border: 1px solid #644aff;


span{
    font-size: 1.5rem;
    font-weight: 500;
    color:#644aff;
}
`;
