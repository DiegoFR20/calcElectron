const { app, BrowserWindow } = require('electron')

function createWindow() {
    let win = new BrowserWindow({
        width: 400,
        height: 456,
        title: "Calculadora",
    })

    win.setMenuBarVisibility(false)
    // win.fullScreenable(false)
    // win.resizable(false)
    // win.maximizable(false)
    win.loadFile('../public/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})