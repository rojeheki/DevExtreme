import {
    animationConfig
} from '../animation/fx';

import '../jquery_augmentation';

import {
    dxElement
} from '../core/element';

import Widget, {
    WidgetOptions
} from './widget/ui.widget';

export interface dxDeferRenderingOptions extends WidgetOptions<dxDeferRendering> {
    /**
     * @docid dxDeferRenderingOptions.animation
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    animation?: animationConfig;
    /**
     * @docid dxDeferRenderingOptions.onRendered
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onRendered?: ((e: { component?: dxDeferRendering, element?: dxElement, model?: any }) => any);
    /**
     * @docid dxDeferRenderingOptions.onShown
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onShown?: ((e: { component?: dxDeferRendering, element?: dxElement, model?: any }) => any);
    /**
     * @docid dxDeferRenderingOptions.renderWhen
     * @type Promise<void> | bool
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    renderWhen?: Promise<void> | JQueryPromise<void> | boolean;
    /**
     * @docid dxDeferRenderingOptions.showLoadIndicator
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showLoadIndicator?: boolean;
    /**
     * @docid dxDeferRenderingOptions.staggerItemSelector
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    staggerItemSelector?: string;
}
/**
 * @docid dxDeferRendering
 * @inherits Widget
 * @module ui/defer_rendering
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxDeferRendering extends Widget {
    constructor(element: Element, options?: dxDeferRenderingOptions)
    constructor(element: JQuery, options?: dxDeferRenderingOptions)
}

declare global {
interface JQuery {
    dxDeferRendering(): JQuery;
    dxDeferRendering(options: "instance"): dxDeferRendering;
    dxDeferRendering(options: string): any;
    dxDeferRendering(options: string, ...params: any[]): any;
    dxDeferRendering(options: dxDeferRenderingOptions): JQuery;
}
}
export type Options = dxDeferRenderingOptions;

/** @deprecated use Options instead */
export type IOptions = dxDeferRenderingOptions;
