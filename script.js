const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
SelectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");


saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], {type: SelectMenu.value});
    const fileUrl = URL.createObjectURL(blob) ;
    const link = document.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click();
})