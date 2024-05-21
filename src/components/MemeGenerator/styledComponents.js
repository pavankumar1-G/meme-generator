// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  font-family: Open Sans;
  padding: 10px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-left: 20px;
  }
`
export const MemeAndGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`
export const Heading = styled.h1`
  color: #35469c;
  font-weight: 900;
  font-size: 25px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`

export const MemeAndFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`
export const MemeContainer = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.backgroundImgUrl});
  background-size: cover;
  padding-left: 10px;
  margin-bottom: 30px;
  text-align: center;
  @media screen and (min-width: 768px) {
    order: 1;
    margin-left: 30px;
    width: 100%;
    width: 350px;
    margin-left: 50px;
    height: 300px;
  }
`
export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSize}px;
`
export const MemeGenerativeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    widht: 100%;
    width: 300px;
  }
`
export const CustomLabel = styled.label`
  color: #7e858e;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 12px;
`
export const CustomInput = styled.input`
  color: #5a7184;
  font-size: 12px;
  height: 36px;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
  padding-left: 10px;
  outline: none;
  padding-right: 10px;
`
export const CustomSelect = styled.select`
  color: #1e293b;
  height: 36px;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
  padding-left: 10px;
  outline: none;
  padding-right: 10px;
  margin-bottom: 20px;
`

export const CustomOption = styled.option`
  font-size: 15px;
  font-weight: bold;
`
export const GeneratorButton = styled.button`
  width: 120px;
  height: 36px;
  background-color: #0b69ff;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 30px;
`
