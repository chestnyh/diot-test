import handlers from "./patientHandlers";

export async function applyHandlers<Data>(data: Data){

    for (let i = 0; i < handlers.length; i++){
        await handlers[i](data)
    }

}