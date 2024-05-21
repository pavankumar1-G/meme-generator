import {Component} from 'react'

import {
  AppContainer,
  MemeAndGeneratorContainer,
  Heading,
  MemeAndFormContainer,
  MemeContainer,
  TextContent,
  MemeGenerativeFormContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GeneratorButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImgUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImgUrl: '',
    topText: '',
    bottomText: '',
    activeFontSize: '',
  }

  onSubmitGenerativeForm = event => {
    event.preventDefault()
    const {
      activeOptionId,
      topTextInput,
      bottomTextInput,
      backgroundImgUrlInput,
    } = this.state

    this.setState({
      backgroundImgUrl: backgroundImgUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSize: activeOptionId,
    })
  }

  onChangeBackgroundImageUrl = event => {
    this.setState({backgroundImgUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChageBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({activeOptionId: event.target.value})
  }

  renderFormContainer = () => {
    const {
      backgroundImgUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionId,
    } = this.state

    return (
      <MemeGenerativeFormContainer onSubmit={this.onSubmitGenerativeForm}>
        <CustomLabel htmlFor="backgroundImgUrl">Image URL</CustomLabel>
        <CustomInput
          id="backgroundImgUrl"
          value={backgroundImgUrlInput}
          type="text"
          placeholder="Enter the Image URL"
          onChange={this.onChangeBackgroundImageUrl}
        />
        <br />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          id="topText"
          value={topTextInput}
          type="text"
          placeholder="Enter the Top Text"
          onChange={this.onChangeTopTextInput}
        />
        <br />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          id="bottomText"
          value={bottomTextInput}
          placeholder="Enter the Bottom Text"
          onChange={this.onChageBottomTextInput}
        />
        <br />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeOptionId}
          onChange={this.onChangeSelectOption}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GeneratorButton type="submit">Generate</GeneratorButton>
      </MemeGenerativeFormContainer>
    )
  }

  renderMemeContainer = () => {
    const {backgroundImgUrl, topText, bottomText, activeFontSize} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImgUrl={backgroundImgUrl}>
        <TextContent activeFontSize={activeFontSize}>{topText}</TextContent>
        <TextContent activeFontSize={activeFontSize}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeAndGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <MemeAndFormContainer>
            {this.renderMemeContainer()}
            {this.renderFormContainer()}
          </MemeAndFormContainer>
        </MemeAndGeneratorContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
