import { StyledLoading } from "./style";
import loadingImg from "../../assets/Spinner.svg";
export const Loading = () => {
  return (
    <StyledLoading>
      <img src={loadingImg} alt="loading" />
    </StyledLoading>
  );
};
