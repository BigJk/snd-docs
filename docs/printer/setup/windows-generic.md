# Windows Generic Driver

If you don't want to install unsigned Chinese drivers there is a simple workaround that seems to work on most Chinese printer. It may also work with other ones.

## Instructions

### 1. Change the USB Device Driver

You have to open the ``Device Manager`` and find the entry for your plugged in Printer. Try plugging it in and out to see what device it might be. If you found it:

1. Right Click -> ``Update Driver``
2. ``Browse my computer for drivers``
3. ``Let me pick from a list of available drivers on my computer``
4. Uncheck ``Show compatible hardware``
5. Manufacturer ``Microsoft`` and select ``USB Printing Support``
6. Finish setup

### 2. Check the USB Device Number

Still in the ``Device Manager``

1. Find the ``USB Printing Support`` Device under ``Universal Serial Bus controllers``
2. Right Click -> ``Properties`` -> ``Details`` Tab
3. Select ``Bus relations`` as ``Property``
4. The ``Value`` should end with something like ``USB001``, ``USB002``, ...
5. Note that value

### 3. Add the Printer

Open ``Printer & scanners`` windows settings:

1. Press the ``Add a printer or scanner`` button and let it run
2. Press ``The printer that I want isn't listed``
3. Select ``Add a local printer or network printer with manual settings``
4. Check ``Use an existing port`` and select the correct USB device. It should be named like ``USB001 (Virtual printer port for USB)``. Should match the one from the ``USB Printing Support`` device.
5. Manufacturer ``Generic`` and select ``Generic / Text Only``
6. ``Use the driver that is currently installed (recommended)``
7. Give it a name and finish the setup

The printer is now registered in Windows.

### 4. In Sales & Dungeons

1. Go to the ``Devices`` page and look for the name of your printer and press the ``Use`` button.
2. Go to the ``Settings`` page and set the correct ``Printer Width``. Check [Tested Printer](/docs/printer/models) for printing width.
3. Disable ``Explicit Initialization`` and ``Force Standard Mode``
