<?php require_once('inc/db.php');?>
<?php require_once('inc/header.php');?>
<?php require_once('inc/nav.php');?>
<?php require_once('inc/footer.php');?>

<?php
//Setting a boolean flag for later use:
    $flag = false;

//Making sure an output is possible to communicate to the user:
    $output = "";
    $outputpas = "";

//function of the "Sign up now!" button:
    if(isset($_POST['submit'])){
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        $password2 = mysqli_real_escape_string($conn, $_POST['password2']);

        //TEST: Due to a problem with the function of the button, I test if a outcome is possible:
            //echo $output = $username . $password . $password2;

        //Check if the username already exist in the database:
            //Requesting the entered username in the database:
                $sqlRequest = "SELECT * FROM login WHERE username = '$username'";
            //Establish connection to database, requesting user with user-entered username:
                $resultUser = mysqli_query($conn, $sqlRequest) or die ("Request was not possible: " . $sqlRequest);
            
            //Checking if the entered username has a match in the database:
                if(mysqli_num_rows($resultUser) == 0){
                    //Check is the passwords are equal:
                    if($password === $password2){
                        $flag = true;
                    }else{
                        $outputpas = "The passwords is not equal, please enter both again.";
                    }
                }else{
                    $output = "The username already exists! Please try again.";
                }


                if($flag == true){
                     /*If the entered username does not exist in the database: salt and incrypt the password, 
                    futhermore register in the database logins*/
                    
                    //Preparing cryptation:
                        $salt = "ghesd832r-645vsdghju" . $password . "lfjgshbhfiae7346hserkg0348";
                    //'sha512' is an algoritme that mixes things around, in a way impossible to see through.
                        $hashed = hash('sha512', $salt);
                    
                    //Tell the server, where to put the data:
                        $sqlInsert = "INSERT INTO login(username, password) values('$username', '$hashed')";
                    
                    //Establish connection to save/insert new user:
                        $newUser = mysqli_query($conn, $sqlInsert) or die ("Query's not possible");

                    //Pass on to login site:
                        header("location: login.php");
                }
    
    }

?>


<div class="container">
    <div class="row justify-content-center align-items-center" style="height:90vh">
        <div class="col-12 col-sm-10 col-md-7 col-lg-7 col-xl-7">
            <div class="card">
                <div class="card-body">
                    <form action="registrer.php" method="POST" onSubmit="return checkform()" id="checkform">
                        <h1 class="sitetitle">Registration form</h1>
                        <div class="form-group mt-3">
                            <label for="username" class="formcontent">Username</label>
                            <input placeholder="Choose a username" type="text" class="form-control forminside pt-2" id="user" name="username">
                            <p style="color:red;"><?php echo $output;?></p>
                        </div>
                        <div class="form-group">
                            <label for="password" class="formcontent">Password</label>
                            <!--typing password, makes the characters invisible-->
                            <input placeholder="Choose a password with characters between a-z, A-Z, 0-9 and .,-" type="password" class="form-control forminside pt-2" id="pass" name="password">
                        </div>
                        <div class="form-group">
                            <label for="password2" class="formcontent">Repeat password</label>
                            <input placeholder="Repeat password" type="password" class="form-control forminside pt-2" id="pass2" name="password2">
                            <p style="color:red;"><?php echo $outputpas;?></p>
                        </div>
                        <button class="btn btn-signup" name="submit" >Sign up now!</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>