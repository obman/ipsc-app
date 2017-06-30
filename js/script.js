/**
 * Created by denismusic on 30/06/17.
 */
( function( window, document ) {

    // Namespaces
    var IPSC = IPSC || {};

    // Declarations
    var synth,
        aimbot_drill;

    document.onreadystatechange = function() {
        if ( document.readyState == 'complete' ) {

            // Definitions
            synth = window.speechSynthesis;
            aimbot_drill = document.querySelector( '#ipsc-aimbot-drill-start' );

            // Events
            document.querySelector( '#ipsc-add-new-range' ).addEventListener( 'click', function() {
                var _range = document.querySelector( '#ipsc-aimbot-drill .field-wrapper'),
                    _clone = _range.cloneNode( true );

                document.querySelector( '#ipsc-aimbot-drill .fields-wrapper').appendChild( _clone );
            }, true );

            // AimBot Drill Starter
            aimbot_drill.addEventListener( 'click', function() {
                var _data = {};

                _data.range = document.querySelectorAll( '#ipsc-aimbot-drill .ipsc-aimbot-array');
                _data.utter = new SpeechSynthesisUtterance;

                // Settings
                console.log ( IPSC );
                _data.utter.voice = get_voice( synth.getVoices(), 'Victoria' );

                _data.range.forEach( function( item ) {
                    _data.utter.text = Math.floor( Math.random() * item.value ) + 1;
                    synth.speak( _data.utter );
                    console.log ( _data.utter.text );
                } );

                console.log( synth.getVoices() );
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
    };

    /**
     * Modules
     */
    IPSC.AimBotDrill = function()
    {

        var get_voice = function( voices, voice_name ) {
            var _data = {};

            voices.forEach( function( voice ) {
                if ( voice.name === voice_name ) _data = voice;
            } );

            return _data;
        };

        var get_random = function( max ) {
            Math.floor( Math.random() * max.value ) + 1
        };

        var AimBotDrillPublic = {
            get_voice: get_voice
        };

        return AimBotDrillPublic;

    }();

} )( window, document );