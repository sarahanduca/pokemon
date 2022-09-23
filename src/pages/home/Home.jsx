import SearchBar from "../../components/searchBar/SearchBar";
import Card from "../../components/card/Card";

export default function Home() {
  return (
    <div className="home text">
      <SearchBar />
      <Card />
      <h1>this is home</h1>
    </div>
  );
}
