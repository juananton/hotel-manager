import { styled } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Heading from './ui/Heading';
import Input from './ui/Input';
import Row from './ui/Row';

const StyledApp = styled.main`
  margin: 0 auto;
  width: 600px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type='vertical'>
          <Heading as='h1'>Hotel Manager</Heading>
          <Heading as='h2'>Hotel Manager</Heading>
          <Heading as='h3'>Hotel Manager</Heading>
        </Row>
        <Row type='horizontal'>
          <Button variation='primary' size='large'>
            Button
          </Button>
          <Button variation='secondary' size='small'>
            Button
          </Button>
          <Input />
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
