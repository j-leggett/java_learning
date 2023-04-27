class Thermostat {

  constructor() {
    this.temperature = 20;
    this.powerSaving = true
  }

  getTemperature() {
    if((this.powerSaving === true)&&(this.temperature > 25)) {
      this.temperature = 25
      return this.temperature
    } else {
    return this.temperature;
    }
  }

  up() {
    if(this.temperature === 32) {
      this.temperature
    }else {
    this.temperature++
    }
  }

  down() {
    if(this.temperature === 10) {
      this.temperature
    }else {
    this.temperature--
    }
  }

  setPowerSavingMode(boolean){
    if (boolean === true) {
      this.powerSaving = true
    } else if (boolean === false){
      this.powerSaving = false
    } else {
      this.powerSaving = this.powerSaving
    }
  }

  reset() {
    this.temperature = 20
  }

  getCurrentEnergyUsage() {
    if(this.temperature < 18) {
      return 'Low Usage'
    } else if (this.temperature <= 25) {
      return 'Medium Usage'
    } else {
      return 'High Usage'
    }
  }

}

module.exports = Thermostat