import React, {useContext } from "react";
import Card from "../components/Card";
import { movie_Data } from "../Data";
import { SearchData } from "../components/UseContext";
export default function Home() {
  // const [name, setName] = useState("");
  const {value} = useContext(SearchData)
console.log(value);
// console.log(name);

  return (
    <>
      {/* <input
        className="searchbar"
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="                       Search for animes                        🔍"
      /> */}
      {/* <Link path='/Player'> Player</Link> */}
      <div className="container mt-5 cards_containner">
        {movie_Data.map((ele, i) => {
          if((ele.name.toLowerCase()).includes(value.toLowerCase())) {
            return (
              <Card
                key={i}
                name={ele.name}
                img={ele.img}
                episodes={ele.episodes}
                description={ele.description}
                profile={ele.profile}
                watch={ele.watch}
              />
            )
          }
        })}
      </div>
    </>
  );
}
