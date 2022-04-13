import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const is2Cols = useMediaQuery({ minWidth: 1200 });
  const is1Cols = useMediaQuery({ maxWidth: 800 });

  if (is2Cols) {
    return "2-cols";
  }
  if (is1Cols) {
    return "1-cols";
  }

  return "fullscreen"
};
