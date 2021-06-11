function add() {
    let addE = prompt("Nhập email muốn Add: ");
    let addP = prompt("Nhập password muốn Add: ");
    firebase.firestore().collection("User").add({
        email: addE,
        password: addP
    })
    let container = document.getElementById('container');
    container.innerHTML += `
    <div class="main">
    <div class="img">
        <img src="https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png" alt="">
    </div>
    <div class="infor">
        <div class="email">
            <p>Email:</p>
            <p>${addE}</p>
        </div>
        <div class="password">
            <p>PassWord:</p>
            <p>${addP}</p>
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
export default add;