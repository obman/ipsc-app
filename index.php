<?php
/**
 * Created by PhpStorm.
 * User: fly
 * Date: 29.6.2017
 * Time: 22:48
 */
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>IPSC training mobile helper application</title>
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/css/style.min.css">
</head>
<body>
<div class="ipsc-content--box-centered">
    <header class="ipsc-app--header-main ipsc-text--centered">
        <h1>IPSC training helper</h1>
    </header>
    <main class="ipsc-app--main-content ipsc-content ipsc-content--box-content ipsc-content--box-centered">
        <div class="ipsc-trainings--wrapper">
            <section class="ipsc-trainings--drill">
                <header>
                    <h2>Aimbot Drill - Target Acquisition Speed</h2>
                    <p>A simple yet effective shooting drill to practice fast target identification/acquisition.</p>
                </header>
                <div class="main-text-content">
                    <p><strong>* Notice :</strong> at this time only <strong>Chrome</strong> browser is supported.</p>
                    <p>Application is intended to give support for T.REX ARMS Aimbot Drill. If you don't have buddy to yell the numbers, you can use this application.</p>
                    <p>LINK : <a href="https://www.youtube.com/watch?v=Q4wKWsCFAfU" target="_blank">Aimbot Drill to Increase Target Acquisition Speed</a></p>
                </div>
                <form id="ipsc-aimbot-drill">
                    <div class="labels-wrapper ipsc-content--box-centered">
                        <label class="cf"><span>How many cycles :</span> <input id="ipsc-aimbot-cycles" type="number" min="1" value="1"></label>
                        <label class="cf"><span>Start delay (second) :</span> <input id="ipsc-aimbot-start-delay" type="number" min="1" value="1"></label>
                        <label class="cf"><span>Delay between shots (second) :</span> <input id="ipsc-aimbot-cycle-delay" type="number" min="1" value="1"></label>
                    </div>
                    <p class="field-wrapper" data-index="0">
                        <span>1</span> <input id="ipsc-aimbot-drill-range-slider" type="range" class="ipsc-aimbot-array" min="1" max="20" value="1"> <span>20</span>
                    </p>
                    <p id="ipsc-aimbot-drill-selected-range-number" class="ipsc-text--centered">1</p>
                    <button id="ipsc-aimbot-drill-start" class="ipsc-text--centered" type="button">START DRILL</button>
                    <button id="ipsc-aimbot-drill-stop" class="ipsc-text--centered" type="button">STOP DRILL</button>
                </form>
            </section>
        </div>
    </main>
    <footer class="ipsc-app--footer-main ipsc-text--centered">
        <div class="ipsc-app--socials-wrapper">
            <a href="#" class="fa fa-facebook-square" title="Facebook Sharer" target="_blank"></a>
            <a href="#" class="fa fa-twitter-square" title="Twitter Sharer" target="_blank"></a>
            <a href="#" class="fa fa-google-plus-square" title="Google+ Sharer" target="_blank"></a>
            <a href="#" class="fa fa-pinterest-square" title="Pinterest Sharer" target="_blank"></a>
        </div>
        <p>Developed with <i class="fa fa-magic"></i> and <i class="fa fa-beer"></i></p>
        <?php date_default_timezone_set( 'Europe/Ljubljana' ); ?>
        <small>&copy; Copyright <?= date( 'Y' ); ?> Yetac. All Rights Reserved.</small>
    </footer>
</div>
<script src="assets/js/script.min.js"></script>
</body>
</html>