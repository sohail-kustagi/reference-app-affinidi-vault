import styled from 'styled-components'

import { pxToRem } from 'utils'

export const Tile = styled.div`
  width: ${pxToRem(360)};
  height:${pxToRem(186)};
  margin: ${pxToRem(34)} 0;
  padding: ${pxToRem(72)} ${pxToRem(50)};
  border-radius: 8px;
  box-shadow: 0 4px 44px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-family: 'lato', 'sans-serif';
  font-weight: 700;
  font-size:${pxToRem(20)};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  :nth-of-type(3){
    margin-right: 0;
  }
`

export const DarkCircle = styled.div`
width: 72px;
height: 72px;
background: rgba(16, 55, 92, 0.2);
position: relative; 
top: 70px; 
left: 50%;
transform: translateX(-50%); 
z-index: 1; 
border-radius: 50%;

div {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
`