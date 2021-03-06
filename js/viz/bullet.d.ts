import BaseSparkline, {
    BaseSparklineOptions
} from './sparklines/base_sparkline';

export interface dxBulletOptions extends BaseSparklineOptions<dxBullet> {
    /**
     * @docid dxBulletOptions.color
     * @default '#e8c267'
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    color?: string;
    /**
     * @docid dxBulletOptions.endScaleValue
     * @default undefined
     * @notUsedInTheme
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    endScaleValue?: number;
    /**
     * @docid dxBulletOptions.showTarget
     * @default true
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    showTarget?: boolean;
    /**
     * @docid dxBulletOptions.showZeroLevel
     * @default true
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    showZeroLevel?: boolean;
    /**
     * @docid dxBulletOptions.startScaleValue
     * @default 0
     * @notUsedInTheme
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    startScaleValue?: number;
    /**
     * @docid dxBulletOptions.target
     * @default 0
     * @notUsedInTheme
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    target?: number;
    /**
     * @docid dxBulletOptions.targetColor
     * @default '#666666'
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    targetColor?: string;
    /**
     * @docid dxBulletOptions.targetWidth
     * @default 4
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    targetWidth?: number;
    /**
     * @docid dxBulletOptions.value
     * @default 0
     * @notUsedInTheme
     * @prevFileNamespace DevExpress.viz
     * @public
     */
    value?: number;
}
/**
 * @docid dxBullet
 * @inherits BaseSparkline
 * @module viz/bullet
 * @export default
 * @prevFileNamespace DevExpress.viz
 * @public
 */
export default class dxBullet extends BaseSparkline {
    constructor(element: Element, options?: dxBulletOptions)
    constructor(element: JQuery, options?: dxBulletOptions)
}

declare global {
interface JQuery {
    dxBullet(): JQuery;
    dxBullet(options: "instance"): dxBullet;
    dxBullet(options: string): any;
    dxBullet(options: string, ...params: any[]): any;
    dxBullet(options: dxBulletOptions): JQuery;
}
}
export type Options = dxBulletOptions;

/** @deprecated use Options instead */
export type IOptions = dxBulletOptions;