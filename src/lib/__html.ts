HTMLElement.prototype.appendChildAtNth = function (
  element: HTMLElement,
  idx: number
) {
    if (!idx) idx = 0
    if (idx >= this.children.length) {
        this.appnedChild(element);
    } else {
        this.insertBefore(element, this.children[idx]);
    }
};