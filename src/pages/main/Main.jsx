import Home from "../home/Home";
import TopBall from "../../components/ball/Top";
import BottomBall from "../../components/ball/Bottom";
import SearchBar from "../../components/searchBar/SearchBar";
import Card from "../../components/card/Card";

export default function Main() {
  return (
    <div className="main bg-zinc-600 h-full">
      <TopBall />
      <SearchBar />
      <Card />
      <Home />
      <BottomBall />
    </div>
  );
}
