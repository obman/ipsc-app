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

    // Namespaces
    var IPSC = IPSC || {};

    // Declarations
    var synth,
        aimbot_drill_start,
        aimbot_drill_stop,
        aimbot_interval,
        aimbot_field_index;

    document.onreadystatechange = function() {
        if ( document.readyState == 'complete' ) {

            // Definitions
            synth              = window.speechSynthesis;
            aimbot_drill_start = document.querySelector( '#ipsc-aimbot-drill-start' );
            aimbot_drill_stop  = document.querySelector( '#ipsc-aimbot-drill-stop' );
            aimbot_field_index = 0;

            // Events
            /*document.querySelector( '#ipsc-add-new-range' ).addEventListener( 'click', function() {
                var _range = document.querySelector( '#ipsc-aimbot-drill .field-wrapper'),
                    _clone = _range.cloneNode( true);

                aimbot_field_index = _range.dataset.index;

                _clone.dataset.index++;
                console.log ( _clone.dataset.index );
                if ( _clone.dataset.index < 2 ) {
                    document.querySelector( '#ipsc-aimbot-drill .fields-wrapper').appendChild( _clone );
                }
            }, true );*/

            /**
             * AimBot Drill Starter
             */
            aimbot_drill_start.addEventListener( 'click', function( evt ) {
                var _cycle_index = 1,
                    _that = this; // minimum 1 cycle

                this.classList.toggle( 'active' );

                IPSC.AimBotDrill.cycles    = parseInt( document.querySelector( '#ipsc-aimbot-cycles').value );
                IPSC.AimBotDrill.delayer   = parseInt( document.querySelector( '#ipsc-aimbot-start-delay').value );
                IPSC.AimBotDrill.timer     = parseInt( document.querySelector( '#ipsc-aimbot-cycle-delay').value );
                IPSC.AimBotDrill.range     = document.querySelectorAll( '#ipsc-aimbot-drill .ipsc-aimbot-array');
                IPSC.AimBotDrill.range_num = 2; // torso - head
                IPSC.AimBotDrill.utter     = new SpeechSynthesisUtterance;

                // Utter Settings
                IPSC.AimBotDrill.utter.voice = get_voice( synth.getVoices(), 'Victoria' );

                if ( IPSC.AimBotDrill.delayer > 0 ) {
                    setTimeout( function() {
                        aimbot_interval = setInterval( function() {
                            if ( IPSC.AimBotDrill.cycles >= _cycle_index ) {
                                speak_rand_num( IPSC.AimBotDrill );
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

        }
    };

    // Functions
    function get_voice( voices, voice_name ) {
        var _data = {};

        voices.forEach( function( voice ) {
            if ( voice.name === voice_name ) _data = voice;
        } );

        return _data;
    }

    function speak_rand_num( _data ) {
        var _index = 0;

        for ( ; _index < _data.range_num; _index++ ) {
            _data.utter.text = Math.floor( Math.random() * _data.range[0].value ) + 1;
            synth.speak( _data.utter );
        }
    }


    /**
     * Modules
     */
    IPSC.AimBotDrill = function()
    {
        var speak_rand_num = function( _data ) {
            var _index = 0;

            for ( ; _index < _data.range_num; _index++ ) {
                _data.utter.text = Math.floor( Math.random() * _data.range[0].value ) + 1;
                synth.speak( _data.utter );
            }
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