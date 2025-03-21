import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  `
export const Container = styled.div``
export const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 30.05px;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 60px;
`
export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 160px;
`
export const Title = styled.div`
font-size: 16px;
font-weight: 500;
line-height: 20.03px;
letter-spacing: -0.03em;
text-align: left;
padding-bottom: 10px;
`
export const GroupTitleText = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 45px;
  border-radius: 6px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  margin-bottom: 40px;
  padding-left: 10px;
`
export const ImgInput = styled.input`
  box-sizing: border-box;
  margin-bottom: 40px;
  width: 290px;
  height: 44px;
  border-radius: 6px;
  border-width: 1px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  margin-right: 8px;
  padding-left: 10px;

` 
export const ImgLabel = styled.label`
  padding: 13px 17px;
  border-radius: 6px;
  border: 1px solid #282828
  `
export const GroupContentText = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 120px;
  border-radius: 6px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  margin-bottom: 40px;
  padding-left: 10px;
`
export const ToggleContainer = styled.div`
  margin-bottom: 40px;
`
export const ToggleLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 17.53px;
  letter-spacing: -3%;
`
export const ToggleSwitch = styled.input``

export const PasswordInput = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 6px;
  opacity: 0px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  margin-bottom: 40px;
`
export const SubmitButton = styled.button`
  width: 400px;
  margin: 0 275px;
  padding: 12px;
  font-size: 16px;
  background-color: #282828;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #333;
  }
` 
export const TagContainer = styled.div`
margin-bottom: 40px;
`
export const TagInput = styled.input`
width: 400px;
height: 45px;
border-radius: 6px;
border-width: 1px;
background: #FAFAFA;
border: 1px solid #DDDDDD;
`
export const TagItem = styled.div`
gap: 5px;
`
export const TagSpan = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 17.53px;
letter-spacing: -3%;
background: #8D8D8D;
`
export const TagImg = styled.img`
width: 16px;
height: 16px;
`