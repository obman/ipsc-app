<?php
/**
 * Created by PhpStorm.
 * User: fly
 * Date: 29.6.2017
 * Time: 22:48
 */
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>IPSC training mobile helper application</title>
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/css/style.min.css">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
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
                        <label class="cf" for="ipsc-aimbot-cycles"><span>How many cycles :</span> <input id="ipsc-aimbot-cycles" type="number" min="1" value="1"></label>
                        <label class="cf" for="ipsc-aimbot-start-delay"><span>Start delay (second) :</span> <input id="ipsc-aimbot-start-delay" type="number" min="1" value="1"></label>
                        <label class="cf" for="ipsc-aimbot-cycle-delay"><span>Delay between shots (second) :</span> <input id="ipsc-aimbot-cycle-delay" type="number" min="1" value="1"></label>
                    </div>
                    <div class="field-wrapper" data-index="0">
                        <p>How many targets will be used?</p>
                        <p><span>1</span> <input id="ipsc-aimbot-drill-range-slider" type="range" class="ipsc-aimbot-array" min="1" max="20" value="1"> <span>20</span></p>
                    </div>
                    <p id="ipsc-aimbot-drill-selected-range-number" class="ipsc-text--centered">1</p>
                    <button id="ipsc-aimbot-drill-start" class="ipsc-text--centered" type="button">START DRILL</button>
                    <button id="ipsc-aimbot-drill-stop" class="ipsc-text--centered" type="button">STOP DRILL</button>
                </form>
            </section>
            <section id="ipsc-aimbot-cycles-storage" class="ipsc--disabled">
                <h2>Track your progress</h2>
                <div id="ipsc-aimbot-cycle-excerpt"></div>
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
        <small>&copy; Copyright <?= date( 'Y' ); ?> IPSC Training App. All Rights Reserved.</small>
    </footer>
</div>
<script src="assets/js/IPSC_Class.min.js" defer></script>
<script src="assets/js/script.min.js" defer></script>
</body>
</html>