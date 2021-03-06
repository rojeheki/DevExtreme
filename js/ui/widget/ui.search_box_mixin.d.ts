import {
    dxTextBoxOptions
} from '../text_box';

export interface SearchBoxMixinOptions<T = SearchBoxMixin> {
    /**
     * @docid SearchBoxMixinOptions.searchEditorOptions
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    searchEditorOptions?: dxTextBoxOptions;
    /**
     * @docid SearchBoxMixinOptions.searchEnabled
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    searchEnabled?: boolean;
    /**
     * @docid SearchBoxMixinOptions.searchExpr
     * @type getter|Array<getter>
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    searchExpr?: string | Function | Array<string | Function>;
    /**
     * @docid SearchBoxMixinOptions.searchMode
     * @type Enums.CollectionSearchMode
     * @default 'contains'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    searchMode?: 'contains' | 'startswith' | 'equals';
    /**
     * @docid SearchBoxMixinOptions.searchTimeout
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    searchTimeout?: number;
    /**
     * @docid SearchBoxMixinOptions.searchValue
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    searchValue?: string;
}
/**
 * @docid SearchBoxMixin
 * @module ui/widget/ui.search_box_mixin
 * @export default
 * @hidden
 * @prevFileNamespace DevExpress.ui
 */
export default class SearchBoxMixin {
    constructor(options?: SearchBoxMixinOptions)
}
