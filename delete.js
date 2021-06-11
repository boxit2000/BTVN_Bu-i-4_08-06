import loadData from "./loadData.js"
async function deleData() {
    
    const result = await firebase.firestore().collection("User").get();
    let em = prompt("Nhập vào email muốn xóa:");
    result.docs.forEach((doc) => {
        if(doc.data().email === em){
            // console.log(1)
            firebase.firestore().collection("User").doc(doc.id).delete();
        }
    })
    console.log("Xoa ok")
    loadData();
}
export default deleData;