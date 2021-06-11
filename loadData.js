async function loadData() {
    let container = document.getElementById('container');
    let strHTML = '';
    const result = await firebase.firestore().collection("User").get();
    for (let i = 0; i < result.docs.length; i++) {
        strHTML += `
        <div class="main">
    <div class="img">
        <img src="https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png" alt="">
    </div>
    <div class="infor">
        <div class="email">
            <p>Email:</p>
            <p>${result.docs[i].data().email}</p>
        </div>
        <div class="password">
            <p>PassWord:</p>
            <p>${result.docs[i].data().password}</p>
        </div>
    </div>
    <!-- <div class="button"> -->
         <div class="button__delete">
                <button class="btn_delete">Delete</button>
            </div>
            <div class="button__update">
                <button class="btn_update">Update</button>
            </div>
    <!-- </div> -->
</div>
        `
    }
    container.innerHTML = strHTML;
    console.log(213123)
}

export default loadData;