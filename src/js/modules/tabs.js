const tabs = () => {
    const tab = document.querySelectorAll('#tab');

    if(tab) {
        tab.forEach((el) => {
            el.addEventListener('click', (e) => {
                let currentTabBtn = e.currentTarget;

                if ( !currentTabBtn.classList.contains('active') ) {
                    tab.forEach(el => el.classList.remove('active'));
                }
                
                currentTabBtn.classList.add('active');
            })
            document.querySelector('#tab').click();
        })
    }
}

export default tabs;