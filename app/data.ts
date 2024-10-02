export async function getData(query: string, pageNumber: number): Promise<string> {
    console.debug("getData called with query", query, "and pageNumber", pageNumber);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const date = new Date().toISOString();
    return `${date}: Data for ${query} and page number ${pageNumber}`;
}