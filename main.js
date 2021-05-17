const filterBarNode = document.getElementById('filterBarNode');

function resizeFilterBar(node) {
    filterBarNode.style.setProperty('width', getParentWidth(node));
}

function getParentWidth(node) {
    return window.getComputedStyle(node.parentNode).width
}

window.addEventListener('resize', () => {
    filterBarNode.style.setProperty('width', resizeFilterBar(filterBarNode));
});

resizeFilterBar(filterBarNode);
