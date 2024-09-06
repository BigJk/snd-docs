# Building

## Pre-requisites

You will need the following installed on your system:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Go](https://golang.org/)

## Building on Unix (osx, linux)

#### 1. Clone the repository

```bash
git clone git@github.com:BigJk/snd.git
```

#### 2. Building the frontend

```bash
cd frontend
npm run build
cd ../
```

#### 3. Run `./build.sh`

```bash
cd snd
./build.sh
```

After running the build script, you will find the compiled binary in the `build/release/` directory.

### Buildscript environment variables

- `SND_TAGS`: build tags to enable features
  - `LIBUSB`: enable libusb support
  - `ELECTRON`: enable electron (gui) support
- `APP_NAME`: binary name (default: `Sales & Dungeons`)
- `TARGET_DIR`: target directory (default: `build/release`)
- `OSX_APP_BUNDLE_ENABLED`: enable app bundle creation on osx (default: `false`)
- `OSX_APP_BUNDLE_DIR`: app bundle directory (default: value of `TARGET_DIR`)

## Building on Windows

Currently, there is no build script for Windows. You can take a look at the `build.sh` script and try to replicate the steps on Windows.

#### 1. Clone the repository

```bash
git clone git@github.com:BigJk/snd.git
```

#### 2. Building the frontend

```bash
cd frontend
npm run build
cd ../
```

#### 3. Building the backend

```bash
go build -o snd.exe cmd/app -tags "ELECTRON"
```
