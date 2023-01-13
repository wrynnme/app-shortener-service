import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { IconsProviderModule } from ".././icons-provider.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
	declarations: [HeaderComponent, FooterComponent],
	imports: [
		CommonModule,
		IconsProviderModule,
		NzLayoutModule,
		NzMenuModule,
		NzBreadCrumbModule,
	],
	exports: [HeaderComponent, FooterComponent],
})
export class LayoutsModule {}
