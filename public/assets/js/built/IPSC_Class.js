class IPSC_AimBot {
    AimBotTrainingCycles = 0;
    AimBotCycleTmpData     = [];
    AimBotCycleData        = [];
    DrillData                 = {
        cycles    : 1,
        delayer   : 1,
        timer     : 1,
        range     : 1,
        range_num : 2,
        utter     : {},
        //speak_rand_num : this.speak_rand_num(AimBotDrillPublic)
    };

    get trainingCycles() {
        return this.AimBotTrainingCycles;
    }
    get cycleTmpData() {
        return this.AimBotCycleTmpData;
    }
    get cycleData() {
        return this.AimBotCycleData;
    }
    get drillData() {
        return this.DrillData;
    }

    set trainingCycles(cycle) {
        this.AimBotTrainingCycles = cycle;
    }
    set cycleTmpData(tmp_data) {
        this.AimBotCycleTmpData.push(tmp_data);
    }
    set cycleData(cycle_data) {
        this.AimBotCycleData.push(cycle_data);
    }

    set cycles(_cycles) {
        this.DrillData.cycles = _cycles;
    }
    set delayer(_delayer) {
        this.DrillData.delayer = _delayer;
    }
    set timer(_timer) {
        this.DrillData.timer = _timer;
    }
    set range(_range) {
        this.DrillData.range = _range;
    }
    set range_num(_range_num) {
        this.DrillData.range_num = _range_num;
    }
    set utter(_utter) {
        this.DrillData.utter = _utter;
    }

    speak_rand_num = function(synth) {
        let _index = 0,
            _rand_num = 0,
            _cycle_data = [];

        for ( ; _index < this.drillData.range_num; _index++ ) {
            _rand_num = Math.floor( Math.random() * this.drillData.range ) + 1;
            _cycle_data.push( _rand_num );

            this.drillData.utter.text = _rand_num;
            synth.speak( this.drillData.utter );
        }

        this.cycleTmpData.push( _cycle_data );
    }
}