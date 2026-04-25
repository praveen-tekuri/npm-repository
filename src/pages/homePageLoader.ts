import { getFeaturedPackages } from "../api/getFeaturedPackages";
import type { PackageDetails } from "../api/getPackage";

export interface HomePageLoaderResult{
    featuredPackages: PackageDetails[]
}

export async function homePageLoader():Promise<HomePageLoaderResult>{
    const featuredPackages = await getFeaturedPackages();
    return {
        featuredPackages
    }
}   