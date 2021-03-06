import '../../jquery_augmentation';

import {
    dxElement
} from '../../core/element';

import {
    event
} from '../../events/index';

import dxButton, {
    dxButtonOptions
} from '../button';

import Editor, {
    EditorOptions
} from '../editor/editor';

export interface dxTextEditorOptions<T = dxTextEditor> extends EditorOptions<T> {
    /**
     * @docid dxTextEditorOptions.buttons
     * @type Array<string, Enums.TextBoxButtonName, dxTextEditorButton>
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    buttons?: Array<string | 'clear' | dxTextEditorButton>;
    /**
     * @docid dxTextEditorOptions.focusStateEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    focusStateEnabled?: boolean;
    /**
     * @docid dxTextEditorOptions.hoverStateEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hoverStateEnabled?: boolean;
    /**
     * @docid dxTextEditorOptions.inputAttr
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    inputAttr?: any;
    /**
     * @docid dxTextEditorOptions.mask
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    mask?: string;
    /**
     * @docid dxTextEditorOptions.maskChar
     * @default "_"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    maskChar?: string;
    /**
     * @docid dxTextEditorOptions.maskInvalidMessage
     * @default "Value is invalid"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    maskInvalidMessage?: string;
    /**
     * @docid dxTextEditorOptions.maskRules
     * @default "{}"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    maskRules?: any;
    /**
     * @docid dxTextEditorOptions.name
     * @hidden false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    name?: string;
    /**
     * @docid dxTextEditorOptions.onChange
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onChange?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.onCopy
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onCopy?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.onCut
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onCut?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.onEnterKey
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onEnterKey?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.onFocusIn
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onFocusIn?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.onFocusOut
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onFocusOut?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.onInput
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onInput?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.onKeyDown
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @default null
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onKeyDown?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.onKeyPress
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @deprecated
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onKeyPress?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.onKeyUp
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onKeyUp?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.onPaste
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onPaste?: ((e: { component?: T, element?: dxElement, model?: any, event?: event }) => any);
    /**
     * @docid dxTextEditorOptions.placeholder
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    placeholder?: string;
    /**
     * @docid dxTextEditorOptions.showClearButton
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showClearButton?: boolean;
    /**
     * @docid dxTextEditorOptions.showMaskMode
     * @type Enums.ShowMaskMode
     * @default "always"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showMaskMode?: 'always' | 'onFocus';
    /**
     * @docid dxTextEditorOptions.spellcheck
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    spellcheck?: boolean;
    /**
     * @docid dxTextEditorOptions.stylingMode
     * @type Enums.EditorStylingMode
     * @default 'outlined'
     * @default 'underlined' [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    stylingMode?: 'outlined' | 'underlined' | 'filled';
    /**
     * @docid dxTextEditorOptions.text
     * @readonly
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    text?: string;
    /**
     * @docid dxTextEditorOptions.useMaskedValue
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    useMaskedValue?: boolean;
    /**
     * @docid dxTextEditorOptions.value
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    value?: any;
    /**
     * @docid dxTextEditorOptions.valueChangeEvent
     * @default "change"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    valueChangeEvent?: string;
}
/**
 * @docid dxTextEditor
 * @inherits Editor
 * @hidden
 * @prevFileNamespace DevExpress.ui
 */
export default class dxTextEditor extends Editor {
    constructor(element: Element, options?: dxTextEditorOptions)
    constructor(element: JQuery, options?: dxTextEditorOptions)
    /**
     * @docid dxTextEditor.blur
     * @publicName blur()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    blur(): void;
    /**
     * @docid dxTextEditor.focus
     * @publicName focus()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    focus(): void;
    /**
     * @docid dxTextEditor.getButton
     * @publicName getButton(name)
     * @param1 name:string
     * @return dxButton | undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getButton(name: string): dxButton | undefined;
}

export interface dxTextEditorButton {
    /**
     * @docid dxTextEditorButton.location
     * @type Enums.TextEditorButtonLocation
     * @default "after"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    location?: 'after' | 'before';
    /**
     * @docid dxTextEditorButton.name
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    name?: string;
    /**
     * @docid dxTextEditorButton.options
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    options?: dxButtonOptions;
}
