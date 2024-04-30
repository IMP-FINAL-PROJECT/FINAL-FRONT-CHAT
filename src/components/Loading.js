import Lottie from "lottie-react";
import loadingLottie from "./lottie/loadingLottie.json";
import styled from "styled-components";

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: #3377ff;
  background-color: rgba(227, 230, 240, 0.5); // 반투명 배경색 추가
  z-index: 1000; // Make sure it's on top of other content
  width: 100%; // 너비 조정
  height: 100%; // 높이 조정
  display: flex;
  justify-content: center;
  align-items: center; // Lottie 애니메이션 중앙에 위치
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <Lottie
        animationData={loadingLottie}
        style={{ width: "15%", height: "15%" }}
      />
    </LoadingContainer>
  );
};

export default LoadingScreen;
