

document.getElementById("downloadCvBtn").onclick = function () {
    // Trigger the download of the CV using the direct download link
    window.location.href = 'https://drive.google.com/uc?export=download&id=1Af4iKhw-T7SWbZ3j7x_wZ9ygPgUyYp4W';
}

document.getElementById("previewCvBtn").onclick = function () {
    // Open the CV in a new tab for preview using the direct preview link
    window.open('https://drive.google.com/file/d/1Af4iKhw-T7SWbZ3j7x_wZ9ygPgUyYp4W/preview', '_blank');
}

