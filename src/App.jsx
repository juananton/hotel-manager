import { styled } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Heading from './ui/Heading';
import Input from './ui/Input';
import Row from './ui/Row';

const StyledApp = styled.main`
  background-color: lightblue;
  padding: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type='horizontal'>
          <Heading as='h1'>Hotel Manager</Heading>
          <Heading as='h2'>Hotel Manager</Heading>
        </Row>
        <Row type='vertical'>
          <Heading as='h3'>Hotel Manager</Heading>
          <Button>Button</Button>
          <Input />
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
