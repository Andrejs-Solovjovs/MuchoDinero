import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Component({
  selector: "app-placeholder",
  template: `<h1>{{ title() }}</h1>`,
  styles: `:host { display: block; padding: 32px; }`,
})
export class Placeholder {
  private readonly route = inject(ActivatedRoute);
  readonly title = toSignal(this.route.data.pipe(map((d) => d["title"] as string)), { initialValue: "" });
}
