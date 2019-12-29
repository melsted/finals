<?php
session_start();
?>

<?php require_once('inc/db.php');?>
<?php require_once('inc/header.php');?>
<?php require_once('inc/nav.php');?>
<?php require_once('inc/footer.php');?>

<!--lane 1-->
    <center>
        <h2>Det lille juletræ</h2>
        <canvas id="canvas1" width="272" height="272"></canvas>
    </center>

    <!--Score system-->
        <div class="card bg-light mb-3" style="max-width: 18rem;">
            <h5 class="card-header">You got <span id="score"></span> points!</h5>
            <div class="card-body">
            <h6 class="card-title">Rules</h6>
            <p class="card-text"><span id="rules"></span></p>
        </div>
 
 
 <!--Jquery.js refrence. Needed to use bootstrap properly:-->
 <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
    crossorigin="anonymous"></script>
    <!--Popper.js refrence. Needed to use bootstrap properly:-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" 
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" 
    crossorigin="anonymous"></script>
    <!--Bootstrap JavaScript CDN reference:-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" 
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" 
    crossorigin="anonymous"></script>
    <!--Custom JavaScript reference:-->
    <script src="game1.js"></script>