import {Component, EventEmitter, h, Prop, Event} from "@stencil/core";

@Component({
    tag: "emc-modal-dialog-passive"
})
export class ModalDialog {
    @Prop({attribute: 'title'})
    public modalTitle: string;

    @Prop({
        mutable: true,
        reflectToAttr: true
    })
    public visible: boolean;

    @Event() private cancel: EventEmitter;

    private handleCancelClick = () => {
        this.visible = false;
        this.cancel.emit();
    };

    render() {
        return (
            <div role="presentation" class={this.visible ? "emc-modal-wrapper emc-modal__wrapper--visible" : "emc-modal-wrapper"}>
                <div role="dialog" aria-label="Default Dialog" aria-modal="true" class="emc-modal emc-modal--sm">
                    <div class="emc-modal-title">
                        <button class="emc-modal-button__close emc-modal-button--transparent"
                                aria-label="Close modal dialog" onClick={this.handleCancelClick}></button>
                        {this.modalTitle}
                    </div>
                    <div class="emc-modal-content" aria-labelledby="emc-modal-title">
                        <slot />
                    </div>
                </div>
            </div>
        );
    }
}
