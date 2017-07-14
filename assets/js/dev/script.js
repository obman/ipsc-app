/*!
 * DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 * Version 2, December 2004
 *
 * Copyright (C) 2004 Denis <denis.music@webstories.si>
 *
 *     Everyone is permitted to copy and distribute verbatim or modified
 *     copies of this license document, and changing it is allowed as long
 *     as the name is changed.
 *
 *     DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *     TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *     0. You just DO WHAT THE FUCK YOU WANT TO.
 */
( function( window, document ) {

    /**
     * Namespaces
     * @type {*|{}}
     */
    var IPSC = IPSC || {};

    /**
     * Declarations
     */
    var synth,
        aimbot_drill_start,
        aimbot_drill_stop,
        aimbot_drill_range_slider,
        aimbot_drill_range_display,
        aimbot_interval;

    document.onreadystatechange = function() {
        if ( document.readyState == 'complete' ) {

            /**
             * Definitions
             */
            synth = window.speechSynthesis;

            // AimBot Drill
            aimbot_drill_start         = document.querySelector( '#ipsc-aimbot-drill-start' );
            aimbot_drill_stop          = document.querySelector( '#ipsc-aimbot-drill-stop' );
            aimbot_drill_range_slider  = document.querySelector( '#ipsc-aimbot-drill-range-slider' );
            aimbot_drill_range_display = document.querySelector( '#ipsc-aimbot-drill-selected-range-number');

            /**
             * Events
             */

            // AimBot Drill Starter
            aimbot_drill_start.addEventListener( 'click', function() {
                var _cycle_index = 1,
                    _that = this;

                this.classList.toggle( 'active' );

                IPSC.AimBotDrill.cycles    = parseInt( document.querySelector( '#ipsc-aimbot-cycles').value );
                IPSC.AimBotDrill.delayer   = parseInt( document.querySelector( '#ipsc-aimbot-start-delay').value );
                IPSC.AimBotDrill.timer     = parseInt( document.querySelector( '#ipsc-aimbot-cycle-delay').value );
                IPSC.AimBotDrill.range     = parseInt( aimbot_drill_range_slider.value );
                IPSC.AimBotDrill.range_num = 2; // torso - head
                IPSC.AimBotDrill.utter     = new SpeechSynthesisUtterance;

                // Utter Settings
                // Causing problems as voices are not async loaded as it app on mobile devices
                //if ( synth.onvoiceschanged !== undefined ) IPSC.AimBotDrill.utter.voice = get_voice( synth.getVoices(), 'Victoria' );

                if ( IPSC.AimBotDrill.delayer > 0 ) {
                    setTimeout( function() {
                        aimbot_interval = setInterval( function() {
                            if ( IPSC.AimBotDrill.cycles >= _cycle_index ) {
                                IPSC.AimBotDrill.speak_rand_num();
                            }
                            else {
                                clearInterval( aimbot_interval );
                                _that.classList.remove( 'active' );
                            }
                            _cycle_index++;
                        }, IPSC.AimBotDrill.timer * 1000 );
                    }, IPSC.AimBotDrill.delayer * 1000 );
                }
            }, true );

            aimbot_drill_stop.addEventListener( 'click', function() {
                clearInterval( aimbot_interval );
                aimbot_drill_start.classList.remove( 'active' );
            }, true );

            aimbot_drill_range_slider.addEventListener( 'input', function() {
                aimbot_drill_range_display.innerHTML = this.value;
            }, true );

        }
    };

    // Functions
    function get_voice( voices, voice_name ) {
        var _data = {};

        voices.forEach( function( voice ) {
            if ( voice.name === voice_name ) _data = voice;
            else if ( voice.lang === 'en-US') _data = voice;
        } );

        return _data;
    }


    /**
     * Modules
     */
    IPSC.AimBotDrill = function()
    {
        var speak_rand_num = function() {
            var _index = 0;

            for ( ; _index < AimBotDrillPublic.range_num; _index++ ) {
                AimBotDrillPublic.utter.text = Math.floor( Math.random() * AimBotDrillPublic.range ) + 1;
                synth.speak( AimBotDrillPublic.utter );
            }
        };

        var set_lang = function( lang ) {
            AimBotDrillPublic.utter.lang = lang;
        };

        var AimBotDrillPublic = {
            cycles    : 1,
            delayer   : 1,
            timer     : 1,
            range     : 1,
            range_num : 2,
            utter     : {},
            speak_rand_num : speak_rand_num
        };

        return AimBotDrillPublic;

    }();

} )( window, document );