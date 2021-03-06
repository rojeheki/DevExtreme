import '../jquery_augmentation';

import DataSource, {
    DataSourceOptions
} from '../data/data_source';

import CollectionWidget, {
    CollectionWidgetItem,
    CollectionWidgetOptions
} from './collection/ui.collection_widget.base';

export interface dxGalleryOptions extends CollectionWidgetOptions<dxGallery> {
    /**
     * @docid dxGalleryOptions.animationDuration
     * @default 400
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    animationDuration?: number;
    /**
     * @docid dxGalleryOptions.animationEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    animationEnabled?: boolean;
    /**
     * @docid dxGalleryOptions.dataSource
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataSource?: string | Array<string | dxGalleryItem | any> | DataSource | DataSourceOptions;
    /**
     * @docid dxGalleryOptions.focusStateEnabled
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    focusStateEnabled?: boolean;
    /**
     * @docid dxGalleryOptions.indicatorEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    indicatorEnabled?: boolean;
    /**
     * @docid dxGalleryOptions.initialItemWidth
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    initialItemWidth?: number;
    /**
     * @docid dxGalleryOptions.items
     * @fires dxGalleryOptions.onOptionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<string | dxGalleryItem | any>;
    /**
     * @docid dxGalleryOptions.loop
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    loop?: boolean;
    /**
     * @docid dxGalleryOptions.noDataText
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    noDataText?: string;
    /**
     * @docid dxGalleryOptions.selectedIndex
     * @default 0
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectedIndex?: number;
    /**
     * @docid dxGalleryOptions.showIndicator
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showIndicator?: boolean;
    /**
     * @docid dxGalleryOptions.showNavButtons
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showNavButtons?: boolean;
    /**
     * @docid dxGalleryOptions.slideshowDelay
     * @default 0
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    slideshowDelay?: number;
    /**
     * @docid dxGalleryOptions.stretchImages
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    stretchImages?: boolean;
    /**
     * @docid dxGalleryOptions.swipeEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    swipeEnabled?: boolean;
    /**
     * @docid dxGalleryOptions.wrapAround
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    wrapAround?: boolean;
}
/**
 * @docid dxGallery
 * @inherits CollectionWidget
 * @module ui/gallery
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxGallery extends CollectionWidget {
    constructor(element: Element, options?: dxGalleryOptions)
    constructor(element: JQuery, options?: dxGalleryOptions)
    /**
     * @docid dxGallery.goToItem
     * @publicName goToItem(itemIndex, animation)
     * @param1 itemIndex:numeric
     * @param2 animation:boolean
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    goToItem(itemIndex: number, animation: boolean): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxGallery.nextItem
     * @publicName nextItem(animation)
     * @param1 animation:boolean
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    nextItem(animation: boolean): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxGallery.prevItem
     * @publicName prevItem(animation)
     * @param1 animation:boolean
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    prevItem(animation: boolean): Promise<void> & JQueryPromise<void>;
}

export interface dxGalleryItem extends CollectionWidgetItem {
    /**
     * @docid dxGalleryItem.imageAlt
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    imageAlt?: string;
    /**
     * @docid dxGalleryItem.imageSrc
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    imageSrc?: string;
}

declare global {
interface JQuery {
    dxGallery(): JQuery;
    dxGallery(options: "instance"): dxGallery;
    dxGallery(options: string): any;
    dxGallery(options: string, ...params: any[]): any;
    dxGallery(options: dxGalleryOptions): JQuery;
}
}
export type Options = dxGalleryOptions;

/** @deprecated use Options instead */
export type IOptions = dxGalleryOptions;
