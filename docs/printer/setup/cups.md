# Cups for Linux & Mac

CUPS is preinstalled on Mac and a lot of Linux distros. You can use it to quickly add a printer. This was tested for common Chinese printer but might not work on other ones. It's still worth a try!

## Instructions

### 1. Add Printer

1. Enable the CUPS Web-Interface by running `cupsctl WebInterface=yes` in the terminal
2. Visit http://localhost:631/admin/
3. Use your user credentials to log in
4. Press `Add Printer`
5. If your printer is plugged in it should be selectable under `Local Printers`. Select it.
6. Give it a `Name` and `Description`
7. For `Make` select `Raw` and `Continue`
8. For `Model` select `Raw Queue (en)`
9. Press `Add Printer`

### 2. In Sales & Dungeons

1. Go to the `Devices` page and look for the name of your printer and press the `Use` button.
2. Go to the `Settings` page and set the correct `Printer Width`. Check [Tested Printer](/docs/printer/models) for printing width.
3. Disable `Explicit Initialization` and `Force Standard Mode`

**Important:** If you don't find your printer listed as cups just go into the settings. Select CUPS as printer type and put in the name of the printer as endpoint manually.
