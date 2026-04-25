import { Link } from "react-router-dom"
import type { PackageSummary } from "../api/searchPackages"

interface PackageListItemProps{
    pkg: PackageSummary
}

export const PackageListItem = ({pkg}:PackageListItemProps) => {
  return (
    <div className="bg-gray-300 mb-5 rounded p-5 mt-3 flex justify-between items-center">
       <div className="details">
        <h3 className="text-2xl">
            <Link to={`/packages/${pkg.name}`}>{pkg.name} {pkg.version}</Link>
        </h3>
        <p className="my-5">{pkg.description}</p>
        <div className="flex">
            {(pkg.keywords.slice(0, 8) || []).map((work) => {
                return <span key={work} className="border mr-1 p-2 border-black">{work}</span>
            })}
        </div>
       </div>
       <div className="details-btn">
          <Link to={`/packages/${pkg.name}`} className="bg-black text-white p-2 cursor-pointer">View Details</Link>
       </div>
    </div>
  )
}
