# LibUSB / Raw USB Printing

LibUSB is a C library that provides generic access to USB devices. It is intended to be used by developers to facilitate the production of applications that communicate with USB hardware.

Sales & Dungeons offers builds with libUSB for Windows and OSX. This allows the software to directly communicate with the printer via USB and bypass the operating system's printer drivers.
This can be a useful feature to avoid installing chinese printer drivers on your system. Directly communicating with the printer seems to work with most generic chinese printers.

## Finding the right endpoint

The tricky part is to find the infos needed to build the endpoint definition for Sales & Dungeons. This can be done by using the `lsusb` command on Linux or OSX. On Windows you can use the [USBView](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/usbview) tool.

### Example `lsusb` with Zjiang ZJ-8330

Let's take the Zjiang ZJ-8330 as an example. This is a common chinese thermal printer. The output of `lsusb` looks like this:

```
Bus 002 Device 001: ID 2109:0817 VIA Labs, Inc. USB3.0 Hub  Serial: 000000000
Bus 002 Device 002: ID 2109:2817 VIA Labs, Inc. USB2.0 Hub  Serial: 000000000
Bus 002 Device 003: ID 0416:5011 Winbond Electronics Corp. POS80 Printer USB
Bus 000 Device 000: ID 2109:0817 VIA Labs, Inc. USB 3.1 Bus
Bus 000 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
```

The important part is the `Bus 002 Device 003: ID 0416:5011 Winbond Electronics Corp. POS80 Printer USB`. The `0416` is the vendor id and the `5011` is the product id.
Without going into details, we still need the endpoint address. They start from `01` and increment. The easiest way to find the right endpoint is to try them out.
With the chinese printers, the endpoint is usually `01` - `03`. Just increment and try printing.

This information results in the following endpoint input for the settings of S&D: `0416:5011:03`
