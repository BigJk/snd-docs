---
sidebar_position: 2
---

# Printer

## Requirements

At the moment Sales & Dungeons only supports the **ESC/POS (Epson Standard Code)** control codes, which is still one of the most used control code set. Check if a thermal printer you are interested in mentions ESC/POS or Epson in the description or manual.

In general the rule of thumb is:

- Most cheap chinese thermal printer found on Amazon or AliExpress support it
- Most epson thermal printer obviously support it
- A lot of older Serial printer (like Metapace T-1) also support it
- More specific information about tested printers can be found under [Tested Printers](/docs/printer/models)

## 💸 Buyer Guide

Let's dive into some of the most important aspects when buying a thermal printer.

### Size

Thermal printer commonly come in **58mm** and **80mm** width. The 58mm are usually smaller and cheaper but have less printing space.
The 80mm are bigger and more expensive but the bigger width can be very useful.

**In my opinion the 80mm are the better choice as 58mm can be a bit small for some use-cases / more complex templates.**

### Connection

- **USB**: **(Recommended)** The most common connection type. Most printer support it. Most of the time this will be the least hassle to get working.
- **Serial**: Older printer often use this connection. You will need a USB to Serial adapter and the printer tend to have small buffer sizes. This means that prints can be **very** slow.
- **Bluetooth**: Sounds good on paper but can be a hassle to setup. The printer needs to be paired with your computer and this more often than not requires proprietary drivers. Seems to work the best on windows because drivers can be rare on linux/mac.

### Dots per line

The dots per line define how many dots can be printed in one line. It's essentially the width that you are able to print.
The most common are **384** and **576**. The 384 are usually 58mm and the 576 are usually 80mm.
If you see a 80mm printer with less than 576 dots per line this means it's print width is less than what is common for a 80mm printer.

#### DPI

Sometimes you will see DPI (Dots per Inch) mentioned. For a 80mm printer with 576 dots per line this would be 203 DPI.
Some 80mm printers only have 180 DPI which is about 512 dots per line. So keep that in mind when comparing printers.

### ⚠️ Word of caution: Bluetooth handheld printer

<img src="https://user-images.githubusercontent.com/1621820/220469834-7b81f71c-210d-4f91-9305-906d41334d45.png" width="200" />

These handheld printer seem very practical but they tend to have lower quality print heads and less dots per line / dpi than their bigger brothers even at 80mm.
In the comparison below you can see how big the difference can be in regards to print quality. The handheld printer has a really hard time printing horizontal lines.
This doesn't mean that it's not usable and it might not be a problem with all handheld printers but it's something to keep in mind.

#### Comparison of horizontal lines

<div style={{display: 'flex', justifyItems:'center', alignItems:'center', justifyContent:'center'}}>
  <img src="https://cdn.discordapp.com/attachments/681574188875907194/688118559922061324/20200313_151703.jpg?ex=66ebde19&is=66ea8c99&hm=f62bfe35b90e2d25f9e7122cad6c55a4a089e45134cc27f8295a44be022bec1e&" width="250" />
  <div style={{margin: '50px'}}>handheld 58mm vs generic 80mm</div>
  <img src="https://cdn.discordapp.com/attachments/681574188875907194/688119507767787565/IMG_20200313_212045.jpg?ex=66ebdefb&is=66ea8d7b&hm=107fa52c89201b257e8f21f54536c4b0e652d9e61b85e07419e50c7371ceb1c1&" width="200" />
</div>

### ⚠️ Word of caution: "Lifestyle printer"

<img src="/img/article/lifestyle_printer.png" />

There are a lot of these "lifestyle" printers on the market. They are usually very small and cheap. They are often marketed as photo printers but they can also print text.
**These won't work with Sales & Dungeons**. They usually only work with their own app and don't support ESC/POS. There are no plans at the moment to support these printers.

### ⚠️ Word of caution: Label printer

There are label printer that support ESC/POS but so far nobody got them to work with Sales & Dungeons. As I don't have access to one of these printers I can't say if they can work or not.

### Second hand

If you are on a budget you can also look for second hand printers. A lot of older printers or even newer ones and can be found for cheap. I bought a lot of my printers on ebay for a fraction of the price of a new one.
Just watch out for very old serial printers. They work but the print speed can be very slow. If they are dirt cheap it might still be worth the try.

## What should I buy?

If I had to make a recommendation based on the budget you have I would say:

- **Budget** (25$ - 40$): Buy a generic chinese 58mm printer or search for a second hand 80mm printer
  - search for _"esc/pos thermal printer 58mm"_ on amazon or aliexpress
  - _"MUNBYN"_ and _"RONGTA"_ are some generic chinese brands that pop up a lot
  - search on ebay for second hand printers
- **Medium** (70$ - 120$): Buy a generic chinese 80mm printer
  - search for _"esc/pos thermal printer 80mm"_ on amazon or aliexpress
- **High-End** (150$+): Buy a branded printer like Epson (new or used)
  - For example _"Epson TM-M30II"_
