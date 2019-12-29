<?php
session_start();
?>

<?php require_once('inc/db.php');?>
<?php require_once('inc/header.php');?>
<?php require_once('inc/footer.php');?>

    <div class="container">
        <div class="row justify-content-center align-items-center" style="height: 100vh;">
            <div class="col-12 col-sm-10 col-md-5 col-lg-5 col-xl-5">
                <div class="card">
                    <div class="card-body ">
                        <h1 class="sitetitle">The Enchanted Forest</h1>
                        <h6 class="catchphrase">How far can you get in the enchanted forest? Do you have the IQ to help the little christmastree, Santa, Redball and Snowwhite completing the tasks?</h6> 
                        <br><h4 class="statement">Sign in or register now!</h4>
                        <button type="button" class="btn btn-register"><a href="registrer.php" class="btn-link">Register</a></button>
                        <button type="button" class="btn btn-signin"><a href="login.php" class="btn-link">Sign In</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>