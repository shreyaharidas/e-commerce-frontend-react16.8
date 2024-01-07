export const base64StringManipulation=(base64String:string)=>{
    let encoded=base64String.split("base64")[1];
    let newEncoded="data:image/png;base64,"+encoded;
    return newEncoded;
}