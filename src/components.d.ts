/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EmcAccordion {
    }
    interface EmcAccordionItem {
        "itemId": string;
        "itemTitle": string;
    }
    interface EmcModalDialog {
        "modalTitle": string;
        "visible": boolean;
    }
    interface EmcModalDialogPassive {
        "modalTitle": string;
        "visible": boolean;
    }
    interface PudsMenuToggle {
        "isExpanded": boolean;
    }
}
declare global {
    interface HTMLEmcAccordionElement extends Components.EmcAccordion, HTMLStencilElement {
    }
    var HTMLEmcAccordionElement: {
        prototype: HTMLEmcAccordionElement;
        new (): HTMLEmcAccordionElement;
    };
    interface HTMLEmcAccordionItemElement extends Components.EmcAccordionItem, HTMLStencilElement {
    }
    var HTMLEmcAccordionItemElement: {
        prototype: HTMLEmcAccordionItemElement;
        new (): HTMLEmcAccordionItemElement;
    };
    interface HTMLEmcModalDialogElement extends Components.EmcModalDialog, HTMLStencilElement {
    }
    var HTMLEmcModalDialogElement: {
        prototype: HTMLEmcModalDialogElement;
        new (): HTMLEmcModalDialogElement;
    };
    interface HTMLEmcModalDialogPassiveElement extends Components.EmcModalDialogPassive, HTMLStencilElement {
    }
    var HTMLEmcModalDialogPassiveElement: {
        prototype: HTMLEmcModalDialogPassiveElement;
        new (): HTMLEmcModalDialogPassiveElement;
    };
    interface HTMLPudsMenuToggleElement extends Components.PudsMenuToggle, HTMLStencilElement {
    }
    var HTMLPudsMenuToggleElement: {
        prototype: HTMLPudsMenuToggleElement;
        new (): HTMLPudsMenuToggleElement;
    };
    interface HTMLElementTagNameMap {
        "emc-accordion": HTMLEmcAccordionElement;
        "emc-accordion-item": HTMLEmcAccordionItemElement;
        "emc-modal-dialog": HTMLEmcModalDialogElement;
        "emc-modal-dialog-passive": HTMLEmcModalDialogPassiveElement;
        "puds-menu-toggle": HTMLPudsMenuToggleElement;
    }
}
declare namespace LocalJSX {
    interface EmcAccordion {
    }
    interface EmcAccordionItem {
        "itemId"?: string;
        "itemTitle"?: string;
    }
    interface EmcModalDialog {
        "modalTitle"?: string;
        "onCancel"?: (event: CustomEvent<any>) => void;
        "onOk"?: (event: CustomEvent<any>) => void;
        "visible"?: boolean;
    }
    interface EmcModalDialogPassive {
        "modalTitle"?: string;
        "onCancel"?: (event: CustomEvent<any>) => void;
        "visible"?: boolean;
    }
    interface PudsMenuToggle {
        "isExpanded"?: boolean;
        "onToggle"?: (event: CustomEvent<boolean>) => void;
    }
    interface IntrinsicElements {
        "emc-accordion": EmcAccordion;
        "emc-accordion-item": EmcAccordionItem;
        "emc-modal-dialog": EmcModalDialog;
        "emc-modal-dialog-passive": EmcModalDialogPassive;
        "puds-menu-toggle": PudsMenuToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "emc-accordion": LocalJSX.EmcAccordion & JSXBase.HTMLAttributes<HTMLEmcAccordionElement>;
            "emc-accordion-item": LocalJSX.EmcAccordionItem & JSXBase.HTMLAttributes<HTMLEmcAccordionItemElement>;
            "emc-modal-dialog": LocalJSX.EmcModalDialog & JSXBase.HTMLAttributes<HTMLEmcModalDialogElement>;
            "emc-modal-dialog-passive": LocalJSX.EmcModalDialogPassive & JSXBase.HTMLAttributes<HTMLEmcModalDialogPassiveElement>;
            "puds-menu-toggle": LocalJSX.PudsMenuToggle & JSXBase.HTMLAttributes<HTMLPudsMenuToggleElement>;
        }
    }
}
