import styled from "styled-components";

export const Background = styled.div`
    width: ${props => props.size === 'Profile' ? '320' 
    : (props => props.size === 'MidMain' ? '670' : '170' )}px;
    height: 820px;
    padding: 40px 0px 10px 0px;
    box-sizing: border-box;
    background-color: Silver;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 20px;
`

export const StLeftProfile = styled.div`
  width: 300px;
  height: 800px;
  background-color: White;
  padding: 50px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 20px;
  align-itemS: center;
  border: 1px solid black;
`

export const StProfileImg = styled.div`
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: center;
    border: 1px solid black;
`

export const StProfileMsg = styled.div`
    width: 200px;
    height: 300px;
    text-align: center;
    display: flex;
    align-items: center;
`
export const StProfileHr = styled.hr`
    width: 230px;
    height: 2px;
    background-color: black;
    border: none;
`

export const StProfileName = styled.div`
    width: 200px;
    height: 50px;
    text-align: center;
    .span {
        color: CornflowerBlue;
        font-weight: bold;
    }
    .velogLink {
        color: CornflowerBlue;
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
            filter: brightness(0.7);
            transition: all 0.3s;
        }
    }
`

export const StProfileLike = styled.div`
    width: 200px;
    height: 70px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .heart {
        font-size: 50px;
        color: red;
        margin-right: 5px;
        cursor: pointer;
        &:hover {
            filter: brightness(0.7);
            transition: all 0.3s;
        }
        &:active {
            color: LightPink;
        }
    }
`

export const StMiddle = styled.div`
  width: 650px;
  height: 800px;
  background-color: White;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 0px 1px 1px 1px;
  border-color: black;
  border-style: solid;
`

export const StMiddleHeader = styled.div`
    box-sizing: border-box;
    padding-left: 10px;
    width: 650px;
    height: 100px;
    background-color: Silver;
    display: flex;
    align-items: flex-end;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-style: black;
`

export const StRightMenu = styled.div`
  width: 170px;
  height: 800px;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 100px;
  padding-bottom: 540px;
  justify-content: space-around;
`

export const StBtn = styled.button`
    width: ${props => props.size === '기본' ? '80' : '150'}px;
    height: ${props => props.size === '기본' ? '30' : '50'}px;
    background-color: ${props => props.btn === '기본' ? 'CornflowerBlue'
        : (props => props.btn === '기능' ? 'MediumSeaGreen' : 'IndianRed')};
    color: white;
    font-weight: bold;
    font-size: ${props => props.size === '기본' ? '12' : '24'}px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
    &:hover {
        filter: brightness(0.7);
        transition: all 0.3s;
    }
    &:active {
        background-color: LightSlateGrey;
    }
`

export const VisitedInputBox = styled.div`
    width: 600px;
    height: 250px;
    box-sizing: border-box;
    padding: 20px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-style: black;
    margin-top: 20px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`

export const VisitedInputtext = styled.textarea`
    width: 550px;
    height: 150px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    resize: none;
    box-sizing: border-box;
    padding: 10px;
`

export const VisitedInputFooter = styled.div`
    margin-left: auto;
    .span {
        font-size:14px;
    }
`
export const VisitedInputWriter = styled.input`
    width: 100px;
    height: 25px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-right: 5px;
`