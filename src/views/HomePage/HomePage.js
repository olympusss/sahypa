export default {
    name: 'HomePage',
    data () {
      return {
        selectedItem: 0,
        lessonCategory: [
          { title: 'Посмотреть все' },
          { title: 'Иностранные языки' },
          { title: 'Компьютер' },
          { title: 'Подготовка к экзаменам' },
          { title: 'Математика' },
          { title: 'Для детей' },
        ],
        lessonTinyEnglish: [
          { title: 'Beginner' },
          { title: 'Elementory' },
          { title: 'Pre-intermediate' },
          { title: 'Intermediate' },
          { title: 'Upper-intermediate' },
          { title: 'Advanced' }
        ],
        lessonTinyComputer: [
          { title: 'Microsoft office' },
          { title: 'Adobe Photoshop' },
          { title: 'Adobe Illustrator' },
          { title: 'AutoCad' },
          { title: '3Ds max' }
        ],
      }
    },
    components: {
    },
  }