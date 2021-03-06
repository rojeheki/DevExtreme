import '../jquery_augmentation';

import {
    dxElement
} from '../core/element';

import {
    template
} from '../core/templates/template';

import DataSource, {
    DataSourceOptions
} from '../data/data_source';

import {
    event
} from '../events/index';

import CollectionWidget, {
    CollectionWidgetItem,
    CollectionWidgetOptions
} from './collection/ui.collection_widget.base';

import {
    dxSortableOptions
} from './sortable';

import {
    SearchBoxMixinOptions
} from './widget/ui.search_box_mixin';

export interface dxListOptions extends CollectionWidgetOptions<dxList>, SearchBoxMixinOptions<dxList> {
    /**
     * @docid dxListOptions.activeStateEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    activeStateEnabled?: boolean;
    /**
     * @docid dxListOptions.allowItemDeleting
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    allowItemDeleting?: boolean;
    /**
     * @docid dxListOptions.bounceEnabled
     * @default true
     * @default false [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    bounceEnabled?: boolean;
    /**
     * @docid dxListOptions.collapsibleGroups
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    collapsibleGroups?: boolean;
    /**
     * @docid dxListOptions.dataSource
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataSource?: string | Array<string | dxListItem | any> | DataSource | DataSourceOptions;
    /**
     * @docid dxListOptions.displayExpr
     * @default undefined
     * @type_function_param1 item:object
     * @type_function_return string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    displayExpr?: string | ((item: any) => string);
    /**
     * @docid dxListOptions.focusStateEnabled
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    focusStateEnabled?: boolean;
    /**
     * @docid dxListOptions.groupTemplate
     * @default "group"
     * @type_function_param1 groupData:object
     * @type_function_param2 groupIndex:number
     * @type_function_param3 groupElement:dxElement
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    groupTemplate?: template | ((groupData: any, groupIndex: number, groupElement: dxElement) => string | Element | JQuery);
    /**
     * @docid dxListOptions.grouped
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    grouped?: boolean;
    /**
     * @docid dxListOptions.hoverStateEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hoverStateEnabled?: boolean;
    /**
     * @docid dxListOptions.indicateLoading
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    indicateLoading?: boolean;
    /**
     * @docid dxListOptions.itemDeleteMode
     * @type Enums.ListItemDeleteMode
     * @default 'static'
     * @default 'slideItem' [for](iOS)
     * @default 'swipe' [for](Android)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    itemDeleteMode?: 'context' | 'slideButton' | 'slideItem' | 'static' | 'swipe' | 'toggle';
    /**
     * @docid dxListOptions.itemDragging
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    itemDragging?: dxSortableOptions;
    /**
     * @docid dxListOptions.items
     * @fires dxListOptions.onOptionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<string | dxListItem | any>;
    /**
     * @docid dxListOptions.menuItems
     * @default []
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    menuItems?: Array<{ action?: ((itemElement: dxElement, itemData: any) => any), text?: string }>;
    /**
     * @docid dxListOptions.menuMode
     * @type Enums.ListMenuMode
     * @default 'context'
     * @default 'slide' [for](iOS)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    menuMode?: 'context' | 'slide';
    /**
     * @docid dxListOptions.nextButtonText
     * @default "More"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    nextButtonText?: string;
    /**
     * @docid dxListOptions.onGroupRendered
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 groupData:object
     * @type_function_param1_field5 groupElement:dxElement
     * @type_function_param1_field6 groupIndex:number
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onGroupRendered?: ((e: { component?: dxList, element?: dxElement, model?: any, groupData?: any, groupElement?: dxElement, groupIndex?: number }) => any);
    /**
     * @docid dxListOptions.onItemClick
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number | object
     * @type_function_param1_field7 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemClick?: ((e: { component?: dxList, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number | any, event?: event }) => any) | string;
    /**
     * @docid dxListOptions.onItemContextMenu
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number | object
     * @type_function_param1_field7 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemContextMenu?: ((e: { component?: dxList, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number | any, event?: event }) => any);
    /**
     * @docid dxListOptions.onItemDeleted
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number | object
     * @action
     * @hidden false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemDeleted?: ((e: { component?: dxList, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number | any }) => any);
    /**
     * @docid dxListOptions.onItemDeleting
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number | object
     * @type_function_param1_field7 cancel:boolean | Promise<void>
     * @action
     * @hidden false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemDeleting?: ((e: { component?: dxList, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number | any, cancel?: boolean | Promise<void> | JQueryPromise<void> }) => any);
    /**
     * @docid dxListOptions.onItemHold
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number | object
     * @type_function_param1_field7 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemHold?: ((e: { component?: dxList, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number | any, event?: event }) => any);
    /**
     * @docid dxListOptions.onItemReordered
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number | object
     * @type_function_param1_field7 fromIndex:number
     * @type_function_param1_field8 toIndex:number
     * @action
     * @hidden false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemReordered?: ((e: { component?: dxList, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number | any, fromIndex?: number, toIndex?: number }) => any);
    /**
     * @docid dxListOptions.onItemSwipe
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @type_function_param1_field5 itemData:object
     * @type_function_param1_field6 itemElement:dxElement
     * @type_function_param1_field7 itemIndex:number | object
     * @type_function_param1_field8 direction:string
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemSwipe?: ((e: { component?: dxList, element?: dxElement, model?: any, event?: event, itemData?: any, itemElement?: dxElement, itemIndex?: number | any, direction?: string }) => any);
    /**
     * @docid dxListOptions.onPageLoading
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onPageLoading?: ((e: { component?: dxList, element?: dxElement, model?: any }) => any);
    /**
     * @docid dxListOptions.onPullRefresh
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onPullRefresh?: ((e: { component?: dxList, element?: dxElement, model?: any }) => any);
    /**
     * @docid dxListOptions.onScroll
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @type_function_param1_field5 scrollOffset:object
     * @type_function_param1_field6 reachedLeft:boolean
     * @type_function_param1_field7 reachedRight:boolean
     * @type_function_param1_field8 reachedTop:boolean
     * @type_function_param1_field9 reachedBottom:boolean
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onScroll?: ((e: { component?: dxList, element?: dxElement, model?: any, event?: event, scrollOffset?: any, reachedLeft?: boolean, reachedRight?: boolean, reachedTop?: boolean, reachedBottom?: boolean }) => any);
    /**
     * @docid dxListOptions.onSelectAllValueChanged
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 value:boolean
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onSelectAllValueChanged?: ((e: { component?: dxList, element?: dxElement, model?: any, value?: boolean }) => any);
    /**
     * @docid dxListOptions.pageLoadMode
     * @type Enums.ListPageLoadMode
     * @default "scrollBottom"
     * @default 'nextButton' [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pageLoadMode?: 'nextButton' | 'scrollBottom';
    /**
     * @docid dxListOptions.pageLoadingText
     * @default "Loading..."
     * @default "" [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pageLoadingText?: string;
    /**
     * @docid dxListOptions.pullRefreshEnabled
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pullRefreshEnabled?: boolean;
    /**
     * @docid dxListOptions.pulledDownText
     * @default "Release to refresh..."
     * @default "" [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pulledDownText?: string;
    /**
     * @docid dxListOptions.pullingDownText
     * @default "Pull down to refresh..."
     * @default "" [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pullingDownText?: string;
    /**
     * @docid dxListOptions.refreshingText
     * @default "Refreshing..."
     * @default "" [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    refreshingText?: string;
    /**
     * @docid dxListOptions.repaintChangesOnly
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    repaintChangesOnly?: boolean;
    /**
     * @docid dxListOptions.scrollByContent
     * @default true
     * @default false [for](non-touch_devices)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollByContent?: boolean;
    /**
     * @docid dxListOptions.scrollByThumb
     * @default false
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollByThumb?: boolean;
    /**
     * @docid dxListOptions.scrollingEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollingEnabled?: boolean;
    /**
     * @docid dxListOptions.selectAllMode
     * @type Enums.SelectAllMode
     * @default 'page'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectAllMode?: 'allPages' | 'page';
    /**
     * @docid dxListOptions.selectionMode
     * @type Enums.ListSelectionMode
     * @default 'none'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectionMode?: 'all' | 'multiple' | 'none' | 'single';
    /**
     * @docid dxListOptions.showScrollbar
     * @type Enums.ShowScrollbarMode
     * @default 'onScroll'
     * @default 'onHover' [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showScrollbar?: 'always' | 'never' | 'onHover' | 'onScroll';
    /**
     * @docid dxListOptions.showSelectionControls
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showSelectionControls?: boolean;
    /**
     * @docid dxListOptions.useNativeScrolling
     * @default false [for](desktop)
     * @default true [for](Mac)
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    useNativeScrolling?: boolean;
}
/**
 * @docid dxList
 * @inherits CollectionWidget, SearchBoxMixin
 * @module ui/list
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxList extends CollectionWidget {
    constructor(element: Element, options?: dxListOptions)
    constructor(element: JQuery, options?: dxListOptions)
    /**
     * @docid dxList.clientHeight
     * @publicName clientHeight()
     * @return numeric
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    clientHeight(): number;
    /**
     * @docid dxList.collapseGroup
     * @publicName collapseGroup(groupIndex)
     * @param1 groupIndex:Number
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    collapseGroup(groupIndex: number): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxList.deleteItem
     * @publicName deleteItem(itemElement)
     * @param1 itemElement:Element
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    deleteItem(itemElement: Element): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxList.deleteItem
     * @publicName deleteItem(itemIndex)
     * @param1 itemIndex:Number|Object
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    deleteItem(itemIndex: number | any): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxList.expandGroup
     * @publicName expandGroup(groupIndex)
     * @param1 groupIndex:Number
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expandGroup(groupIndex: number): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxList.isItemSelected
     * @publicName isItemSelected(itemElement)
     * @param1 itemElement:Element
     * @return boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    isItemSelected(itemElement: Element): boolean;
    /**
     * @docid dxList.isItemSelected
     * @publicName isItemSelected(itemIndex)
     * @param1 itemIndex:Number|Object
     * @return boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    isItemSelected(itemIndex: number | any): boolean;
    /**
     * @docid dxList.reload
     * @publicName reload()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    reload(): void;
    /**
     * @docid dxList.reorderItem
     * @publicName reorderItem(itemElement, toItemElement)
     * @param1 itemElement:Element
     * @param2 toItemElement:Element
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    reorderItem(itemElement: Element, toItemElement: Element): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxList.reorderItem
     * @publicName reorderItem(itemIndex, toItemIndex)
     * @param1 itemIndex:Number|Object
     * @param2 toItemIndex:Number|Object
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    reorderItem(itemIndex: number | any, toItemIndex: number | any): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxList.scrollBy
     * @publicName scrollBy(distance)
     * @param1 distance:numeric
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollBy(distance: number): void;
    /**
     * @docid dxList.scrollHeight
     * @publicName scrollHeight()
     * @return numeric
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollHeight(): number;
    /**
     * @docid dxList.scrollTo
     * @publicName scrollTo(location)
     * @param1 location:numeric
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollTo(location: number): void;
    /**
     * @docid dxList.scrollToItem
     * @publicName scrollToItem(itemElement)
     * @param1 itemElement:Element
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollToItem(itemElement: Element): void;
    /**
     * @docid dxList.scrollToItem
     * @publicName scrollToItem(itemIndex)
     * @param1 itemIndex:Number|Object
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollToItem(itemIndex: number | any): void;
    /**
     * @docid dxList.scrollTop
     * @publicName scrollTop()
     * @return numeric
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollTop(): number;
    /**
     * @docid dxList.selectAll
     * @publicName selectAll()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectAll(): void;
    /**
     * @docid dxList.selectItem
     * @publicName selectItem(itemElement)
     * @param1 itemElement:Element
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectItem(itemElement: Element): void;
    /**
     * @docid dxList.selectItem
     * @publicName selectItem(itemIndex)
     * @param1 itemIndex:Number|Object
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectItem(itemIndex: number | any): void;
    /**
     * @docid dxList.unselectAll
     * @publicName unselectAll()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    unselectAll(): void;
    /**
     * @docid dxList.unselectItem
     * @publicName unselectItem(itemElement)
     * @param1 itemElement:Element
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    unselectItem(itemElement: Element): void;
    /**
     * @docid dxList.unselectItem
     * @publicName unselectItem(itemIndex)
     * @param1 itemIndex:Number|Object
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    unselectItem(itemIndex: number | any): void;
    /**
     * @docid dxList.updateDimensions
     * @publicName updateDimensions()
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    updateDimensions(): Promise<void> & JQueryPromise<void>;
}

export interface dxListItem extends CollectionWidgetItem {
    /**
     * @docid dxListItem.badge
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    badge?: string;
    /**
     * @docid dxListItem.icon
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    icon?: string;
    /**
     * @docid dxListItem.key
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    key?: string;
    /**
     * @docid dxListItem.showChevron
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showChevron?: boolean;
}

declare global {
interface JQuery {
    dxList(): JQuery;
    dxList(options: "instance"): dxList;
    dxList(options: string): any;
    dxList(options: string, ...params: any[]): any;
    dxList(options: dxListOptions): JQuery;
}
}
export type Options = dxListOptions;

/** @deprecated use Options instead */
export type IOptions = dxListOptions;
