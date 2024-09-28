---
title: "How to Install Cloud 9 (C9) on VPS"
date: "2024-08-28"
---

## How to Install Cloud 9 (C9) on VPS

Cloud 9 (C9) is a web-based integrated development environment (IDE) that allows you to write, run, and manage your code directly in the browser. This article will guide you step by step to install C9 on your VPS.

## Prerequisites

Before you begin, ensure you have:

- A VPS running Ubuntu operating system.
- Root or sudo access to the VPS.
- Node.js and npm installed.

## Step 1: Update the System

First, update your system to ensure all packages are up to date:

```bash
sudo apt update && sudo apt upgrade -y
```

## Step 2: Install Dependencies

Install the required dependencies to run C9:

```bash
sudo apt install -y build-essential git
```

## Step 3: Install Node.js and npm

If Node.js is not installed, you can install it as follows:

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify the installation of Node.js and npm:

```bash
node -v
npm -v
```

## Step 4: Download Cloud 9

Download C9 from the GitHub repository:

```bash
git clone https://github.com/c9/core.git
cd core
```

## Step 5: Install C9

Once downloaded, install C9 using npm:

```bash
npm install
```

## Step 6: Run Cloud 9

To run C9, use the following command:

```bash
node server.js -l 0.0.0.0:8080 -w /path/to/your/workspace
```

Replace `/path/to/your/workspace` with the path to your working directory.

## Step 7: Access Cloud 9

Open your browser and access C9 via your VPS's IP address:

```
http://<your-vps-ip>:8080
```

You have now successfully installed Cloud 9 on your VPS. You can start developing your projects directly from the browser. To stop the C9 server, simply press `Ctrl + C` in the terminal.

## References

- [Cloud 9 GitHub Repository](https://github.com/c9/core)
- [Node.js Official Website](https://nodejs.org/)
