class BookIntroductionController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

export const bookIntroduction = {
  templateUrl: 'app/components/BookIntroduction/BookIntroduction.html',
  controller: BookIntroductionController
};

