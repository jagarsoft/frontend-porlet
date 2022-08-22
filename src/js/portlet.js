/**
 * Turn wrapper element into a Portlet
 */
function portlet(wrapper, options ) {
    const portlet =
        `<div class="portlet--head">
        <img alt="Icon" src="${options.iconSrc || 'src/images/drag_indicator_FILL0_wght400_GRAD0_opsz48.svg'}"/>
            <h6>${options.title}</h6>
            <button onclick="this.parentElement.parentElement.remove();">x</button>
        </div>
        <div class="portlet--container">${options.content}</div>`;

    wrapper.classList.add("portlet");
    wrapper.innerHTML = portlet;
}

// <img alt="Icon" src="${options.iconSrc}"></img>
// <span class="material-symbols-outlined">drag_indicator</span>

/**
 * Create a wrapper element and inject Portlet in it
 */
function createPortlet(options) {
    const wrapper = document.createElement('div');
    portlet(wrapper, options);
    document.body.append(wrapper);
}