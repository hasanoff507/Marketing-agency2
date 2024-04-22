import MessageTik from "../../components/MessageTik";
import { Box, Container, Title, Wrapper, Button, Icon } from "./style";
import  {useNavigate} from "react-router-dom";
import Text from "../../language/langManager"

const Success = () => {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/')
  }, 20500);
  return (
    <Wrapper>
      <Container>
        <Box>
          <Icon>
            <MessageTik />
          </Icon>
          <Title>
            <Text id="succesPageTitle"/>
          </Title>
          <p>
          <Text id="successPageText1"/>
            {/* <a className={"ancor"} href="tel:+998977531401">
              {" "}
              +998 (97) 753 14 01
            </a> */}
          </p>
          <p>
          <Text id="successPageText2"/>
          </p>
          <p>
          <Text id="successPageText4"/>

          </p>
          <p>
          <Text id="successPageText5"/>
          </p>
          <Button
            onClick={() => {
              navigate('/')
            }}
          >
            <Text id="buttonWell"/>
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
};
export default Success;
