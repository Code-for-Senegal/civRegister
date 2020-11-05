'use strict';

const { app, BrowserWindow } = require('electron');
const { appConfig } = require('./app-config');

function getMainMenuTemplate(mainWindow) {
    return [
        {
            label: "Centre d'état Civil"
        },
        { type: 'separator' },
        {
            label: "Quitter",
            accelerator: appConfig.macOS ? 'CommandOrControl+Q' : 'Control+Q',
            click() {
                app.quit();
            }
        }
    ];
}

function getViewMenuTemplate() {
    return [
        {
            label: "Recharger",
            accelerator: 'CommandOrControl+R',
            click() {
                BrowserWindow.getFocusedWindow().reload();
            }
        },
        {
            label: "Outils de Développement",
            accelerator: appConfig.macOS ? 'Command+Alt+I' : 'Control+Shift+I',
            click() {
                BrowserWindow.getFocusedWindow().toggleDevTools();
            }
        }
    ];
}

module.exports = { 
    getMainMenuTemplate,
    getViewMenuTemplate
};