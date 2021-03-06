import {
    dxElement, dxSVGElement
} from '../core/element';

import {
    template
} from '../core/templates/template';

import DataSource, {
    DataSourceOptions
} from '../data/data_source';

import Widget, {
    WidgetOptions
} from './widget/ui.widget';

export interface dxDiagramOptions extends WidgetOptions<dxDiagram> {
    /**
     * @docid dxDiagramOptions.autoZoomMode
     * @type Enums.DiagramAutoZoomMode
     * @default "disabled"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    autoZoomMode?: 'fitContent' | 'fitWidth' | 'disabled';
    /**
     * @docid dxDiagramOptions.contextMenu
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    contextMenu?: { commands?: Array<'separator'|'exportSvg'|'exportPng'|'exportJpg'|'undo'|'redo'|'cut'|'copy'|'paste'|'selectAll'|'delete'|'fontName'|'fontSize'|'bold'|'italic'|'underline'|'fontColor'|'lineColor'|'fillColor'|'textAlignLeft'|'textAlignCenter'|'textAlignRight'|'lock'|'unlock'|'sendToBack'|'bringToFront'|'insertShapeImage'|'editShapeImage'|'deleteShapeImage'|'connectorLineType'|'connectorLineStart'|'connectorLineEnd'|'layoutTreeTopToBottom'|'layoutTreeBottomToTop'|'layoutTreeLeftToRight'|'layoutTreeRightToLeft'|'layoutLayeredTopToBottom'|'layoutLayeredBottomToTop'|'layoutLayeredLeftToRight'|'layoutLayeredRightToLeft'|'fullScreen'|'zoomLevel'|'showGrid'|'snapToGrid'|'gridSize'|'units'|'pageSize'|'pageOrientation'|'pageColor'>, enabled?: boolean };
    /**
     * @docid dxDiagramOptions.contextToolbox
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    contextToolbox?: { category?: 'general' | 'flowchart' | 'orgChart' | 'containers' | 'custom' | string, displayMode?: 'icons' | 'texts', enabled?: boolean, shapes?: Array<'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight'> | Array<string> };
    /**
     * @docid dxDiagramOptions.onCustomCommand
     * @type_function_param1 e:object
     * @type_function_param1_field1 component:this
     * @type_function_param1_field2 element:dxElement
     * @type_function_param1_field3 name:String
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onCustomCommand?: ((e: { component?: dxDiagram, element?: dxElement, name?: string }) => any);
    /**
     * @docid dxDiagramOptions.customShapeTemplate
     * @type_function_param1 container:dxSVGElement
     * @type_function_param2 data:object
     * @type_function_param2_field1 item:dxDiagramShape
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    customShapeTemplate?: template | ((container: dxSVGElement, data: { item?: dxDiagramShape }) => any);
    /**
     * @docid dxDiagramOptions.customShapeToolboxTemplate
     * @type_function_param1 container:dxSVGElement
     * @type_function_param2 data:object
     * @type_function_param2_field1 item:dxDiagramShape
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    customShapeToolboxTemplate?: template | ((container: dxSVGElement, data: { item?: dxDiagramShape }) => any);
    /**
     * @docid dxDiagramOptions.customShapes
     * @default []
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    customShapes?: Array<{ allowEditImage?: boolean, allowEditText?: boolean, allowResize?: boolean, backgroundImageHeight?: number, backgroundImageLeft?: number, backgroundImageTop?: number, backgroundImageUrl?: string, backgroundImageToolboxUrl?: string, backgroundImageWidth?: number, baseType?: 'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight' | string, category?: string, connectionPoints?: Array<{ x?: number, y?: number }>, defaultHeight?: number, defaultImageUrl?: string, defaultText?: string, defaultWidth?: number, imageHeight?: number, imageLeft?: number, imageTop?: number, imageWidth?: number, maxHeight?: number, maxWidth?: number, minHeight?: number, minWidth?: number, template?: template | ((container: dxSVGElement, data: { item?: dxDiagramShape }) => any), templateHeight?: number, templateLeft?: number, templateTop?: number, templateWidth?: number, textHeight?: number, textLeft?: number, textTop?: number, textWidth?: number, title?: string, type?: string, keepRatioOnAutoSize?: boolean }>;
    /**
     * @docid dxDiagramOptions.defaultItemProperties
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    defaultItemProperties?: { style?: Object, textStyle?: Object, connectorLineType?: 'straight' | 'orthogonal', connectorLineStart?: 'none' | 'arrow' | 'outlinedTriangle' | 'filledTriangle', connectorLineEnd?: 'none' | 'arrow' | 'outlinedTriangle' | 'filledTriangle', shapeMinWidth?: number, shapeMaxWidth?: number, shapeMinHeight?: number, shapeMaxHeight?: number };
    /**
     * @docid dxDiagramOptions.editing
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    editing?: { allowAddShape?: boolean, allowDeleteShape?: boolean, allowDeleteConnector?: boolean, allowChangeConnection?: boolean, allowChangeConnectorPoints?: boolean, allowChangeConnectorText?: boolean, allowChangeShapeText?: boolean, allowResizeShape?: boolean, allowMoveShape?: boolean };
    /**
     * @docid dxDiagramOptions.edges
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    edges?: { dataSource?: Array<any> | DataSource | DataSourceOptions, fromExpr?: string | ((data: any) => any), fromLineEndExpr?: string | ((data: any) => any), fromPointIndexExpr?: string | ((data: any) => any), keyExpr?: string | ((data: any) => any), lineTypeExpr?: string | ((data: any) => any), lockedExpr?: string | ((data: any) => any), pointsExpr?: string | ((data: any) => any), styleExpr?: string | ((data: any) => any), textExpr?: string | ((data: any) => any), textStyleExpr?: string | ((data: any) => any), toExpr?: string | ((data: any) => any), toLineEndExpr?: string | ((data: any) => any), toPointIndexExpr?: string | ((data: any) => any), zIndexExpr?: string | ((data: any) => any) };
    /**
     * @docid dxDiagramOptions.export
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    export?: { fileName?: string, proxyUrl?: string };
    /**
     * @docid dxDiagramOptions.fullScreen
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fullScreen?: boolean;
    /**
     * @docid dxDiagramOptions.gridSize
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    gridSize?: number | { items?: Array<number>, value?: number };
    /**
     * @docid dxDiagramOptions.nodes
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    nodes?: { autoLayout?: 'off' | 'tree' | 'layered' | { orientation?: 'vertical' | 'horizontal', type?: 'off' | 'tree' | 'layered' }, autoSizeEnabled?: boolean, containerChildrenExpr?: string | ((data: any) => any), containerKeyExpr?: string | ((data: any) => any), dataSource?: Array<any> | DataSource | DataSourceOptions, heightExpr?: string | ((data: any) => any), imageUrlExpr?: string | ((data: any) => any), itemsExpr?: string | ((data: any) => any), keyExpr?: string | ((data: any) => any), leftExpr?: string | ((data: any) => any), lockedExpr?: string | ((data: any) => any), parentKeyExpr?: string | ((data: any) => any), styleExpr?: string | ((data: any) => any), textExpr?: string | ((data: any) => any), textStyleExpr?: string | ((data: any) => any), topExpr?: string | ((data: any) => any), typeExpr?: string | ((data: any) => any), widthExpr?: string | ((data: any) => any), zIndexExpr?: string | ((data: any) => any) };
    /**
     * @docid dxDiagramOptions.hasChanges
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hasChanges?: boolean;
    /**
     * @docid dxDiagramOptions.onItemClick
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 item:dxDiagramItem
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemClick?: ((e: { component?: dxDiagram, element?: dxElement, model?: any, item?: dxDiagramItem }) => any);
    /**
     * @docid dxDiagramOptions.onItemDblClick
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 item:dxDiagramItem
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemDblClick?: ((e: { component?: dxDiagram, element?: dxElement, model?: any, item?: dxDiagramItem }) => any);
    /**
     * @docid dxDiagramOptions.onSelectionChanged
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 items:Array<dxDiagramItem>
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onSelectionChanged?: ((e: { component?: dxDiagram, element?: dxElement, model?: any, items?: Array<dxDiagramItem> }) => any);
    /**
     * @docid dxDiagramOptions.onRequestEditOperation
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 operation:Enums.DiagramModelOperation
     * @type_function_param1_field5 args:dxDiagramAddShapeArgs|dxDiagramAddShapeFromToolboxArgs|dxDiagramDeleteShapeArgs|dxDiagramDeleteConnectorArgs|dxDiagramChangeConnectionArgs|dxDiagramChangeConnectorPointsArgs|dxDiagramBeforeChangeShapeTextArgs|dxDiagramChangeShapeTextArgs|dxDiagramBeforeChangeConnectorTextArgs|dxDiagramChangeConnectorTextArgs|dxDiagramResizeShapeArgs|dxDiagramMoveShapeArgs
     * @type_function_param1_field6 updateUI:boolean
     * @type_function_param1_field7 allowed:boolean
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onRequestEditOperation?: ((e: { component?: dxDiagram, element?: dxElement, model?: any, operation?: 'addShape' | 'addShapeFromToolbox' | 'deleteShape' | 'deleteConnector' | 'changeConnection' | 'changeConnectorPoints', args?: dxDiagramAddShapeArgs|dxDiagramAddShapeFromToolboxArgs|dxDiagramDeleteShapeArgs|dxDiagramDeleteConnectorArgs|dxDiagramChangeConnectionArgs|dxDiagramChangeConnectorPointsArgs|dxDiagramBeforeChangeShapeTextArgs|dxDiagramChangeShapeTextArgs|dxDiagramBeforeChangeConnectorTextArgs|dxDiagramChangeConnectorTextArgs|dxDiagramResizeShapeArgs|dxDiagramMoveShapeArgs, updateUI?: boolean, allowed?: boolean }) => any);
    /**
     * @docid dxDiagramOptions.onRequestLayoutUpdate
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 changes:Array<any>
     * @type_function_param1_field5 allowed:boolean
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onRequestLayoutUpdate?: ((e: { component?: dxDiagram, element?: dxElement, model?: any, changes?: any[], allowed?: boolean }) => any);
    /**
     * @docid dxDiagramOptions.pageColor
     * @default "white"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pageColor?: string;
    /**
     * @docid dxDiagramOptions.pageOrientation
     * @type Enums.DiagramPageOrientation
     * @default "portrait"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pageOrientation?: 'portrait' | 'landscape';
    /**
     * @docid dxDiagramOptions.pageSize
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pageSize?: { height?: number, items?: Array<{ height?: number, text?: string, width?: number }>, width?: number };
    /**
     * @docid dxDiagramOptions.propertiesPanel
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    propertiesPanel?: { tabs?: Array<{ commands?: Array<'separator'|'exportSvg'|'exportPng'|'exportJpg'|'undo'|'redo'|'cut'|'copy'|'paste'|'selectAll'|'delete'|'fontName'|'fontSize'|'bold'|'italic'|'underline'|'fontColor'|'lineColor'|'fillColor'|'textAlignLeft'|'textAlignCenter'|'textAlignRight'|'lock'|'unlock'|'sendToBack'|'bringToFront'|'insertShapeImage'|'editShapeImage'|'deleteShapeImage'|'connectorLineType'|'connectorLineStart'|'connectorLineEnd'|'layoutTreeTopToBottom'|'layoutTreeBottomToTop'|'layoutTreeLeftToRight'|'layoutTreeRightToLeft'|'layoutLayeredTopToBottom'|'layoutLayeredBottomToTop'|'layoutLayeredLeftToRight'|'layoutLayeredRightToLeft'|'fullScreen'|'zoomLevel'|'showGrid'|'snapToGrid'|'gridSize'|'units'|'pageSize'|'pageOrientation'|'pageColor'> }>, visibility?: 'auto' | 'visible' | 'collapsed' | 'disabled' };
    /**
     * @docid dxDiagramOptions.readOnly
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    readOnly?: boolean;
    /**
     * @docid dxDiagramOptions.showGrid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showGrid?: boolean;
    /**
     * @docid dxDiagramOptions.simpleView
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    simpleView?: boolean;
    /**
     * @docid dxDiagramOptions.snapToGrid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    snapToGrid?: boolean;
    /**
     * @docid dxDiagramOptions.mainToolbar
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    mainToolbar?: { commands?: Array<'separator'|'exportSvg'|'exportPng'|'exportJpg'|'undo'|'redo'|'cut'|'copy'|'paste'|'selectAll'|'delete'|'fontName'|'fontSize'|'bold'|'italic'|'underline'|'fontColor'|'lineColor'|'fillColor'|'textAlignLeft'|'textAlignCenter'|'textAlignRight'|'lock'|'unlock'|'sendToBack'|'bringToFront'|'insertShapeImage'|'editShapeImage'|'deleteShapeImage'|'connectorLineType'|'connectorLineStart'|'connectorLineEnd'|'layoutTreeTopToBottom'|'layoutTreeBottomToTop'|'layoutTreeLeftToRight'|'layoutTreeRightToLeft'|'layoutLayeredTopToBottom'|'layoutLayeredBottomToTop'|'layoutLayeredLeftToRight'|'layoutLayeredRightToLeft'|'fullScreen'|'zoomLevel'|'showGrid'|'snapToGrid'|'gridSize'|'units'|'pageSize'|'pageOrientation'|'pageColor'>, visible?: boolean };
    /**
     * @docid dxDiagramOptions.historyToolbar
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    historyToolbar?: { commands?: Array<'separator'|'exportSvg'|'exportPng'|'exportJpg'|'undo'|'redo'|'cut'|'copy'|'paste'|'selectAll'|'delete'|'fontName'|'fontSize'|'bold'|'italic'|'underline'|'fontColor'|'lineColor'|'fillColor'|'textAlignLeft'|'textAlignCenter'|'textAlignRight'|'lock'|'unlock'|'sendToBack'|'bringToFront'|'insertShapeImage'|'editShapeImage'|'deleteShapeImage'|'connectorLineType'|'connectorLineStart'|'connectorLineEnd'|'layoutTreeTopToBottom'|'layoutTreeBottomToTop'|'layoutTreeLeftToRight'|'layoutTreeRightToLeft'|'layoutLayeredTopToBottom'|'layoutLayeredBottomToTop'|'layoutLayeredLeftToRight'|'layoutLayeredRightToLeft'|'fullScreen'|'zoomLevel'|'showGrid'|'snapToGrid'|'gridSize'|'units'|'pageSize'|'pageOrientation'|'pageColor'>, visible?: boolean };
    /**
     * @docid dxDiagramOptions.viewToolbar
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    viewToolbar?: { commands?: Array<'separator'|'exportSvg'|'exportPng'|'exportJpg'|'undo'|'redo'|'cut'|'copy'|'paste'|'selectAll'|'delete'|'fontName'|'fontSize'|'bold'|'italic'|'underline'|'fontColor'|'lineColor'|'fillColor'|'textAlignLeft'|'textAlignCenter'|'textAlignRight'|'lock'|'unlock'|'sendToBack'|'bringToFront'|'insertShapeImage'|'editShapeImage'|'deleteShapeImage'|'connectorLineType'|'connectorLineStart'|'connectorLineEnd'|'layoutTreeTopToBottom'|'layoutTreeBottomToTop'|'layoutTreeLeftToRight'|'layoutTreeRightToLeft'|'layoutLayeredTopToBottom'|'layoutLayeredBottomToTop'|'layoutLayeredLeftToRight'|'layoutLayeredRightToLeft'|'fullScreen'|'zoomLevel'|'showGrid'|'snapToGrid'|'gridSize'|'units'|'pageSize'|'pageOrientation'|'pageColor'>, visible?: boolean };
    /**
     * @docid dxDiagramOptions.toolbox
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toolbox?: { groups?: Array<{ category?: 'general' | 'flowchart' | 'orgChart' | 'containers' | 'custom' | string, displayMode?: 'icons' | 'texts', expanded?: boolean, shapes?: Array<'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight'> | Array<string>, title?: string }> | Array<'general' | 'flowchart' | 'orgChart' | 'containers' | 'custom'>, visibility?: 'auto' | 'visible' | 'collapsed' | 'disabled' };
    /**
     * @docid dxDiagramOptions.units
     * @type Enums.DiagramUnits
     * @default "in"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    units?: 'in' | 'cm' | 'px';
    /**
     * @docid dxDiagramOptions.viewUnits
     * @type Enums.DiagramUnits
     * @default "in"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    viewUnits?: 'in' | 'cm' | 'px';
    /**
     * @docid dxDiagramOptions.zoomLevel
     * @default 1
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    zoomLevel?: number | { items?: Array<number>, value?: number };
}
/**
 * @docid dxDiagram
 * @inherits Widget
 * @module ui/diagram
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxDiagram extends Widget {
    constructor(element: Element, options?: dxDiagramOptions)
    constructor(element: JQuery, options?: dxDiagramOptions)
    /**
     * @docid dxDiagram.getNodeDataSource
     * @publicName getNodeDataSource()
     * @return DataSource
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getNodeDataSource(): DataSource;
    /**
     * @docid dxDiagram.getEdgeDataSource
     * @publicName getEdgeDataSource()
     * @return DataSource
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getEdgeDataSource(): DataSource;
    /**
     * @docid dxDiagram.getItemByKey
     * @publicName getItemByKey(key)
     * @param1 key:Object
     * @return dxDiagramItem
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getItemByKey(key: Object): dxDiagramItem;
    /**
     * @docid dxDiagram.getItemById
     * @publicName getItemById(id)
     * @param1 id:String
     * @return dxDiagramItem
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getItemById(id: string): dxDiagramItem;
    /**
     * @docid dxDiagram.export
     * @publicName export()
     * @return string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    export(): string;
    /**
     * @docid dxDiagram.exportTo
     * @publicName exportTo(format, callback)
     * @param1 format:Enums.DiagramExportFormat
     * @param2 callback:function
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    exportTo(format: 'svg' | 'png' | 'jpg', callback: Function): void;
    /**
     * @docid dxDiagram.import
     * @publicName import(data, updateExistingItemsOnly)
     * @param1 data:string
     * @param2 updateExistingItemsOnly?:boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    import(data: string, updateExistingItemsOnly?: boolean): void;
    /**
     * @docid dxDiagram.updateToolbox
     * @publicName updateToolbox()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    updateToolbox(): void;
}

/**
 * @docid dxDiagramConnector
 * @inherits dxDiagramItem
 */
export interface dxDiagramConnector extends dxDiagramItem {
    /**
     * @docid dxDiagramConnector.fromKey
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fromKey?: any;
    /**
     * @docid dxDiagramConnector.fromId
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fromId?: string;
    /**
     * @docid dxDiagramConnector.fromPointIndex
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fromPointIndex?: number;
    /**
     * @docid dxDiagramConnector.points
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    points?: Array<Object>;
    /**
     * @docid dxDiagramConnector.points.x
     * @type Number
     */
    /**
     * @docid dxDiagramConnector.points.y
     * @type Number
     */
    /**
     * @docid dxDiagramConnector.texts
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    texts?: Array<string>;
    /**
     * @docid dxDiagramConnector.toKey
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toKey?: any;
    /**
     * @docid dxDiagramConnector.toId
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toId?: string;
    /**
     * @docid dxDiagramConnector.toPointIndex
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toPointIndex?: number;
}

/**
 * @docid dxDiagramItem
 */
export interface dxDiagramItem {
    /**
     * @docid dxDiagramItem.dataItem
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataItem?: any;
    /**
     * @docid dxDiagramItem.id
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    id?: string;
    /**
     * @docid dxDiagramItem.key
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    key?: Object;
    /**
     * @docid dxDiagramItem.itemType
     * @type Enums.DiagramItemType
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    itemType?: 'shape' | 'connector';
}

/**
 * @docid dxDiagramShape
 * @inherits dxDiagramItem
 */
export interface dxDiagramShape extends dxDiagramItem {
    /**
     * @docid dxDiagramShape.text
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    text?: string;
    /**
     * @docid dxDiagramShape.type
     * @type Enums.DiagramShapeType|String
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight' | string;
    /**
     * @docid dxDiagramShape.position
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    position?: Object;
    /**
     * @docid dxDiagramShape.position.x
     * @type Number
     */
    /**
     * @docid dxDiagramShape.position.y
     * @type Number
     */
    /**
     * @docid dxDiagramShape.size
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    size?: Object;
    /**
     * @docid dxDiagramShape.size.width
     * @type Number
     */
    /**
     * @docid dxDiagramShape.size.height
     * @type Number
     */
    /**
     * @docid dxDiagramShape.attachedConnectorIds
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    attachedConnectorIds?: Array<String>;
}

/**
 * @docid dxDiagramCustomCommand
 */
export interface dxDiagramCustomCommand {
    /**
     * @docid dxDiagramCustomCommand.name
     * @type String|Enums.DiagramCommand
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    name?: string;
    /**
     * @docid dxDiagramCustomCommand.text
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    text?: string;
    /**
     * @docid dxDiagramCustomCommand.icon
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    icon?: string;
    /**
     * @docid dxDiagramCustomCommand.items
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<dxDiagramCustomCommand>;
}

/**
 * @docid dxDiagramAddShapeArgs
 */
export interface dxDiagramAddShapeArgs {
    /**
     * @docid dxDiagramAddShapeArgs.shape
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    shape?: dxDiagramShape;
    /**
     * @docid dxDiagramAddShapeArgs.position
     */
    position?: Object;
    /**
     * @docid dxDiagramAddShapeArgs.position.x
     * @type Number
     */
    /**
     * @docid dxDiagramAddShapeArgs.position.y
     * @type Number
     */
}

/**
 * @docid dxDiagramAddShapeFromToolboxArgs
 */
export interface dxDiagramAddShapeFromToolboxArgs {
  /**
   * @docid dxDiagramAddShapeFromToolboxArgs.shapeType
   * @type Enums.DiagramShapeType|String
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  shapeType?: 'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight' | string;
}

/**
 * @docid dxDiagramDeleteShapeArgs
 */
export interface dxDiagramDeleteShapeArgs {
  /**
   * @docid dxDiagramDeleteShapeArgs.shape
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  shape?: dxDiagramShape;
}

/**
 * @docid dxDiagramDeleteConnectorArgs
 */
export interface dxDiagramDeleteConnectorArgs {
  /**
   * @docid dxDiagramDeleteConnectorArgs.connector
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  connector?: dxDiagramConnector;
}

/**
 * @docid dxDiagramChangeConnectionArgs
 */
export interface dxDiagramChangeConnectionArgs {
  /**
   * @docid dxDiagramChangeConnectionArgs.newShape
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  newShape?: dxDiagramShape;
  /**
   * @docid dxDiagramChangeConnectionArgs.oldShape
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  oldShape?: dxDiagramShape;
  /**
   * @docid dxDiagramChangeConnectionArgs.connector
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  connector?: dxDiagramConnector;
  /**
   * @docid dxDiagramChangeConnectionArgs.connectionPointIndex
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  connectionPointIndex?: number;
  /**
   * @docid dxDiagramChangeConnectionArgs.connectorPosition
   * @type Enums.DiagramConnectorPosition
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  connectorPosition?: 'start' | 'end';
}

/**
 * @docid dxDiagramChangeConnectorPointsArgs
 */
export interface dxDiagramChangeConnectorPointsArgs {
  /**
   * @docid dxDiagramChangeConnectorPointsArgs.connector
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  connector?: dxDiagramConnector;
  /**
    * @docid dxDiagramChangeConnectorPointsArgs.newPoints
    */
   newPoints?: Array<Object>;
   /**
    * @docid dxDiagramChangeConnectorPointsArgs.newPoints.x
    * @type Number
    */
   /**
    * @docid dxDiagramChangeConnectorPointsArgs.newPoints.y
    * @type Number
    */
  /**
    * @docid dxDiagramChangeConnectorPointsArgs.oldPoints
    */
   oldPoints?: Array<Object>;
   /**
    * @docid dxDiagramChangeConnectorPointsArgs.oldPoints.x
    * @type Number
    */
   /**
    * @docid dxDiagramChangeConnectorPointsArgs.oldPoints.y
    * @type Number
    */
}

/**
 * @docid dxDiagramBeforeChangeShapeTextArgs
 */
export interface dxDiagramBeforeChangeShapeTextArgs {
  /**
   * @docid dxDiagramBeforeChangeShapeTextArgs.shape
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  shape?: dxDiagramShape;
}

/**
 * @docid dxDiagramChangeShapeTextArgs
 */
export interface dxDiagramChangeShapeTextArgs {
  /**
   * @docid dxDiagramChangeShapeTextArgs.shape
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  shape?: dxDiagramShape;
  /**
   * @docid dxDiagramChangeShapeTextArgs.text
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  text?: string;
}

/**
 * @docid dxDiagramBeforeChangeConnectorTextArgs
 */
export interface dxDiagramBeforeChangeConnectorTextArgs {
  /**
   * @docid dxDiagramBeforeChangeConnectorTextArgs.connector
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  connector?: dxDiagramConnector;
  /**
   * @docid dxDiagramBeforeChangeConnectorTextArgs.index
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  index?: number;
}

/**
 * @docid dxDiagramChangeConnectorTextArgs
 */
export interface dxDiagramChangeConnectorTextArgs {
  /**
   * @docid dxDiagramChangeConnectorTextArgs.connector
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  connector?: dxDiagramConnector;
  /**
   * @docid dxDiagramChangeConnectorTextArgs.index
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  index?: number;
  /**
   * @docid dxDiagramChangeConnectorTextArgs.text
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  text?: string;
}

/**
 * @docid dxDiagramResizeShapeArgs
 */
export interface dxDiagramResizeShapeArgs {
  /**
   * @docid dxDiagramResizeShapeArgs.shape
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  shape?: dxDiagramShape;
  /**
    * @docid dxDiagramResizeShapeArgs.newSize
    * @type Array<Object>
    */
   newSize?: Object;
   /**
    * @docid dxDiagramResizeShapeArgs.newSize.width
    * @type Number
    */
   /**
    * @docid dxDiagramResizeShapeArgs.newSize.height
    * @type Number
    */
  /**
    * @docid dxDiagramResizeShapeArgs.oldSize
    * @type Array<Object>
    */
   oldSize?: Object;
   /**
    * @docid dxDiagramResizeShapeArgs.oldSize.width
    * @type Number
    */
   /**
    * @docid dxDiagramResizeShapeArgs.oldSize.height
    * @type Number
    */
}

/**
 * @docid dxDiagramMoveShapeArgs
 */
export interface dxDiagramMoveShapeArgs {
  /**
   * @docid dxDiagramMoveShapeArgs.shape
   * @prevFileNamespace DevExpress.ui
   * @public
   */
  shape?: dxDiagramShape;
  /**
    * @docid dxDiagramMoveShapeArgs.newPosition
    * @type Array<Object>
    */
   newSize?: Object;
   /**
    * @docid dxDiagramMoveShapeArgs.newPosition.x
    * @type Number
    */
   /**
    * @docid dxDiagramMoveShapeArgs.newPosition.y
    * @type Number
    */
  /**
    * @docid dxDiagramMoveShapeArgs.oldPosition
    * @type Array<Object>
    */
   oldSize?: Object;
   /**
    * @docid dxDiagramMoveShapeArgs.oldPosition.x
    * @type Number
    */
   /**
    * @docid dxDiagramMoveShapeArgs.oldPosition.y
    * @type Number
    */
}

declare global {
interface JQuery {
    dxDiagram(): JQuery;
    dxDiagram(options: "instance"): dxDiagram;
    dxDiagram(options: string): any;
    dxDiagram(options: string, ...params: any[]): any;
    dxDiagram(options: dxDiagramOptions): JQuery;
}
}
export type Options = dxDiagramOptions;

/** @deprecated use Options instead */
export type IOptions = dxDiagramOptions;
