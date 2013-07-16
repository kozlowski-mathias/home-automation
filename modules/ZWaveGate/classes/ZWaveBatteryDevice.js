ZWaveBatteryDevice = function (id, controller, zDeviceId, zInstanceId) {
    ZWaveBatteryDevice.super_.call(this, id, controller, zDeviceId, zInstanceId);

    this.zCommandClassId = 0x80;

    this.vDevType = "probe";

    this.setMetricValue("probeTitle", "Battery");
    this.setMetricValue("scaleTitle", "%");

    this.setMetricValue("level", this._dic().data.last.value);
}

inherits(ZWaveBatteryDevice, ZWaveDevice);

ZWaveBatteryDevice.prototype.dataPoints = function () {
    // var zwayDevice = zway.devices[this.zDeviceId].instances[this.zInstanceId].commandClasses[this.zCommandClassId];
    return [this._dic().data.last];
}
