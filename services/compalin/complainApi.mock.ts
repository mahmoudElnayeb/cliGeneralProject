


const apiName = "compain"


export const compainMockResponses: Record<string, any> = {
    '/compain/send': {
        POST: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve({ ok: false, data: "Compain Sent" });
            }, 5000);
        })
    }
}