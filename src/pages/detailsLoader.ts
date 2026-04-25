import type { Params } from "react-router-dom";
import { getPackage, type PackageDetails } from "../api/getPackage";

interface LoaderArgs{
    params: Params
}

export interface DetailsLoaderResult {
    details: PackageDetails
}

export async function detailsLoader({params}: LoaderArgs):Promise<DetailsLoaderResult>{
    const {name} = params;
    if(!name){
        throw new Error("Package name must be provided");
    }
    const details = await getPackage(name)
    return {
        details
    }
}