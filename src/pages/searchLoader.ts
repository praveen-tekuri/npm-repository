import { searchPackages, type PackageSummary } from "../api/searchPackages";

// Define the shape of the data that the loader will return
export interface SearchLoaderResult{
    searchResults: PackageSummary[] 
}

// Loader function to fetch search results based on the query parameters in the URL
// searchLoader({request}: {request: Request}) is the signature expected by react-router for loader functions
// It takes an object with a request property, which is of type Request. This allows us to access the URL and its query parameters.

export async function searchLoader({request}: {request: Request}): Promise<SearchLoaderResult>{
    // Extract the search term from the query parameters
    const {searchParams} = new URL(request.url);
    const term = searchParams.get('term');
    if(!term){
        throw new Error("Search term is required");
    }
    const results = await searchPackages(term);
    return {
        searchResults: results
    }
}