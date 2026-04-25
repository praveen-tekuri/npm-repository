import { useLoaderData } from "react-router-dom"
import type { SearchLoaderResult } from "./searchLoader"

export const SearchPage = () => {
    // useLoaderData is a hook provided by react-router that allows us to access the data returned by the loader function associated with the route. In this case, we are using it to get the search results that were fetched by the searchLoader function.
  const {searchResults} = useLoaderData() as SearchLoaderResult;
  console.log(searchResults);
  return (
    <div>SearchPage</div>
  )
}


// http://localhost:5173/search?term=redux