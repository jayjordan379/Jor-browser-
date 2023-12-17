function enter() {
    var keyWord = document.getElementById('key').value;

    if (document.getElementById('key').value === 'jordan jay') {
        location.href = "jordan.html";

        document.getElementById('button').style.background = "green";

    } else if (document.getElementById('key').value == "") {
        const answer = prompt('empty! please enter the password:');

        if (answer === 'jordan jay') {
            location.href = 'jordan.html';
        } else {
            const message = alert('wrong password! try again')
            const answer2 = prompt('re-enter password:');

            if (answer2 === 'jordan jay') {
                location.href = 'jordan.html';
            } else {
                alert('wrong password ! permission not granted!')

            }
        }
    } else {
        alert('               wrong password !              please enter the correct password!');
        document.getElementById('button').style.background = "red";
    }
}