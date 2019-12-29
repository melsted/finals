<?php require_once('inc/db.php');?>
<?php require_once('inc/header.php');?>
<?php require_once('inc/nav.php');?>
<?php require_once('inc/footer.php');?>

<?php

$output = "";

if(isset($_POST['signin'])){

    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    $salt = "ghesd832r-645vsdghju" . $password . "lfjgshbhfiae7346hserkg0348";
    $hashed = hash('sha512', $salt);
    
    $sqlRequest = "SELECT * FROM login WHERE username = '$username' AND password = '$hashed'";
    $resultUser = mysqli_query($conn, $sqlRequest) or die ("Request was not possible: " . $sqlUser);

    if(mysqli_num_rows($resultUser) == 1){
        session_start();
        $_SESSION['access'] = "access";
        header("location: games.php");
    }else{
        $output = "The username or password was incorrect. Please re-enter your username and password.";
    }
}

?>

<div class="container">
    <div class="row justify-content-center align-items-center" style="height:90vh">
        <div class="col-5">
            <div class="card">
                <div class="card-body">
                    <form action="login.php" method="POST">
                    <h1 class="sitetitle">Sign In</h1>
                        <div class="form-group mt-3">
                            <label for="username" class="formcontent">Username</label>
                            <input placeholder="" type="text" class="form-control forminside" name="username">
                        </div>
                        <div class="form-group">
                            <label for="password" class="formcontent">Password</label>
                            <input placeholder="" type="password" class="form-control forminside" name="password">
                        </div>
                        
                        <button class="btn btn-login" name="signin" type="signin">Sign In</button>
                        <h3><?php echo $output; ?></h3>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>