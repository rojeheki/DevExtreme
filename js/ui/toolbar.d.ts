import {
    dxElement
} from '../core/element';

import {
    template
} from '../core/templates/template';

import DataSource, {
    DataSourceOptions
} from '../data/data_source';

import CollectionWidget, {
    CollectionWidgetItem,
    CollectionWidgetOptions
} from './collection/ui.collection_widget.base';

export interface dxToolbarOptions extends CollectionWidgetOptions<dxToolbar> {
    /**
     * @docid  dxToolbarOptions.dataSource
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataSource?: string | Array<string | dxToolbarItem | any> | DataSource | DataSourceOptions;
    /**
     * @docid dxToolbarOptions.items
     * @fires dxToolbarOptions.onOptionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<string | dxToolbarItem | any>;
    /**
     * @docid dxToolbarOptions.menuItemTemplate
     * @default "menuItem"
     * @type_function_param1 itemData:object
     * @type_function_param2 itemIndex:number
     * @type_function_param3 itemElement:dxElement
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    menuItemTemplate?: template | ((itemData: any, itemIndex: number, itemElement: dxElement) => string | Element | JQuery);
    /**
     * @docid dxToolbarOptions.height
     * @deprecated
     * @default undefined
     * @type_function_return number|string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    height?: number | string | (() => number | string);
}
/**
 * @docid dxToolbar
 * @inherits CollectionWidget
 * @module ui/toolbar
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxToolbar extends CollectionWidget {
    constructor(element: Element, options?: dxToolbarOptions)
    constructor(element: JQuery, options?: dxToolbarOptions)
}

export interface dxToolbarItem extends CollectionWidgetItem {
    /**
     * @docid dxToolbarItem.cssClass
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    cssClass?: string;
    /**
     * @docid dxToolbarItem.locateInMenu
     * @type Enums.ToolbarItemLocateInMenuMode
     * @default 'never'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    locateInMenu?: 'always' | 'auto' | 'never';
    /**
     * @docid dxToolbarItem.location
     * @type Enums.ToolbarItemLocation
     * @default 'center'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    location?: 'after' | 'before' | 'center';
    /**
     * @docid dxToolbarItem.menuItemTemplate
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    menuItemTemplate?: template | (() => string | Element | JQuery);
    /**
     * @docid dxToolbarItem.options
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    options?: any;
    /**
     * @docid dxToolbarItem.showText
     * @type Enums.ToolbarItemShowTextMode
     * @default 'always'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showText?: 'always' | 'inMenu';
    /**
     * @docid dxToolbarItem.widget
     * @type Enums.ToolbarItemWidget
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    widget?: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton';
}

declare global {
interface JQuery {
    dxToolbar(): JQuery;
    dxToolbar(options: "instance"): dxToolbar;
    dxToolbar(options: string): any;
    dxToolbar(options: string, ...params: any[]): any;
    dxToolbar(options: dxToolbarOptions): JQuery;
}
}
export type Options = dxToolbarOptions;

/** @deprecated use Options instead */
export type IOptions = dxToolbarOptions;
