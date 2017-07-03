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
<div class="ipsc-content ipsc-content--box-centered">
    <header class="ipsc-app--header-main ipsc-text--centered">
        <h1>IPSC training helper</h1>
    </header>
    <main class="ipsc-app--main-content">
        <div class="ipsc-trainings--wrapper ipsc-content--box-contetn">
            <section class="ipsc-trainings--drill">
                <header>
                    <h2>Aimbot Drill - Target Acquisition Speed</h2>
                    <p>A simple yet effective shooting drill to practice fast target identification/acquisition.</p>
                </header>
                <div>
                    <p><strong>* Notice :</strong> at this time max 2 range are supported due to the browser limitations.</p>
                </div>
                <form id="ipsc-aimbot-drill">
                    <div>
                        <label>How many cycles : <input id="ipsc-aimbot-cycles" type="number" min="1" value="1"></label><br>
                        <label>Start delay (second) : <input id="ipsc-aimbot-start-delay" type="number" min="1" value="1"></label><br>
                        <label>Delay between shots (second) : <input id="ipsc-aimbot-cycle-delay" type="number" min="1" value="1"></label><br>
                        <div class="fields-wrapper">
                            <p class="field-wrapper" data-index="0"><span>1</span> <input type="range" class="ipsc-aimbot-array" min="1" max="20" value="1"> <span>20</span></p>
                        </div>
                        <?php /*<button id="ipsc-add-new-range" type="button">Add range</button>*/ ?>
                    </div>
                    <button id="ipsc-aimbot-drill-start" class="ipsc-text--centered" type="button">START DRILL</button>
                    <button id="ipsc-aimbot-drill-stop" class="ipsc-text--centered" type="button">STOP DRILL</button>
                </form>
            </section>
        </div>
    </main>
    <footer class="ipsc-app--footer-main"></footer>
</div>
<script src="assets/js/script.min.js"></script>
</body>
</html>