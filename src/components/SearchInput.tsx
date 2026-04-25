import { GoSearch } from "react-icons/go"

export const SearchInput = () => {
  return (
    <form>
        <div className="relative">
            <div className="absolute inset-y-0 flex items-center left-3">
                <GoSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input type="text" className="border w-full border-gray-200 rounded p-2 pl-10" />
        </div>
    </form>
  )
}
