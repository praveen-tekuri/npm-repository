export interface PackageDetails {
    name: string;
    description: string;
    readme: string;
    homepage: string;
    author?: {
        name: string;
        email?: string
    };
    maintainers: {
        name: string;
        email?: string
    }[]
    license?: string;
}

export async function getPackage(packageName: string):Promise<PackageDetails>{
    const resp = await fetch(`https://registry.npmjs.org/${packageName}`);
    const data = await resp.json();
    return data as PackageDetails;
}