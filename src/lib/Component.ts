import { IProps } from '../types';
import { CustomElement } from './CustomElement';
import { Statble } from './Statble';

/**
 * Interface for components with render functions.
 */
interface IComponent {
  render: (props?: IProps) => void;
  _render: (props?: IProps) => any;
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
  abstract _render(props?: IProps): any;

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
      element.init().render();
    } else if (element instanceof CustomElement) {
      parent.appendChildAtNth(element.render(), element.position);
    }
  }

  constructor(props?: IProps) {
    console.log('okkok', props);
    super();
    this.render = this.render.bind(this, props);
  }

  /**
   * Renders the component.
   */
  render(props?: IProps) {
    this.render = this.render.bind(this, props);
    this.onRender();
    const tree: IComponentsTree = this._render(props) as any;
    'init' in tree.parent && tree.parent.init();

    this._element =
      (tree.parent.render && tree.parent.render()) ||
      (tree.parent as any as HTMLElement);

    tree.childs && tree.childs.length
      ? this.treefiy(tree.childs, this._element)
      : null;

    ((props?.parent as HTMLElement) || this.__parent__)?.appendChildAtNth(
      this._element,
      this.position
    );

    this.onRenderd();
    return this._element;
  }
}
