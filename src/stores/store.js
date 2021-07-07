import { observable, action, computed } from 'mobx';

class Store {
  @observable selectedDate = new Date();
  monthNames = [
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

  @computed
  get getSelectedDate() {
    let selDate = 'No value Selected';

    if (this.selectedDate) {
      selDate = `${this.selectedDate.getDate()} ${
        this.monthNames[this.selectedDate.getMonth()]
      }`;
    }

    return selDate;
  }
}

export default new Store();
