import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public productObs: Observable<any[]>;
  public newProductsAndVariants = [
    {
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },
    {
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },
    {
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },{
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },
    {
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },
    {
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },
    {
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },{
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },
    {
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },
    {
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },{
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },{
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    },{
      languages: {
        en: {
          name: 'Fade',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a earum natus, aliquam quaerat, eaque omnis placeat saepe eum rerum ipsa facere dolore! Modi commodi impedit tempora ratione nihil. Cum.'
        }
      },
      variants: [
        {
          languages: {
            en: {
              variantName: '3mm Fade'
            }
          },
          duration: '25',
          pricing: [
            {
              price: 350
            }
          ]
        }
      ]
    }
  ];
  constructor() {
    this.productObs = of(this.newProductsAndVariants).pipe(delay(500));
  }
  eventEmitted(value) {
    console.log('value', value);
  }

}
