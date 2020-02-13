export default [
    async function<Data>(data: Data){
        console.log("TODO something here");
    },
    async function<Data>(data: Data){
        console.log("TODO something here");
    },
    async function<Data>(data: Data){
        console.log("TODO something here");
    }
]
/*
o Verify the data in flat file matches the data in patient collection
o Patient IDs - where first name is missing
o Patient IDs - Email address is missing but consent is Y
o Verify Emails were created in Email Collection for patients who have
CONSENT as Y*/