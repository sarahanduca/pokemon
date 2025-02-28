import BottomBall from "../../components/ball/Bottom";
import TopBall from "../../components/ball/Top";
import Home from "../home/Home";

export default function Main() {
  return (
    <div className="main h-fit">
      <TopBall />
      <Home />
      <BottomBall />
    </div>
  );
}
