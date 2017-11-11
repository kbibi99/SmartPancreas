import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MesurePage} from '../mesure/mesure';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MesurePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
