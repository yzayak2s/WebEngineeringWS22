export async function fetchContent() {
    const response = await fetch('content.json');

    if (response.ok) {
        return response.json()
    }
}

export const CONTENT = await fetchContent()

//window.fetchContent = fetchContent