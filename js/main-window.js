'use strict';

const { BrowserWindow, Menu, ipcMain, Tray } = require('electron')
const path = require('path')
const { appConfig } = require('./app-config');
const { getMainMenuTemplate, getViewMenuTemplate } = require('./menus');

let mainWindow = null;

function getMainWindow() {
    return mainWindow;
}

function createMenu() {
    const menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: getMainMenuTemplate(mainWindow)
        },
        {
            label: 'Éditer'
        },
        {
            label: 'Vue',
            submenu: getViewMenuTemplate(mainWindow)
        },
        {
            label: 'Aide'
        }
    ])

    Menu.setApplicationMenu(menu);
}

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1010,
        height: 800,
        // minWidth: 450,
        useContentSize: false,
        zoomToPageWidth: true, //MacOS only
        icon: appConfig.iconpath,
        show: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    createMenu()

    // Prevents flickering from maximize
    mainWindow.show();

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

}

module.exports = {
    createWindow,
    createMenu,
    getMainWindow
}