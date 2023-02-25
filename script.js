const notification = document.querySelector(".notifications")
const buttons = document.querySelectorAll(".buttons .btn")

const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success: This is a success toast.',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error: This is an error toast.',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning: This is a warning toast.',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Info: This is an information toast.',
    }
}

const removeToast = toast => {
    if(toast.stopwatch) clearTimeout(toast.stopwatch)
    setTimeout(() => {
        toast.remove()
    }, 500);
}

const CreateToast = para => {
    const toast = document.createElement("li")
    const {icon , text } = toastDetails[para]
    toast.className = `toast ${para}`
    toast.innerHTML = `<div class="column">
    <i class="fa-solid ${icon}"></i>
    <span>${text}</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
    notification.append(toast)
    toast.stopwatch = setTimeout(() => {
        removeToast(toast)
    }, toastDetails.timer);
}



buttons.forEach(btn => {
    btn.addEventListener("click" , e => CreateToast(btn.id))
})