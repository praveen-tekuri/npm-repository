import type { PackageDetails } from "./getPackage";

const FeaturedPackageNames = ['react', 'angular', 'vite', 'esbuild'];

export async function getFeaturedPackages():Promise<PackageDetails[]>{
    const promises = FeaturedPackageNames.map(async(name) => {
        const resp = await fetch(`https://registry.npmjs.org/${name}`)
        return resp.json();
    })
    const data = await Promise.all(promises);
    return data as PackageDetails[];
}