import Home from "../home/Home";
import TopBall from "../../components/ball/Top";
import BottomBall from "../../components/ball/Bottom";

export default function Main() {
  return (
    <div className="main bg-zinc-600 h-full">
      <TopBall />
      <Home />
      <BottomBall />
    </div>
  );
}
