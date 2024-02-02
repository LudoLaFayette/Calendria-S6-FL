<template>
<div class="c-calendrier">
  <div class="calendar">
    <div class="calendar__header" :style="{ backgroundColor: currentColor, height: headerHeight + 'px' }">
      <StylesStyleIcon name="chevronLeft" size="small" background="backgroundBCK" @click="navigate('prev')"/>
      <h1>{{ monthNames[currentMonth - 1] }} {{ currentYear }}</h1>
      <StylesStyleIcon name="chevronRight" size="small" background="backgroundBCK" @click="navigate('next')"/>
    </div>
    <div class="calendar__weekdays">
      <div v-for="(day, index) in weekdayNames" :key="index" :style="weekdayStyles">{{ day.substring(0, 3) }}</div>
    </div>
    <div class="calendar__content" :style="contentStyles">
      <div v-for="(day, index) in days" :key="index" :class="[day.class]" :style="dayStyles">{{ day.date }}</div>
    </div>
  </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'Calendar',
    data() {
      return {
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth() + 1,
        calendarWidth: 560, // Ajustez selon vos besoins
        colors: ["#16a085", "#1abc9c", "#c0392b", "#27ae60", "#FF6860", "#f39c12", "#f1c40f", "#e67e22", "#2ecc71", "#e74c3c", "#d35400", "#2c3e50"],
        monthNames: ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRRE", "NOVEMBRE", "DECEMBRE"],
        weekdayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        days: [],
      };
    },
    computed: {
      currentColor() {
        return this.colors[this.currentMonth - 1];
      },
      headerHeight() {
        return this.calendarWidth / 7;
      },
      dayStyles() {
        const size = this.calendarWidth / 7;
        return { width: size + 'px', height: size + 'px', lineHeight: size + 'px' };
      },
      weekdayStyles() {
        return this.dayStyles;
      },
      contentStyles() {
        return { width: this.calendarWidth + 'px' };
      },
    },
    methods: {
      navigate(direction) {
        if (direction === 'next') {
          if (this.currentMonth === 12) {
            this.currentMonth = 1;
            this.currentYear++;
          } else {
            this.currentMonth++;
          }
        } else if (direction === 'prev') {
          if (this.currentMonth === 1) {
            this.currentMonth = 12;
            this.currentYear--;
          } else {
            this.currentMonth--;
          }
        }
        this.generateCalendar();
      },
      daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
      },
      generateCalendar() {
        const daysCount = this.daysInMonth(this.currentMonth, this.currentYear);
        this.days = [];
        let firstDay = new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
        
        for (let i = 0; i < firstDay; i++) {
          this.days.push({ date: '', class: 'blank' });
        }
        
        for (let day = 1; day <= daysCount; day++) {
          const isToday = new Date().getFullYear() === this.currentYear &&
                          new Date().getMonth() + 1 === this.currentMonth &&
                          new Date().getDate() === day;
          this.days.push({ date: day, class: isToday ? 'today' : '' });
        }
      },
    },
    mounted() {
      this.generateCalendar();
    }
  };
  </script>
   

   <style lang="scss" scoped>
   .c-calendrier {
  background-color: #F5F1E9;
  margin-bottom: 50px; // Ajoutez une marge en bas pour le footer
}

.calendar {
  margin-left: auto;
  margin-right: auto;
  width: 560px; // Assurez-vous que cela correspond à la largeur dans votre composant Vue
  font-family: 'Lato', sans-serif;
  background-color: #787878;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 37px; // Peut être ajusté en fonction de la hauteur de l'en-tête dans Vue
    text-align: center;
    background-color: #FF6860; // Utilisez Vue.js pour dynamiser cette couleur
    padding: 18px 0;
    border-radius: 12px 12px 0 0;
    color: #FFFFFF;

    h1 {
      font-size: 1.5em;
      flex-grow: 1;
    }

    .icon {
      // Style pour les icônes si nécessaire
    }
  }

  &__weekdays, &__content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;

    div {
      flex: 1 0 14.28%; // 7 jours donc 100% / 7
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FFFFFF;
      color: #787878;

      &.blank {
        background-color: #E8E8E8;
      }

      &:hover {
        background-color: #F8F8F8;
      }

      &.today {
        opacity: 0.7;
        color: #FFFFFF;
      }
    }
  }
}

   </style>
   

