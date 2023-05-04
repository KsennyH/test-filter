const sorting = () => {
    const btnSort = document.querySelector('.sorting-filter');

    if(btnSort) {
        btnSort.addEventListener('click', () => {
            const sortList = document.querySelector('.sort-by');
            sortList.classList.toggle('active');
        })
    }
}

export default sorting;