import { useLoaderData } from "react-router-dom"
import type { SearchLoaderResult } from "./searchLoader"
import { PackageListItem } from "../components/PackageListItem";

export const SearchPage = () => {
    // useLoaderData is a hook provided by react-router that allows us to access the data returned by the loader function associated with the route. In this case, we are using it to get the search results that were fetched by the searchLoader function.
  const {searchResults} = useLoaderData() as SearchLoaderResult;
  console.log(searchResults);
  return (
    <div>
      <h2 className="text-3xl">Search Results - ({searchResults.length})</h2>
      {searchResults.map((pkg) => {
        return <PackageListItem key={pkg.name} pkg ={pkg}/>
      })}
    </div>
  )
}


// http://localhost:5173/search?term=redux