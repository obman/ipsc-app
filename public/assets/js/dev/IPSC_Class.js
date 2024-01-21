class IPSC {
    AimBotTrainingCycles;
    AimBotCycleTmpData;
    AimBotCycleData;

    constructor() {
        this.AimBotTrainingCycles = 0;
        this.AimBotCycleTmpData = []; // store temporary data
        this.AimBotCycleData = [];
    }
    AimBotStorage() {}

    speak_rand_num(AimBotDrillPublic) {
        let _index = 0,
            _rand_num = 0,
            _cycle_data = [];

        for ( ; _index < AimBotDrillPublic.range_num; _index++ ) {
            _rand_num = Math.floor( Math.random() * AimBotDrillPublic.range ) + 1;
            _cycle_data.push( _rand_num );

            AimBotDrillPublic.utter.text = _rand_num;
            synth.speak( AimBotDrillPublic.utter );
        }

        IPSC.AimBotStorage.AimBotCycleTmpData.push( _cycle_data );
    }

    static AimBotDrill() {
        const AimBotDrillPublic = {
            cycles    : 1,
            delayer   : 1,
            timer     : 1,
            range     : 1,
            range_num : 2,
            utter     : {},
            speak_rand_num : this.speak_rand_num(AimBotDrillPublic)
        }

        return AimBotDrillPublic;
    }
}