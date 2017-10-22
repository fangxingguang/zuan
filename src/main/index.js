import { app, BrowserWindow, dialog } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    useContentSize: true,
    width: 1000,
    height: 700,
    minWidth: 1000,
    minHeight: 700,
    frame: false
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    var allWin = BrowserWindow.getAllWindows();
    allWin.forEach(function (w) {
      w.close()
    })
    mainWindow = null
  })

  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    const win2 = new BrowserWindow({ show: false })
    win2.once('ready-to-show', () => win2.show())
    win2.loadURL(url)
    event.newGuest = win2
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

const ipcMain = require('electron').ipcMain;
ipcMain.on('ipc', function (event, arg) {
  if (arg == 'winMin') {
    mainWindow.minimize();
  } else if (arg == 'winMax') {
    if (mainWindow.isMaximized()) {
      mainWindow.restore()
    } else {
      mainWindow.maximize();
    }
  } else if (arg == 'winClose') {
    const options = {
      type: 'info',
      title: '信息',
      message: "确认退出软件？",
      buttons: ['是', '否'],
      cancelId: 2
    }
    dialog.showMessageBox(options, function (index) {
      if (index == 0) {
        mainWindow.close();
      }
    })
  } else if (arg == 'debug') {
    mainWindow.webContents.openDevTools();
  }
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
