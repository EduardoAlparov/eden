export default () => {
    const btns = document.querySelectorAll('.catalog__nav-button[data-catalog-btn]');
    const lists = document.querySelectorAll('.catalog__list[data-catalog-list]');
    const filters = document.querySelector('.catalog__sidebar.filters');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const dataValue = btn.dataset.catalogBtn;

            lists.forEach((list) => {
                list.classList.add('display-none');
            })

            document.querySelector(`[data-catalog-list="${dataValue}"]`).classList.remove('display-none');

            if(dataValue === 'ready-list') {
                filters.classList.add('filters--all');
            } else {
                filters.classList.remove('filters--all');
            }
        })
    })
}
