import { IDestroyable } from '../types';
import { Initializeble } from './Initializeble';
/**
 * Abstract class for objects that can be destroyed, extending from `Initializeble`.
 */
export declare abstract class Destroyable extends Initializeble implements IDestroyable {
}
