import { useState } from "react"
import { GoSearch } from "react-icons/go"
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?term=${term}`);
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="relative">
            <div className="absolute inset-y-0 flex items-center left-3">
                <GoSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input value={term} onChange={(e) => setTerm(e.target.value)} type="text" placeholder="Search Package..." className="border w-full border-gray-200 rounded p-2 pl-10" />
        </div>
    </form>
  )
}
