/*!
 * DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 * Version 2, December 2004
 *
 * Copyright (C) 2004 Denis <obman@github.com>
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
( (_this, IPSC_AimBot) => {
    const
        window   = _this.window,
        document = _this.document,
        IPSC     = new IPSC_AimBot()
    ;

    /**
     * Declarations
     */
    let synth,
        aimbot_drill_start,
        aimbot_drill_stop,
        aimbot_drill_range_slider,
        aimbot_drill_range_display,
        aimbot_interval,

        aimbot_storage_wrapper,
        aimbot_storage_section;

    document.onreadystatechange = () => {
        if ( document.readyState === 'complete' ) {

            /**
             * Definitions
             */
            synth = window.speechSynthesis;

            // AimBot Drill
            aimbot_drill_start         = document.querySelector( '#ipsc-aimbot-drill-start' );
            aimbot_drill_stop          = document.querySelector( '#ipsc-aimbot-drill-stop' );
            aimbot_drill_range_slider  = document.querySelector( '#ipsc-aimbot-drill-range-slider' );
            aimbot_drill_range_display = document.querySelector( '#ipsc-aimbot-drill-selected-range-number');

            aimbot_storage_wrapper = document.querySelector( '#ipsc-aimbot-cycles-storage' );
            aimbot_storage_section = document.querySelector( '#ipsc-aimbot-cycle-excerpt' );

            /**
             * Events
             */
            // AimBot Drill Starter
            aimbot_drill_start.addEventListener( 'click', function() {
                const _that = this;
                let _cycle_index = 1;

                this.classList.toggle( 'active' );

                IPSC.cycles    = parseInt( document.querySelector( '#ipsc-aimbot-cycles').value );
                IPSC.delayer   = parseInt( document.querySelector( '#ipsc-aimbot-start-delay').value );
                IPSC.timer     = parseInt( document.querySelector( '#ipsc-aimbot-cycle-delay').value );
                IPSC.range     = parseInt( aimbot_drill_range_slider.value );
                IPSC.range_num = 2; // torso <-> head
                IPSC.utter     = new SpeechSynthesisUtterance;

                // Utter Settings
                // Causing problems as voices are not async loaded as it app on mobile devices
                //if ( synth.onvoiceschanged !== undefined ) IPSC.AimBotDrill.utter.voice = get_voice( synth.getVoices(), 'Victoria' );

                if ( IPSC.drillData.delayer > 0 ) {
                    setTimeout( function() {
                        aimbot_interval = setInterval( function() {
                            if ( IPSC.drillData.cycles >= _cycle_index ) {
                                IPSC.speak_rand_num(synth);
                            }
                            else {
                                clearInterval( aimbot_interval );

                                _that.classList.remove( 'active' );

                                IPSC.cycleData = IPSC.cycleTmpData;
                                IPSC.resetCycleTmpData();

                                display_cycle( aimbot_storage_wrapper, aimbot_storage_section );
                            }
                            _cycle_index++;
                        }, IPSC.drillData.timer * 1000 );
                    }, IPSC.drillData.delayer * 1000 );
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
        let _data = {};

        voices.forEach( function( voice ) {
            if ( voice.name === voice_name ) _data = voice;
            else if ( voice.lang === 'en-US') _data = voice;
        } );

        return _data;
    }

    function display_cycle( wrapper, section ) {
        const _classdisabled = 'ipsc--disabled',
            _app_cycle = IPSC.trainingCycles || 0;
        let _index = 0,
            _html;

        if ( wrapper.classList.contains( _classdisabled ) ) wrapper.classList.remove( _classdisabled );

        _html = '<div class="ipsc-aimbot-cycle-round">';
        _html += '<p>' + ( _app_cycle + 1 ) + '. session</p>';
        for ( ; _index < IPSC.cycleData[_app_cycle].length; _index++ ) {
            _html += '<div class="cell">' + ( _index + 1 ) + ': ' + IPSC.cycleData[_app_cycle][_index].join( ', ' ) + '</div>';
        }
        _html += '</div>';

        IPSC.trainingCycles++;
        section.innerHTML += _html;
    }

} )(this, IPSC_AimBot);