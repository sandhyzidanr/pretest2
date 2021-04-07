function formulir() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var link = ("html2.html");
    p_kontainer = document.getElementById("container");


    if (username == "" && password == "") {
        alert("Lengkapi Username dan Password Anda");
        return false;
    }

    if (username == "") {
        alert("Lengkapi Username Anda");
        return false;
    }
    if (password == "") {
        alert("Lengkapi Password Anda");
        return false;
    }

    if (username != "" || password != "") {
        alert("Selamat anda berhasil login");
        open(link);
    }

    p_kontainer.innerHTML = username




}