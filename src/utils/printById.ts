const printById = (elementId: string) => {
        let printContent = document.getElementById(elementId)!
        printContent.classList.add('printing')
        window.print()
        printContent.classList.remove('printing')
}
    
export default printById