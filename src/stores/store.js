import { observable, action } from 'mobx';

class Store {
  /*
    Not used bcoz i couldnt fix the issue of mobx store integration with react classes
    TODO: Fix the store and figure out how to use computed
  */
  @observable selectedDate = new Date();
  @observable monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  @action
  setSelectedDate = _date => {
    console.log('setting date: ', _date);
    this.selectedDate = _date;
  };

  // @computed
  // get getSelectedDate() {
  //   let selDate = 'No value Selected';

  //   if (this.selectedDate) {
  //     selDate = `${this.selectedDate.getDate()} ${
  //       this.monthNames[this.selectedDate.getMonth()]
  //     }`;
  //   }

  //   return selDate;
  // }
}

export default new Store();
