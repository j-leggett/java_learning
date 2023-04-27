const Thermostat = require('./thermostat')

describe('thermostat class', () => {


  it('returns the correct temperature', () => {
    const thermo = new Thermostat()
    let result = thermo.getTemperature()
    expect(result).toEqual(20)
  })

  it('increases temperature in intervals of 1', () => {
    const thermo = new Thermostat()
    thermo.up()
    expect(thermo.getTemperature()).toEqual(21)
  })

  it('decreases temperature in intervals of 1', () => {
    const thermo = new Thermostat()
    thermo.down()
    expect(thermo.getTemperature()).toEqual(19)
  })

  it('returns a maximum heat of 25 when powerSaving mode is on and temp is increased over 25', () => {
    const thermo = new Thermostat()
    thermo.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermo.up();
    }
    expect(thermo.getTemperature()).toEqual(25)
  })

  it('returns the correct temp when powerSaving mode is off, and temp is increased over 25', () => {
    const thermo = new Thermostat()
    thermo.setPowerSavingMode(false);
    for (let i = 0 ; i < 10 ; i++) {
      thermo.up();
    }
    expect(thermo.getTemperature()).toEqual(30)
  })

  it('cannot return a temperature below 10', () => {
    const thermo = new Thermostat()
    thermo.setPowerSavingMode(false)
    for (let i = 0 ; i < 15 ; i++) {
      thermo.down();
    }
    expect(thermo.getTemperature()).toEqual(10)
  })

  it('cannot return a temperature above 32', () => {
    const thermo = new Thermostat()
    thermo.setPowerSavingMode(false)
    for (let i = 0 ; i < 15 ; i++) {
      thermo.up();
    }
    expect(thermo.getTemperature()).toEqual(32)
  })

  it('resets the temperature to 20 when reset fuction is called', () => {
    const thermo = new Thermostat()
    thermo.setPowerSavingMode(false)
    for (let i = 0 ; i < 15 ; i++) {
      thermo.up();
    }
    expect(thermo.getTemperature()).toEqual(32)
    thermo.reset()
    expect(thermo.getTemperature()).toEqual(20)
  })

  it('returns medium usage is temperature is in medium usage range', () => {
    const thermo = new Thermostat()
    thermo.setPowerSavingMode(false)
    for (let i = 0 ; i < 3 ; i++) {
      thermo.up();
    }
    expect(thermo.getCurrentEnergyUsage()).toEqual('Medium Usage')
  })

  it('returns low usage is temperature is in low usage range', () => {
    const thermo = new Thermostat()
    thermo.setPowerSavingMode(false)
    for (let i = 0 ; i < 5 ; i++) {
      thermo.down();
    }
    expect(thermo.getCurrentEnergyUsage()).toEqual('Low Usage')
  })

  it('returns high usage is temperature is in high usage range', () => {
    const thermo = new Thermostat()
    thermo.setPowerSavingMode(false)
    for (let i = 0 ; i < 10 ; i++) {
      thermo.up();
    }
    expect(thermo.getCurrentEnergyUsage()).toEqual('High Usage')
  })
})
