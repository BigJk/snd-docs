---
sidebar_position: 4
---

# Android Printing

The Android version of Sales & Dungeons can print directly to ESC/POS thermal printers. It does not use the Android system print dialog or a normal Android print queue. Instead, S&D renders the receipt and sends raw ESC/POS data to the printer.

There are two Android printer types:

- `Android USB Printing`
- `Android Bluetooth Printing`

## Android USB Printing

Use this method for USB thermal printers connected directly to the Android tablet or phone.

### Requirements

- An Android device with USB host / OTG support
- A USB-C OTG adapter or USB-C cable that supports data
- A powered ESC/POS thermal printer
- Printer width configured in S&D

### Instructions

1. Connect the printer to the Android device.
2. Open Sales & Dungeons.
3. Go to the `Devices` page.
4. Look for a device listed under `Android USB Printing`.
5. Press `Use`.
6. If Android asks for USB permission, allow it.
7. Try printing again after granting permission.
8. Go to `Settings` and set the correct `Printer Width`. Check [Tested Printer](/docs/printer/models) for common values.

USB endpoints use this format:

```text
vendor_id:product_id:endpoint_address
```

Example:

```text
0416:5011:01
```

Normally you do not need to type this manually. The `Devices` page should fill it for you.

## Android Bluetooth Printing

Use this method for small portable receipt printers that support Bluetooth Classic SPP / serial printing.

### Requirements

- A Bluetooth thermal printer that supports ESC/POS over Bluetooth Classic SPP
- The printer must be paired in Android settings first
- Bluetooth must be enabled
- Printer width configured in S&D

Many generic handheld printers describe this as `SPP`, `Serial Port Profile`, `POS SPP`, `IRCOMM`, or similar. Bluetooth LE-only printers are not supported by this method.

### Instructions

1. Pair the printer in Android's Bluetooth settings.
2. Open Sales & Dungeons.
3. Go to the `Devices` page.
4. Look for the paired printer under `Android Bluetooth Printing`.
5. Press `Use`.
6. If Android asks for Bluetooth permission, allow it.
7. Try printing again after granting permission.
8. Go to `Settings` and set the correct `Printer Width`.

Bluetooth endpoints are the paired device's MAC address. Normally you do not need to type this manually because the `Devices` page should fill it for you.

## Troubleshooting

### The USB printer does not show up

- Check that the Android device supports USB host / OTG.
- Check that the cable or adapter supports data, not only charging.
- Make sure the printer is powered on before opening the app.
- Disconnect and reconnect the printer, then refresh the `Devices` page.

### Android asks for permission but nothing prints

Grant the permission, then press print again. Android permission requests are handled before S&D can open the device.

### The Bluetooth printer does not show up

- Pair the printer in Android settings first.
- Make sure Bluetooth is enabled.
- Make sure the printer supports Bluetooth Classic SPP, not only Bluetooth LE.
- Refresh the `Devices` page after pairing.

### The printer feeds paper but prints nothing

- Check the `Printer Width`.
- Try enabling `Use ESC *` in `Settings`.
- Make sure the printer supports ESC/POS image printing.

### The print is too wide or cut off

The `Printer Width` is probably wrong. Lower the width until the print fits the paper.
