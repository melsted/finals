<?php
//Need to placed in top in order to work. 
session_start();
?>

<?php require_once('inc/db.php');?>
<?php require_once('inc/header.php');?>
<?php require_once('inc/nav.php');?>
<?php require_once('inc/footer.php');?>

<header class="container d-flex justify-content-center mt-2">
<h1 class="sitetitle-wh mt-2">Games of The Enchanted Forest</h1>
</header>

<div class="d-flex justify-content-center mt-4">
<div class="col-6 d-flex flex-wrap">
  <div class="col-6 mb-4">
    <div class="card">
      <a href="game1.html"><img src="img/thelittlechristmastree.png" class="card-img-top col-12" alt="the little christmastree"></a>
      <div class="card-body">
        <a href="game1.html" class="card-title game-link">The little christmastree</a>
        <p class="card-text game-text">Help the little christmastree finding its decorations.</p>
      </div>
    </div>
  </div>
  <div class="col-6 mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title game-link">Opposite world</h5>
        <p class="card-text game-text">Can you figure out, where it's safe to walk?</p>
      </div>
    </div>
  </div>
  <div class="col-6 mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title game-link">Santas bad hairday</h5>
        <p class="card-text game-text">Help santa getting his christmashat back.</p>
      </div>
    </div>
  </div>
  <div class="col-6 mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title game-link">The enchanted forest</h5>
        <p class="card-text game-text">Help Snowwhite through the enchanted forest.</p>
      </div>
    </div>
  </div>
</div>
</div>