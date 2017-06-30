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
    <script src="js/script.js"></script>
</head>
<body>
<header></header>
<main>
    <div class="ipsc-trainings--wrapper">
        <section class="ipsc-trainings--drill">
            <header>
                <h2>Aimbot Drill - Target Acquisition Speed</h2>
                <p>A simple yet effective shooting drill to practice fast target identification/acquisition.</p>
            </header>
            <div>
                <p><strong>* Notice :</strong> at this time max 2 range are supported due to the browser limitations.</p>
            </div>
            <div>
                <form id="ipsc-aimbot-drill">
                    <div>
                        <div class="fields-wrapper">
                            <p class="field-wrapper"><span>1</span> <input type="range" class="ipsc-aimbot-array" min="1" max="20" value="1"> <span>20</span></p>
                        </div>
                        <button id="ipsc-add-new-range" type="button">Add range</button>
                    </div>
                    <button id="ipsc-aimbot-drill-start" type="button"><strong>START DRILL</strong></button>
                    <button id="ipsc-aimbot-drill-stop" type="button">STOP DRILL</button>
                </form>
            </div>
        </section>
    </div>
</main>
<footer></footer>
</body>
</html>