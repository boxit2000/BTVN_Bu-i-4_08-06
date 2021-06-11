import loadData from "./loadData.js"
async function updateData() {
    const result = await firebase.firestore().collection("User").get();
    let em = prompt("Nhập vào email muốn Update:");
    let newEmail = prompt("Nhập vào Email mới:");
    let newPass = prompt("Nhập vào PassWord mới:");
    result.docs.forEach((doc) => {
        if(doc.data().email === em){
            // console.log(1)
            firebase.firestore().collection("User").doc(doc.id).update({
                email:newEmail,
                password:newPass
            });
        }
    })
    loadData();
}

export default updateData;