import BottomBall from "../../components/ball/Bottom";
import TopBall from "../../components/ball/Top";
import Home from "../home/Home";

export default function Main() {
  return (
    <div className="main bg-zinc-600 h-full">
      <TopBall />
      <Home />
      <BottomBall />
    </div>
  );
}
