// Add CSS file
const style = document.createElement('link')
style.rel = 'stylesheet'
style.type = 'text/css'
style.href = chrome.extension.getURL('toast.css')
document.head.appendChild(style)

// Add JS file
const script = document.createElement('script')
script.type = 'text/javascript'
script.src = chrome.extension.getURL('toastify.js')
document.body.appendChild(script)

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'showToast') {
        Toastify({
            text: message.text,
            duration: 2000,
            destination: 'https://github.com/apvarun/toastify-js',
            newWindow: true,
            close: true,
            gravity: 'bottom',
            position: 'right',
            stopOnFocus: true,
            style: {
                background: '#fff',
                color: '#1f1f1f'
            },
            onClick: function () {
            } // Callback after click
        }).showToast()
    }
})
