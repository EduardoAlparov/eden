export default () => {
    const title = document.querySelector('.hero__title');

    if(!title) return;

    let setTitleHeightVar = () => {
      document.documentElement.style.setProperty('--title-height', title.offsetHeight + 'px');
    }

    setTitleHeightVar();

    window.addEventListener('resize', setTitleHeightVar);
}
