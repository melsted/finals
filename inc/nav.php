<?php if(isset($_SESSION['access'])){?>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
                <a class="nav-link active" href="index.php">Home</a>
                <a class="nav-link active" href="games.php">The Enchanted Forest</a>
                <a class="nav-link active" href="logout.php">Sign Out</a>
            </div>
        </div>
    </nav>
<?php } else{ ?>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
                <a class="nav-link active" href="index.php">Home</a>
                <a class="nav-link active" href="registrer.php">Registrer</a>
                <a class="nav-link active" href="login.php">Sign in</a>
            </div>
        </div>
    </nav>
<?php } ?>
