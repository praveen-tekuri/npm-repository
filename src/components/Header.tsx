import { Link } from "react-router-dom"
import { SearchInput } from "./SearchInput"

export const Header = () => {
  return (
    <div className="bg-mist-100 p-5 flex justify-between">
        <div className="logo-container flex-8">
            <Link to="/" className="text-2xl font-bold">NPM Repository</Link>
        </div>
        <div className="search-input-container flex-4">
            <SearchInput/>
        </div>
    </div>
  )
}
