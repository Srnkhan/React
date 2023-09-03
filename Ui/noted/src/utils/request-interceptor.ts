
export default function fetchInterceptor() {
    const { fetch: originalFetch } = window;

    window.fetch = async (input, init = {}) => {
        let url = `${input}`;
        /*url = `${url}?authKey=LOCAL_STORAGE_ITEM`; // Example*/
        const newHeaders = new Headers();
        newHeaders.set('Access-Control-Allow-Origin', '*')
        newHeaders.set('Content-Type', 'application/json')//from body post request
        //newHeaders.set('Authorization', `Bearer TOKEN`); // Example
        const config = {
            ...init,
            headers: newHeaders,
        };

        try {
            const response = await originalFetch(url, config);
            return response;
        } catch (error) {
            debugger;
            throw error;
        }
    };
}