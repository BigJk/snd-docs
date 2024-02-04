---
sidebar_position: 4
---

# FAQ

## My printer isn't printing the full paper width, what to do?

The default printing width in S&D is set for 58mm printers. Just go to the settings and increase the printer width. See [Tested Printer](./printer/models) for common values. Rule of thumb is:
- 58mm: 384
- 80mm: 504 - 576

## My printer is randomly stopping half way through printing, what to do?

Try enabling **Explicit Initialization** and / or **Force Standard Mode** in the settings and **unplugging** (not just using the on/off switch) your printer for a few seconds until all LEDs are out between changing the settings.

### Windows: Multiple Devices

It was reported that in some cases a printer might be registered twice in the Device Manager. Removing the device should fix problems.

## My printer is only printing gibberish characters, what to do?

Try enabling image chunking in the settings with a value of 200 or 100. If that doesn't fix it try the steps in the question before.

## I'm getting a Trojan warning on Windows, what's going on?

This is a false positive triggered by a library that S&D uses. In newer versions of S&D the related component was disabled and trojan warnings should not occur anymore.

- More info: https://github.com/BigJk/snd/issues/28

## I'm getting 'RAW USB Printing' errors, what to do?

If you get errors like ``Error: printer wasn't able to print: libusb: bad access [code -3]`` or ``Error: printer wasn't able to print: not supported [code -12]`` this can be related to other drivers interfering or S&D not having enough privilege's. You can try:

- Running S&D as Admin (Windows) or ``sudo`` (Mac, Linux)
- Switching the USB port and re-selecting it on the Device page
- Try using Direct Printing (Windows) or CUPS (Mac, Linux)

## Getting strange libusb errors, what to do?

If you get errors like ``handle_events: error: libusb: interrupted [code -10]`` and don't need 'Raw USB Printing' try downloading the ``gui`` instead of ``gui-usb`` version of S&D.

## Mac App: It's not opening because it's from a unverified developer

If your mac is telling you that this app is from a unverified developer you can allow it via the "Privacy & Security" settings. More info: [Open a Mac app from an unidentified developer](https://support.apple.com/lv-lv/guide/mac-help/mh40616/mac)

## Mac App: It's not opening because the app "is damaged"

On M1, M2, etc. it can happen that the app is reported as damaged. Just copy Sales & Dungeons into your Applications folder and execute the following command to allow it to run:

```
xattr -d com.apple.quarantine "/Applications/Sales & Dungeons.app/"
```
