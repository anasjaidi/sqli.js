/**
 * Interface for objects that can be initialized.
 */
export interface IInitializeble {
    /**
     * Initializes the object.
     * @param conf Optional configuration for initialization.
     * @returns The initialized object.
     */
    init: (conf?: any) => typeof this;
    
    /**
     * Internal initialization method that must be implemented by subclasses.
     * @param conf Optional configuration for initialization.
     */
    _init: (conf?: any) => void;
  }
  
  /**
   * Abstract class for objects that can be initialized, implementing `IInitializeble`.
   */
  export abstract class Initializeble implements IInitializeble {
    /**
     * Placeholder render method that can be overridden by subclasses.
     * @param props The properties for rendering.
     */
    render(props: any): void {}
  
    /**
     * Initializes the object by binding the render method and calling the internal _init method.
     * @param conf Optional configuration for initialization.
     * @returns The initialized object.
     */
    init(conf?: any) {
      console.log("init")
      this.init = this.init.bind(this, conf)
      this._init();
      console.log(this)
      return this;
    }
  
    /**
     * Abstract method that must be implemented by subclasses for internal initialization logic.
     * @param conf Optional configuration for initialization.
     */
    abstract _init(conf?: any): void;
  }
  