


const apiName = "compain"


export const getComplains: Record<string, any> = {

    'compain': {
        POST: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve({ ok: true, data: "Compain Sent" });
            }, 1000);
        })
    }
}