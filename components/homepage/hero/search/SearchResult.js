import { useState } from "react";
import { deplaceDummyData } from "../../../../store";
import MealItem from "../../../meals/meals/mealItem";
import Search from "./Search";
import classes from "./search.module.css";
import { FaLessThan } from "react-icons/fa";
import { useRouter } from "next/router";

export default function SearchResult() {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  function searchHandler(searchTerm) {
    const data = deplaceDummyData();
    const result = data.filter((item) => item.name.includes(searchTerm));
    setSearchResult(result);
    setShowSearch(true);
  }

  return (
    <section>
      <Search onSubmit={searchHandler} />
      <span onClick={() => router.push("/")} className={classes.back}>
        <FaLessThan />
      </span>
      <div className={classes.searchResult}>
        {showSearch && (
          <div className={classes.mealcontainer}>
            <MealItem meal={searchResult} />
          </div>
        )}
      </div>
      {!showSearch && (
        <div className="center">
          <h1>Search for your favorite meals...</h1>
        </div>
      )}
    </section>
  );
}
