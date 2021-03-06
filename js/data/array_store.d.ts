import Store, {
    StoreOptions
} from './abstract_store';

export interface ArrayStoreOptions<T = ArrayStore> extends StoreOptions<T> {
    /**
     * @docid ArrayStoreOptions.data
     * @prevFileNamespace DevExpress.data
     * @public
     */
    data?: Array<any>;
}
/**
 * @docid ArrayStore
 * @inherits Store
 * @module data/array_store
 * @export default
 * @prevFileNamespace DevExpress.data
 * @public
 */
export default class ArrayStore extends Store {
    constructor(options?: ArrayStoreOptions)
    /**
     * @docid ArrayStore.clear
     * @publicName clear()
     * @prevFileNamespace DevExpress.data
     * @public
     */
    clear(): void;
    /**
     * @docid ArrayStore.createQuery
     * @publicName createQuery()
     * @return object
     * @prevFileNamespace DevExpress.data
     * @public
     */
    createQuery(): any;
}
