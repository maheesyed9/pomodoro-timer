const { app, BrowserWindow, ipcMain} = require('electron');
const url = require('url');
const path = require ('path');

let mainWindow;

function createMainWindow(){
    mainWindow = new BrowserWindow({
        title: 'PomodorTimer',
        width: 400,
        height: 430,
        frame: false, // Remove default frame for custom controls
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, '../build/index.html'), //connect to the react app
        protocol: 'file:',
        slashes: true,
    });

    mainWindow.loadURL(startUrl); // load app in electron window
}

// IPC Handlers for window controls
ipcMain.on('minimize-window', () => {
    if (mainWindow) {
        mainWindow.minimize();
    }
});

ipcMain.on('close-window', () => {
    if (mainWindow) {
        mainWindow.close();
    }
});

app.whenReady().then(createMainWindow)