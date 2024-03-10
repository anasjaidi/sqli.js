import { IProps } from '../types';
import { CustomElement } from './CustomElement';
import { Statble } from './Statble';

/**
 * Interface for components with render functions.
 */
interface IComponent {
  render: (props?: IProps) => any;
  _render: (props?: IProps) => HTMLElement;
}

type ComponentsTreeSegamnt = Component | CustomElement<HTMLElement>;

interface IComponentsTree {
  parent: ComponentsTreeSegamnt;
  childs: ComponentsTreeSegamnt[];
}

/**
 * Abstract class for components, extending from `Statble`.
 */
export abstract class Component extends Statble implements IComponent {
  // protected _element: HTMLElement;
  protected __position: number = 0;
  private __parent__: HTMLElement;

  get position() {
    return this.__position;
  }

  set position(idx: number) {
    this.__position = idx;
  }

  /**
   * Abstract method to be implemented by child classes.
   */
  abstract render(props?: IProps): any;

  /**
   * Recursively appends child elements to the parent element.
   */
  private treefiy(
    element: IComponentsTree | ComponentsTreeSegamnt | ComponentsTreeSegamnt[],
    parent: HTMLElement
  ) {
    if (Array.isArray(element)) {
      element.forEach((el, idx) => {
        el.position = idx;
        this.treefiy(el, parent);
      });
    } else if ('parent' in element && 'childs' in element) {
      if (!Array.isArray(element['childs'])) {
        throw new Error();
      }
    } else if (element instanceof Component) {
      this.__toDestroy.push(element);
      element.__parent__ = parent;
      element._init()._render();
    } else if (element instanceof CustomElement) {
      this.__toDestroy.push(element);
      parent.appendChildAtNth(element._render(), element.position);
    }
  }

  constructor(props?: IProps) {
    super();
    this._render = this._render.bind(this, props);
  }

  /**
   * Renders the component.
   */
  _render(props?: IProps) {
    this._render = this._render.bind(this, props);
    const tree: IComponentsTree = this.render(props) as any;
    '_init' in tree.parent && tree.parent._init();

    this._element =
      (tree.parent._render && tree.parent._render()) ||
      (tree.parent as any as HTMLElement);

    tree.childs && tree.childs.length
      ? this.treefiy(tree.childs, this._element)
      : null;

    ((props?.parent as HTMLElement) || this.__parent__)?.appendChildAtNth(
      this._element,
      this.position
    );

    return this._element;
  }

  hasChild(ctx: Component): boolean {
    return this.__toDestroy.includes(ctx)
  }
}
