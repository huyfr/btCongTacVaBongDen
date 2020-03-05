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

function changeStatus()
{
    if  (switchButton.status)
    {
        switchButton.switchOff();
        console.log(electricLamp.status);
        document.getElementById("on").src=0+".png";
    }
    else
    {
        switchButton.switchOn();
        console.log(electricLamp.status);
        document.getElementById("on").src=1+".png";
    }
}