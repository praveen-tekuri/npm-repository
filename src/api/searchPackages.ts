
// interface for the API response
interface SearchResponse{
    objects: {
        package: {
            name: string,
            description: string,
            version: string,
            keywords: string[]
        }
    }[]
}

// Simplified version of big response
export interface PackageSummary{
    name: string,
    description: string,
    version: string,
    keywords: string[]
}

// Function to search for npm packages
export async function searchPackages(term: string):Promise<PackageSummary[]>{
    const resp = await fetch(`https://registry.npmjs.org/-/v1/search?text=${term}`)
    const data:SearchResponse = await resp.json();
    // Map the response to a simpler format
    return data.objects.map((el) => {
        return {
            name: el.package.name,
            description: el.package.description,
            version: el.package.version,
            keywords: el.package.keywords
        }
    })
}
