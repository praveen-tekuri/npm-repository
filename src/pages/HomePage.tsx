import { Link, useLoaderData } from "react-router-dom"
import type { HomePageLoaderResult } from "./homePageLoader"

export const HomePage = () => {
  const {featuredPackages} = useLoaderData() as HomePageLoaderResult;
  console.log(featuredPackages);
  return (
    <div className="text-center">
        <h2 className="text-3xl">The NPM Registry</h2>
        <p className="my-5">The javascript package manager, search and view details</p>
        <div className="packages grid grid-cols-2 gap-10 max-w-[60%] mx-auto">
          {featuredPackages.map((pkg) => {
            return <div key={pkg.name} className="p-4 bg-gray-200 border border-gray-400 rounded">
                <h3>{pkg.name}</h3>
                <p className="my-4">{pkg.description}</p>
                <Link to={`/packages/${pkg.name}`} className="cursor-pointer rounded px-5 bg-black text-white p-2">View Details</Link>
            </div>
          })}
        </div>
    </div>
  )
}
