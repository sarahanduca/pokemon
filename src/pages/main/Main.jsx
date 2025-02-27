import BottomBall from "../../components/ball/Bottom";
import TopBall from "../../components/ball/Top";
import Home from "../home/Home";

export default function Main() {
  return (
    <div className="relative main h-full min-h-screen">
      <TopBall />
      <Home />
      <BottomBall />
    </div>
  );
}
