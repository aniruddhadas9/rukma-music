import {Component} from '@angular/core';
import {ChangeLocationModelComponent, Footer, Header} from '@candifood/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'rukma music';
  header: Header;
  footer: Footer;

  modalRef;

  constructor(
    private modalService: NgbModal
  ) {
    this.header = {
      brand: {
        label: 'Rukmani Music',
        url: '/',
        logo: {
          imageInAsset: '',
          style: {
            width: '30px',
            height: '30px'
          }
        },
        style: {
          'color': '#f99d00',
          'text-decoration': 'none'
        }
      },
      links: {
        rightLinks: [
          {label: 'Students', url: '/student', display: true},
          {label: 'Music', url: '/profile', display: true},
          {label: 'Profile', url: '/profile', display: true},
        ],
        leftLinks: null,
        style: {
          'background-color': '#7a690b',
          'color': '#f99d00',
          'margin': '0 5px',
          'text-decoration': 'none',
          'a:link': {
            'color': '#3eff77'
          },
          'a:visited': {
            'color': '#f99d00'
          },
          'a:hover': {
            'color': '#fe4d0e'
          },
          'a:active': {
            'color': '#ec7a39'
          }
        }
      },
      middleButton: {
        display: false,
        label: 'Trying to get location from device...',
        loading: true,
        style: {
          'background-color': '#7a690b',
          'color': '#f99d00'
        }
      },
      style: {
        'background-color': '#7a690b'
      }
    };


    this.footer = {
      displayTopSection: true,
      social: {
        facebook: 'http://www.facebook.com',
        googlePlus: 'http://www.plus.google.com',
        twitter: 'http://www.twitter.com',
        linkedIn: 'http://www.linkedin.com',
      },
      copyright: {
        year: 2018,
        label: 'Rukmani music team',
        url: 'https://www.candifood.com'
      },
      contact: {
        name: 'Rukma Subedi',
        email: 'rukmasubedi@gmail.com',
        phone: '+1 xxx xxx xxxx',
        fax: '+x xxx xxx xxxx'
      },
      message: {
        heading: 'All your music solution',
        desc: 'Music is my life line.'
      },
      columnOneLinks: [
        {label: 'login', url: '/login'},
        {label: 'Privacy', url: '/privacy'}
      ],
      columnTwoLinks: [
        {label: 'profile', url: '/profile'}
      ],
      style: {
        'background-color': '#7a690b',
        'color': '#f99d00',
        'a:link': {
          'color': '#ffc11a'
        },
        'a:visited': {
          'color': '#16d3ff'
        },
        'a:hover': {
          'color': '#fbfe11'
        },
        'a:active': {
          'color': '#d0eccb'
        }
      }
    };

  }

  openLocationChangeModel(event) {
    this.modalRef = this.modalService.open(ChangeLocationModelComponent, {windowClass: 'location-change-modal'});
    this.modalRef.componentInstance.output.subscribe((location) => {
      this.header.middleButton.label = location.formatted_address;
    });
  }


}

