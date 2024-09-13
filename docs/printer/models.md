# Tested Printers

Here is a list of printers that have been tested with the software. If you have a printer that is not listed here, please open an issue or a pull request with the settings you used or contact us on Discord.

## [Zjiang ZJ-5890K Thermal Printer](http://www.zjiang.com/en/init.php/product/index?id=29)

<img src="https://i.ebayimg.com/images/g/TCgAAOSwf9RcpFRR/s-l400.jpg" width="200" />

- **Printer Width:** 384
- **Printer Type:**
  - **Raw USB Printing:** Endpoint=`0416:5011:01`
  - **Windows Direct Printing:** Select Printer Name ([Setup](/docs/printer/setup/windows-generic/) or install Chinese Driver)
  - **CUPS:** Select Printer Name ([Setup](/docs/printer/setup/cups/))
- **Explicit Initialization:** Off (or On when Direct USB Printing is used)
- **Force Standard Mode:** Off
- **Cut After Printing:** Off

### Notes

A lot of cheap 58mm printers you will find on Amazon and other shops are rebranded versions of this Printer. If your printer looks the same or is a generic 58mm printer try the above settings.

## [Zjiang ZJ-8330 Thermal Printer](http://www.zjiang.com/en/init.php/product/index?id=42)

<img src="https://www.bdstall.com/asset/product-image/giant_65476.jpg" width="220" />

- **Printer Width:** 576
- **Printer Type:**
  - **Raw USB Printing:** Endpoint=`0416:5011:03`
  - **Windows Direct Printing:** Select Printer Name ([Setup](/docs/printer/setup/windows-generic/) or install Chinese Driver)
  - **CUPS:** Select Printer Name ([Setup](/docs/printer/setup/cups/))
- **Explicit Initialization:** Off (or On when Raw USB Printing is used)
- **Force Standard Mode:** On
- **Cut After Printing:** On / Off

## Metapace T-1

<img src="https://kassen.net/images/product_images/original_images/Metapace_T-3.jpg" width="220" />

- **Printer Width:** 504
- **Printer Type:** Serial
- **Endpoint**: `COM3:57600_N81_2`
  - On Windows: `COM3` needs to be changed to the COM port that the printer is registered
  - On Unix: `COM3` should be replaced with `/dev/tty.XXXXXX` or something similar of the device
  - **Warning:** Old serial printer tend to have small buffer. The `_2` indicates that a wait of 2 seconds will occur before each data chunk will be sent to the printer. If the printer doesn't finish printing try to increase this value! It seems on Windows a 0 works but on Unix systems a 2 second delay is needed.
- **Explicit Initialization:** On
- **Force Standard Mode:** On
- **Cut After Printing:** On / Off

### Notes

A cheap **DE-9 RS232-to-USB**, **DB-25 to DE-9 Adapter** and **DE-9 Null-Modem** will be needed to connect this serial printer to your PC.

**Connection:** Printer → DB-25 to DE-9 → DE-9 Null-Modem → DE-9 RS232-to-USB → PC

- https://en.wikipedia.org/wiki/RS-232
- https://en.wikipedia.org/wiki/Serial_cable
- https://en.wikipedia.org/wiki/Null_modem

## [BIXOLON SRP-350plusIII](https://bixoloneu.com/product/srp-350plusiii/)

<img src="https://bixolon.com/_upload/product/1562848974545471.png" width="220" />

- **Printer Width:** 504
- **Printer Type:** Serial
- **Printer Type:**
  - **Windows Direct Printing:** Select Printer Name ([Setup](/docs/printer/setup/windows-generic/))
  - **Serial:** Follow `Serial Windows` notes below
- **Explicit Initialization:** On
- **Force Standard Mode:** On

## [RONGTA 80 mm](https://www.rongtatech.com/rp850-80mm-thermal-receipt-printer_p18.html)

<img src="https://www.rongtatech.com/uploadfile/201811/30/5d4f87cac33b26491bc0070b6db0f4fa_medium.jpg" width="220" />

- **Printer Width:** 576
- **Printer Type:**
  - **Raw USB Printing:** Untested
  - **Windows Direct Printing:** Untested ([Setup](/docs/printer/setup/windows-generic/))
  - **CUPS:** Select Printer Name ([Setup](/docs/printer/setup/cups/))
- **Explicit Initialization:** Off / On (on Windows)
- **Force Standard Mode:** Off / On (on Windows)
- **Cut After Printing:** On / Off

## [MUNBYN ITPP047 80 mm](https://ca.munbyn.com/products/munbyn-itpp047-wifi-thermal-printer)

<img src="https://cdn.shopify.com/s/files/1/0555/2999/6332/products/61jCDZXd24L._AC_SL1500_700x.jpg?v=1653276971" width="220" />

- **Printer Width:** 576
- **Printer Type:**
  - **Raw USB Printing:** Untested
  - **Windows Direct Printing:** Tested ([Setup](/docs/printer/setup/windows-generic/))
  - **CUPS:** Untested ([Setup](/docs/printer/setup/cups/))
- **Explicit Initialization:** Off
- **Force Standard Mode:** Off
- **Cut After Printing:** On / Off

## MUNBYN IMP001 58 mm

<img src="https://i.imgur.com/lKK3m0k.png" width="220" />

- **Printer Width:** 384
- **Printer Type:**
  - **Raw USB Printing:** Untested
  - **Windows Direct Printing:** Tested ([Setup](/docs/printer/setup/windows-generic/))
  - **CUPS:** Untested ([Setup](/docs/printer/setup/cups/))
- **Explicit Initialization:** Off
- **Force Standard Mode:** Off
- **Cut After Printing:** On / Off

## TSP100 Star Printer

<img src="https://user-images.githubusercontent.com/1621820/217278539-a79abed5-df6f-41b8-81c0-83a18874da17.png" width="200" />

- **Printer Width:** 509 (3 inch paper), 360 (2 inch paper)
- **Printer Type:**
  - **Windows Direct Printing:** Select Printer Name (More info below)
- **Explicit Initialization:** Off
- **Force Standard Mode:** Off
- **Cut After Printing:** On

### Notes

**Only Windows Driver Available**. You need to download and install the [driver](https://starmicronics.com/support/download/tsp100-futureprnt-software-lite/) and follow the following [guide](https://starmicronics.com/help-center/knowledge-base/configure-tsp100-series-printers-esc-pos-mode/) to enable ESC/POS mode.

## GOOJPRT MTP-3F 80mm

<img src="https://user-images.githubusercontent.com/1621820/220469834-7b81f71c-210d-4f91-9305-906d41334d45.png" width="200" />

- **Printer Width:** 576
- **Printer Type:**
  - **Raw USB Printing:** Untested
  - **Windows Direct Printing:** Untested
  - **CUPS:** Untested
- **Explicit Initialization:** Unknown
- **Force Standard Mode:** Unknown
- **Cut After Printing:** On / Off

## Epson TM-M30II

<img src="https://i8.amplience.net/i/epsonemear/001z0815_pictures_hires_en_int_tm-m30_bk_frontpaperloading_png" width="200" />

- **Printer Width:** 576
- **Printer Type:**
  - **Raw USB Printing:** Untested
  - **Windows Direct Printing:** Untested
  - **CUPS:** Select Printer Name ([Setup](/docs/printer/setup/cups/))
- **Explicit Initialization:** Unknown
- **Force Standard Mode:** Unknown
- **Cut After Printing:** On / Off
