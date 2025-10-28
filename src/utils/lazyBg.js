export function lazyLoadBg(selector = '.stats-section') {
    const el = document.querySelector(selector);
    if (!el) return;
    const src = el.datasetBg || el.getAttribute('data-bg');
    if (!src) return;
    const img = new Image();
    img.src = src;
    img.onload = () => {
        el.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${src}')`;
    };
}