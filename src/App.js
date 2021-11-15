import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import styled from "styled-components";
function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Headline header='posts' desc='click the button' />
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
`;
