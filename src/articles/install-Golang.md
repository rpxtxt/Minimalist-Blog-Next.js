---
title: "How to Install Go (Golang)"
date: "2024-08-22"
---

# How to Install Go (Golang)

Go, also known as Golang, is an open-source programming language designed for simplicity and efficiency. This guide will walk you through the steps to install Go on your system.

## Prerequisites

- A computer running Windows, macOS, or Linux.
- Administrative or root access to install software.

## Step 1: Download Go

1. Visit the official Go download page: [https://golang.org/dl/](https://golang.org/dl/).
2. Choose the appropriate installer for your operating system.

   - **Windows:** Download the MSI installer.
   - **macOS:** Download the PKG installer.
   - **Linux:** Download the tarball file.

## Step 2: Install Go

### For Windows

1. Double-click the downloaded MSI file.
2. Follow the installation wizard's instructions.
3. By default, Go will be installed in `C:\Go`.

### For macOS

1. Double-click the downloaded PKG file.
2. Follow the installation instructions to install Go.
3. Go will typically be installed in `/usr/local/go`.

### For Linux

1. Open your terminal.
2. Navigate to the directory where the tarball was downloaded.
3. Extract the tarball to `/usr/local` using the following command:

   ```bash
   sudo tar -C /usr/local -xzf go1.XX.linux-amd64.tar.gz
   ```

   Replace `go1.XX.linux-amd64.tar.gz` with the actual filename.

## Step 3: Set Up Go Environment

### For Windows

1. Open the Start Menu and search for "Environment Variables".
2. Click on "Edit the system environment variables".
3. In the System Properties window, click on the "Environment Variables" button.
4. Under "System variables", click "New" and add a new variable:

   - **Variable name:** `GOPATH`
   - **Variable value:** `C:\Users\<YourUsername>\go` (create this directory if it doesn’t exist)

5. Edit the `Path` variable and add the following paths:

   - `C:\Go\bin`
   - `%GOPATH%\bin`

### For macOS and Linux

1. Open your terminal.
2. Edit your shell profile file (e.g., `.bash_profile`, `.bashrc`, or `.zshrc`) and add the following lines:

   ```bash
   export GOPATH=$HOME/go
   export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
   ```

3. Save the file and run:

   ```bash
   source ~/.bash_profile  # or ~/.bashrc, or ~/.zshrc
   ```

## Step 4: Verify Installation

To verify that Go is installed correctly, open a terminal (or command prompt) and run:

```bash
go version
```

You should see the Go version printed in the terminal.