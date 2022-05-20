let userInfo = [];
const addingUser = (member) => {
    member.preventDefault();
    let user = {
        name: document.getElementById('pName').value,
        pass: document.getElementById('pass').value
    }

    userInfo.push(user);
    document.forms[0].reset();


    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    function showInfo() {
        
        let password = [];
        let passLen= String(user.pass).split("").map((index)=>{
            return Number(index);
        });
        for (let i = 0; i<= passLen.length; i++){
            password.push('*');
        }
        password = password.toString();

        alert(`Welcome ${user.name} password: ${password}`);

    }

    const myTimeout = setTimeout(showInfo, 5000);
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addingUser);
});