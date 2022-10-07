import BottomBall from "../../components/ball/Bottom";
import TopBall from "../../components/ball/Top";
import Home from "../home/Home";

export default function Main() {
  return (
    <div className="main bg-gray-200 h-full">
      <TopBall />
      <Home />
      <BottomBall />
    </div>
  );
}
