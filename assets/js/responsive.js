    
    const menuBar = document.querySelector('.menu-bars')
    const listItemHeader = document.querySelector('.nav .nav-box .nav-list')
    const itemHeader = document.querySelectorAll('.nav .nav-box .nav-item')
    var isOpen = false
function responsive() {
    handleListItemHeader()
}
responsive()

// xử lý đóng mở list item
function handleListItemHeader() {
    menuBar.onclick = function () {
        listItemHeader.classList.toggle('display')
    }

    itemHeader.forEach(function (item){
        item.onclick = function () {
            setTimeout(function () {
                listItemHeader.classList.toggle('display')
            },300)
        }
    })
}
