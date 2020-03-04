let ElectricLamp=function ()
{
    this.status=false;

    this.turnOff=function ()
    {
        this.status=false;
    };

    this.turnOn=function ()
    {
        this.status=true;
    };
};

let SwitchButton=function ()
{
    this.status=false;

    this.connectToLamp=function (lamp)
    {
        this.lamp=lamp;
    };

    this.switchOff=function ()
    {
        this.status=false;
        this.lamp.turnOff();
    };

    this.switchOn=function ()
    {
        this.status=true;
        this.lamp.turnOn();
    };
};

let switchButton=new SwitchButton();
let electricLamp=new ElectricLamp();

switchButton.connectToLamp(electricLamp);
for (let i=0; i<10; i++)
{
    switchButton.switchOn();
    console.log(electricLamp.status);
    switchButton.switchOff();
    console.log(electricLamp.status);
}
