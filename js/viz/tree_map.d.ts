import '../jquery_augmentation';

import {
    dxElement
} from '../core/element';

import {
    PaletteType,
    PaletteExtensionModeType
} from './palette';

import {
    template
} from '../core/templates/template';

import DataSource, {
    DataSourceOptions
} from '../data/data_source';

import {
    event
} from '../events/index';

import BaseWidget, {
    BaseWidgetOptions,
    BaseWidgetTooltip,
    Font,
    WordWrapType,
    VizTextOverflowType,
} from './core/base_widget';

export interface dxTreeMapOptions extends BaseWidgetOptions<dxTreeMap> {
    /**
     * @docid dxTreeMapOptions.childrenField
     * @default 'items'
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    childrenField?: string;
    /**
     * @docid dxTreeMapOptions.colorField
     * @default 'color'
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    colorField?: string;
    /**
     * @docid dxTreeMapOptions.colorizer
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    colorizer?: { colorCodeField?: string, colorizeGroups?: boolean, palette?: Array<string> | PaletteType, paletteExtensionMode?: PaletteExtensionModeType, range?: Array<number>, type?: 'discrete' | 'gradient' | 'none' | 'range' };
    /**
     * @docid dxTreeMapOptions.dataSource
     * @extends CommonVizDataSource
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    dataSource?: Array<any> | DataSource | DataSourceOptions | string;
    /**
     * @docid dxTreeMapOptions.group
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    group?: { border?: { color?: string, width?: number }, color?: string, headerHeight?: number, hoverEnabled?: boolean, hoverStyle?: { border?: { color?: string, width?: number }, color?: string }, label?: { font?: Font, textOverflow?: VizTextOverflowType, visible?: boolean }, selectionStyle?: { border?: { color?: string, width?: number }, color?: string } };
    /**
     * @docid dxTreeMapOptions.hoverEnabled
     * @default undefined
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    hoverEnabled?: boolean;
    /**
     * @docid dxTreeMapOptions.idField
     * @default undefined
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    idField?: string;
    /**
     * @docid dxTreeMapOptions.interactWithGroup
     * @default false
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    interactWithGroup?: boolean;
    /**
     * @docid dxTreeMapOptions.labelField
     * @default 'name'
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    labelField?: string;
    /**
     * @docid dxTreeMapOptions.layoutAlgorithm
     * @type Enums.TreeMapLayoutAlgorithm | function
     * @type_function_param1 e:object
     * @type_function_param1_field1 rect:Array<number>
     * @type_function_param1_field2 sum:number
     * @type_function_param1_field3 items:Array<any>
     * @default 'squarified'
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    layoutAlgorithm?: 'sliceanddice' | 'squarified' | 'strip' | ((e: { rect?: Array<number>, sum?: number, items?: Array<any> }) => any);
    /**
     * @docid dxTreeMapOptions.layoutDirection
     * @type Enums.TreeMapLayoutDirection
     * @default 'leftTopRightBottom'
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    layoutDirection?: 'leftBottomRightTop' | 'leftTopRightBottom' | 'rightBottomLeftTop' | 'rightTopLeftBottom';
    /**
     * @docid dxTreeMapOptions.maxDepth
     * @default undefined
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    maxDepth?: number;
    /**
     * @docid dxTreeMapOptions.onClick
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @type_function_param1_field5 node:dxTreeMapNode
     * @notUsedInTheme
     * @action
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    onClick?: ((e: { component?: dxTreeMap, element?: dxElement, model?: any, event?: event, node?: dxTreeMapNode }) => any) | string;
    /**
     * @docid dxTreeMapOptions.onDrill
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 node:dxTreeMapNode
     * @notUsedInTheme
     * @action
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    onDrill?: ((e: { component?: dxTreeMap, element?: dxElement, model?: any, node?: dxTreeMapNode }) => any);
    /**
     * @docid dxTreeMapOptions.onHoverChanged
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 node:dxTreeMapNode
     * @notUsedInTheme
     * @action
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    onHoverChanged?: ((e: { component?: dxTreeMap, element?: dxElement, model?: any, node?: dxTreeMapNode }) => any);
    /**
     * @docid dxTreeMapOptions.onNodesInitialized
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 root:dxTreeMapNode
     * @notUsedInTheme
     * @action
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    onNodesInitialized?: ((e: { component?: dxTreeMap, element?: dxElement, model?: any, root?: dxTreeMapNode }) => any);
    /**
     * @docid dxTreeMapOptions.onNodesRendering
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 node:dxTreeMapNode
     * @notUsedInTheme
     * @action
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    onNodesRendering?: ((e: { component?: dxTreeMap, element?: dxElement, model?: any, node?: dxTreeMapNode }) => any);
    /**
     * @docid dxTreeMapOptions.onSelectionChanged
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 node:dxTreeMapNode
     * @notUsedInTheme
     * @action
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    onSelectionChanged?: ((e: { component?: dxTreeMap, element?: dxElement, model?: any, node?: dxTreeMapNode }) => any);
    /**
     * @docid dxTreeMapOptions.parentField
     * @default undefined
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    parentField?: string;
    /**
     * @docid dxTreeMapOptions.selectionMode
     * @type Enums.SelectionMode
     * @default undefined
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    selectionMode?: 'multiple' | 'none' | 'single';
    /**
     * @docid dxTreeMapOptions.tile
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    tile?: { border?: { color?: string, width?: number }, color?: string, hoverStyle?: { border?: { color?: string, width?: number }, color?: string }, label?: { font?: Font, textOverflow?: VizTextOverflowType, visible?: boolean, wordWrap?: WordWrapType }, selectionStyle?: { border?: { color?: string, width?: number }, color?: string } };
    /**
     * @docid dxTreeMapOptions.tooltip
     * @type object
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    tooltip?: dxTreeMapTooltip;
    /**
     * @docid dxTreeMapOptions.valueField
     * @default 'value'
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    valueField?: string;
}
export interface dxTreeMapTooltip extends BaseWidgetTooltip {
    /**
     * @docid dxTreeMapOptions.tooltip.contentTemplate
     * @type_function_param1 info:object
     * @type_function_param1_field1 value:Number
     * @type_function_param1_field2 valueText:string
     * @type_function_param1_field3 node:dxTreeMapNode
     * @type_function_param2 element:dxElement
     * @type_function_return string|Element|jQuery
     * @default undefined
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    contentTemplate?: template | ((info: { value?: number, valueText?: string, node?: dxTreeMapNode }, element: dxElement) => string | Element | JQuery);
    /**
     * @docid dxTreeMapOptions.tooltip.customizeTooltip
     * @default undefined
     * @type_function_param1 info:object
     * @type_function_param1_field1 value:Number
     * @type_function_param1_field2 valueText:string
     * @type_function_param1_field3 node:dxTreeMapNode
     * @type_function_return object
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    customizeTooltip?: ((info: { value?: number, valueText?: string, node?: dxTreeMapNode }) => any);
}
/**
 * @docid dxTreeMap
 * @inherits BaseWidget, DataHelperMixin
 * @module viz/tree_map
 * @export default
 * @prevFileNamespace DevExpress.viz
 * @public
 */
export default class dxTreeMap extends BaseWidget {
    constructor(element: Element, options?: dxTreeMapOptions)
    constructor(element: JQuery, options?: dxTreeMapOptions)
    /**
     * @docid dxTreeMap.clearSelection
     * @publicName clearSelection()
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    clearSelection(): void;
    /**
     * @docid dxTreeMap.drillUp
     * @publicName drillUp()
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    drillUp(): void;
    /**
     * @docid dxTreeMap.getCurrentNode
     * @publicName getCurrentNode()
     * @return dxTreeMapNode
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    getCurrentNode(): dxTreeMapNode;
    getDataSource(): DataSource;
    /**
     * @docid dxTreeMap.getRootNode
     * @publicName getRootNode()
     * @return dxTreeMapNode
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    getRootNode(): dxTreeMapNode;
    /**
     * @docid dxTreeMap.hideTooltip
     * @publicName hideTooltip()
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    hideTooltip(): void;
    /**
     * @docid dxTreeMap.resetDrillDown
     * @publicName resetDrillDown()
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    resetDrillDown(): void;
}

export interface dxTreeMapNode {
    /**
     * @docid dxTreeMapNode.customize
     * @publicName customize(options)
     * @param1 options:object
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    customize(options: any): void;
    /**
     * @docid dxTreeMapNode.data
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    data?: any;
    /**
     * @docid dxTreeMapNode.drillDown
     * @publicName drillDown()
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    drillDown(): void;
    /**
     * @docid dxTreeMapNode.getAllChildren
     * @publicName getAllChildren()
     * @return Array<dxTreeMapNode>
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    getAllChildren(): Array<dxTreeMapNode>;
    /**
     * @docid dxTreeMapNode.getAllNodes
     * @publicName getAllNodes()
     * @return Array<dxTreeMapNode>
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    getAllNodes(): Array<dxTreeMapNode>;
    /**
     * @docid dxTreeMapNode.getChild
     * @publicName getChild(index)
     * @param1 index:number
     * @return dxTreeMapNode
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    getChild(index: number): dxTreeMapNode;
    /**
     * @docid dxTreeMapNode.getChildrenCount
     * @publicName getChildrenCount()
     * @return number
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    getChildrenCount(): number;
    /**
     * @docid dxTreeMapNode.getParent
     * @publicName getParent()
     * @return dxTreeMapNode
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    getParent(): dxTreeMapNode;
    /**
     * @docid dxTreeMapNode.index
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    index?: number;
    /**
     * @docid dxTreeMapNode.isActive
     * @publicName isActive()
     * @return boolean
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    isActive(): boolean;
    /**
     * @docid dxTreeMapNode.isHovered
     * @publicName isHovered()
     * @return boolean
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    isHovered(): boolean;
    /**
     * @docid dxTreeMapNode.isleaf
     * @publicName isLeaf()
     * @return boolean
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    isLeaf(): boolean;
    /**
     * @docid dxTreeMapNode.isSelected
     * @publicName isSelected()
     * @return boolean
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    isSelected(): boolean;
    /**
     * @docid dxTreeMapNode.label
     * @publicName label()
     * @return string
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    label(): string;
    /**
     * @docid dxTreeMapNode.label
     * @publicName label(label)
     * @param1 label:string
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    label(label: string): void;
    /**
     * @docid dxTreeMapNode.level
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    level?: number;
    /**
     * @docid dxTreeMapNode.resetCustomization
     * @publicName resetCustomization()
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    resetCustomization(): void;
    /**
     * @docid dxTreeMapNode.select
     * @publicName select(state)
     * @param1 state:boolean
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    select(state: boolean): void;
    /**
     * @docid dxTreeMapNode.showTooltip
     * @publicName showTooltip()
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    showTooltip(): void;
    /**
     * @docid dxTreeMapNode.value
     * @publicName value()
     * @return number
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    value(): number;
}

declare global {
interface JQuery {
    dxTreeMap(): JQuery;
    dxTreeMap(options: "instance"): dxTreeMap;
    dxTreeMap(options: string): any;
    dxTreeMap(options: string, ...params: any[]): any;
    dxTreeMap(options: dxTreeMapOptions): JQuery;
}
}
export type Options = dxTreeMapOptions;

/** @deprecated use Options instead */
export type IOptions = dxTreeMapOptions;
