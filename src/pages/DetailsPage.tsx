import { useLoaderData } from "react-router-dom"
import type { DetailsLoaderResult } from "./detailsLoader";

export const DetailsPage = () => {
  const {details} = useLoaderData() as DetailsLoaderResult;
  console.log(details);
  return (
    <div>
      <div className="bg-gray-200 p-5 my-3">
        <h3>{details.name[0].toUpperCase() + details.name.slice(1)}</h3>
        <p>{details.description}</p>
      </div>
      <div className="maintainers">
        <h3 className="text-2xl my-3">Maintainers</h3>
        {details.maintainers.map((el) => {
          return <div className="list">
            <p>{el.name} - {el.email}</p>
          </div>
        })}
      </div>
      <div className="license">
        <h3 className="text-2xl my-3">License</h3>
        <p>{details.license}</p>
      </div>
      <div className="homepage">
        <h3 className="text-2xl my-3">HomePage</h3>
        <p>{details.homepage}</p>
      </div>
    </div>
  )
}
