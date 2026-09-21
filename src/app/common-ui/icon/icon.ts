import { Component, input } from "@angular/core";

/**
 * Одноцветная иконка из PNG/SVG с прозрачным фоном.
 * Картинка используется как CSS-маска: берётся только её форма,
 * а цвет — из свойства color родителя (currentColor).
 *
 * <app-icon src="assets/images/18.png" [size]="18" />
 */
@Component({
  selector: "app-icon",
  template: "",
  styles: `
    :host {
      display: inline-block;
      flex-shrink: 0;
      background-color: currentColor;
      mask: var(--icon-src) center / contain no-repeat;
      -webkit-mask: var(--icon-src) center / contain no-repeat;
    }
  `,
  host: {
    "aria-hidden": "true",
    "[style.--icon-src]": "'url(' + src() + ')'",
    "[style.width.px]": "size()",
    "[style.height.px]": "size()",
  },
})
export class Icon {
  src = input.required<string>();
  size = input(20);
}
