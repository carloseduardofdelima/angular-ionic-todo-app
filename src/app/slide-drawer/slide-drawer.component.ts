import { Component, ElementRef, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestureController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-slide-drawer',
  templateUrl: './slide-drawer.component.html',
  styleUrls: ['./slide-drawer.component.scss'],
})
export class SlideDrawerComponent implements AfterViewInit {
  @ViewChild('drawer', { read: ElementRef}) drawer: ElementRef;
  @Output('openSatateChanged') openState: EventEmitter<boolean> = new EventEmitter();

  fieldTextType = false;

  primaryText = 'Entrar';
  buttonText = 'Não tenho conta';

  isLogin = true;
  nameHidden = true;
  passwordHidden = true;


  isOpen = false;
  openHeight = 0;
  ishidden = false;
  
  constructor(private plt: Platform, private gestureCtrl: GestureController, private router: Router) { }

  async ngAfterViewInit() {
    const drawer = this.drawer.nativeElement;
    this.openHeight = (this.plt.height() / 100) * 80;

    const gesture = await this.gestureCtrl.create({
      el: drawer,
      gestureName: 'swipe',
      direction: 'y',
      onMove: ev => {
        console.log(ev);
        if(ev.deltaY < -this.openHeight) return;
        drawer.style.transform = `translateY(${ev.deltaY}px)`;

      },
      onEnd: ev => {
        
        if(ev.deltaY < -50 && !this.isOpen) {
          drawer.style.transition = '.4s ease-out';
          drawer.style.transform = `translateY(${-this.openHeight}px)`
          this.openState.emit(true);
          this.isOpen = true;
        } else if (ev.deltaY > 50 && this.isOpen) {
          drawer.style.transition = '.4s ease-out';
          drawer.style.transform = '';
          this.openState.emit(false);
          this.isOpen = false;
        }

      }
    });
    gesture.enable(true);
  }

  btnClick() {
    this.router.navigateByUrl('/tabs')
  }

  toggleDrawer() {
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen);

    if(this.isOpen) {
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = '';
      this.openState.emit(true);
      this.isOpen = false;
      this.ishidden = false;
    } else {
      drawer.style.transition = '.4s ease-in';
      drawer.style.transform = `translateY(${-this.openHeight}px)`;
      this.isOpen = true;
      this.ishidden = true;
    }

  }

  changeForm() {
    if (this.isLogin) {
      this.nameHidden = false;
      this.passwordHidden = false;
      this.isLogin = false;
      this.primaryText = 'Cadastrar';
      this.buttonText = 'Já tenho conta';
    } else {
      this.nameHidden = true;
      this.passwordHidden = true;
      this.isLogin = true;
      this.primaryText = 'Entrar';
      this.buttonText = 'Não tenho conta';

    }

  }

  toggleFieldTextType () {
    this.fieldTextType = !this.fieldTextType;
    console.log(this.fieldTextType)
  }

}
