<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Method POST</title>
</head>
<body>
    
    <form method="post">
        <label>username</label><br>
        <input name="uname" type="text"><br>

        <label>password</label><br>
        <input type="password" name="pwd"><br>

        <input type="submit" name="proses" value="Login">
    </form>

    <?php 
    
    if(isset($_POST['proses'])){
        $username = $_POST['uname'];
        $password = $_POST['pwd'];
        $login = $_POST['proses'];

        echo "Username kamu adalah $username <br>Password kamu adalah $password";
    }

    ?>

</body>
</html>