import {
    animationConfig
} from '../../animation/fx';

import DataSource, {
    DataSourceOptions
} from '../../data/data_source';

import HierarchicalCollectionWidget, {
    HierarchicalCollectionWidgetOptions
} from '../hierarchical_collection/ui.hierarchical_collection_widget';

import {
    dxMenuBaseItem
} from '../menu';

export interface dxMenuBaseOptions<T = dxMenuBase> extends HierarchicalCollectionWidgetOptions<T> {
    /**
     * @docid dxMenuBaseOptions.activeStateEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    activeStateEnabled?: boolean;
    /**
     * @docid dxMenuBaseOptions.animation
     * @default { show: { type: "fade", from: 0, to: 1, duration: 100 }, hide: { type: "fade", from: 1, to: 0, duration: 100 } }
     * @ref
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    animation?: { hide?: animationConfig, show?: animationConfig };
    /**
     * @docid dxMenuBaseOptions.cssClass
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    cssClass?: string;
    /**
     * @docid dxMenuBaseOptions.dataSource
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataSource?: string | Array<dxMenuBaseItem> | DataSource | DataSourceOptions;
    /**
     * @docid dxMenuBaseOptions.items
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<dxMenuBaseItem>;
    /**
     * @docid dxMenuBaseOptions.selectByClick
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectByClick?: boolean;
    /**
     * @docid dxMenuBaseOptions.selectionMode
     * @type Enums.MenuSelectionMode
     * @default none
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectionMode?: 'none' | 'single';
    /**
     * @docid dxMenuBaseOptions.showSubmenuMode
     * @type Object|Enums.ShowSubmenuMode
     * @default { name: "onHover", delay: { show: 0, hide: 0 } }
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showSubmenuMode?: { delay?: { hide?: number, show?: number } | number, name?: 'onClick' | 'onHover' } | 'onClick' | 'onHover';
}
/**
 * @docid dxMenuBase
 * @inherits HierarchicalCollectionWidget
 * @hidden
 * @prevFileNamespace DevExpress.ui
 */
export default class dxMenuBase extends HierarchicalCollectionWidget {
    constructor(element: Element, options?: dxMenuBaseOptions)
    constructor(element: JQuery, options?: dxMenuBaseOptions)
    /**
     * @docid dxMenuBase.selectItem
     * @publicName selectItem(itemElement)
     * @param1 itemElement:Element
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectItem(itemElement: Element): void;
    /**
     * @docid dxMenuBase.unselectItem
     * @publicName unselectItem(itemElement)
     * @param1 itemElement:Element
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    unselectItem(itemElement: Element): void;
}
